const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../dist')));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // limit each IP to 10 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});

app.use('/api/', limiter);

// Email transporter setup
let transporter;

try {
  transporter = nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
} catch (error) {
  console.warn('Email configuration not set up. Contact forms will log to console.');
}

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, company, businessType, message } = req.body;

    // Validation
    if (!name || !email || !businessType || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all required fields.'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a valid email address.'
      });
    }

    // If no email transporter, log to console (for development)
    if (!transporter) {
      console.log('Contact Form Submission:', {
        name,
        email,
        company: company || 'Not provided',
        businessType,
        message,
        timestamp: new Date().toISOString()
      });
      
      return res.json({
        success: true,
        message: 'Thank you for your message! We\'ll get back to you within 24 hours.'
      });
    }

    // Send email to company
    const companyMailOptions = {
      from: process.env.EMAIL_USER,
      to: 'hello@underdog.agency',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Business Type:</strong> ${businessType}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
      `
    };

    // Send confirmation email to user
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting Underdog Marketing',
      html: `
        <h2>Thank you for reaching out!</h2>
        <p>Hi ${name},</p>
        <p>We've received your message and will get back to you within 24 hours.</p>
        <p>In the meantime, feel free to check out our case studies and free resources on our website.</p>
        <p>Your inquiry details:</p>
        <ul>
          <li><strong>Business Type:</strong> ${businessType}</li>
          <li><strong>Company:</strong> ${company || 'Not provided'}</li>
        </ul>
        <p>Best regards,<br>The Underdog Team</p>
      `
    };

    await transporter.sendMail(companyMailOptions);
    await transporter.sendMail(userMailOptions);

    res.json({
      success: true,
      message: 'Thank you for your message! We\'ll get back to you within 24 hours.'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again or contact us directly.'
    });
  }
});

// Newsletter subscription endpoint
app.post('/api/newsletter', async (req, res) => {
  try {
    const { email } = req.body;

    // Validation
    if (!email) {
      return res.status(400).json({
        success: false,
        message: 'Please enter your email address.'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a valid email address.'
      });
    }

    // If no email transporter, log to console (for development)
    if (!transporter) {
      console.log('Newsletter Subscription:', {
        email,
        timestamp: new Date().toISOString()
      });
      
      return res.json({
        success: true,
        message: 'Thanks for subscribing! Check your email for confirmation.'
      });
    }

    // Send notification to company
    const companyMailOptions = {
      from: process.env.EMAIL_USER,
      to: 'hello@underdog.agency',
      subject: 'New Newsletter Subscription',
      html: `
        <h2>New Newsletter Subscription</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
      `
    };

    // Send welcome email to subscriber
    const welcomeMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Welcome to Underdog Marketing Insights!',
      html: `
        <h2>Welcome to our community!</h2>
        <p>Thank you for subscribing to Underdog Marketing Insights.</p>
        <p>You'll receive weekly marketing tips, case studies, and exclusive resources to help grow your business.</p>
        <p>As a welcome gift, here are some of our most popular free resources:</p>
        <ul>
          <li>The Complete Retail Marketing Playbook</li>
          <li>E-commerce Conversion Optimization Checklist</li>
          <li>Social Media Content Calendar Template</li>
        </ul>
        <p>Stay tuned for valuable insights delivered to your inbox!</p>
        <p>Best regards,<br>The Underdog Team</p>
      `
    };

    await transporter.sendMail(companyMailOptions);
    await transporter.sendMail(welcomeMailOptions);

    res.json({
      success: true,
      message: 'Thanks for subscribing! Check your email for confirmation.'
    });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    res.status(500).json({
      success: false,
      message: 'Subscription failed. Please try again.'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    emailConfigured: !!transporter
  });
});

// Serve React app for all non-API routes (for production)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`Email configured: ${!!transporter}`);
});