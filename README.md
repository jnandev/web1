# Underdog Marketing Website

A modern, full-stack marketing website built with React, TypeScript, and Express.js.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- VS Code (recommended)

### Installation

1. **Clone or download this project to your local machine**

2. **Open the project in VS Code:**
   ```bash
   code .
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` file with your email credentials:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   PORT=3001
   FRONTEND_URL=http://localhost:5173
   ```

5. **Start the development server:**
   ```bash
   npm run dev
   ```

This will start both the frontend (Vite) and backend (Express) servers concurrently.

## 📁 Project Structure

```
underdog-marketing-website/
├── src/                    # Frontend React app
│   ├── components/         # Reusable components
│   ├── pages/             # Page components
│   ├── api/               # API utilities
│   ├── hooks/             # Custom React hooks
│   └── App.tsx            # Main app component
├── server/                # Backend Express server
│   └── index.js          # Server entry point
├── public/               # Static assets
└── package.json          # Dependencies and scripts
```

## 🛠 Available Scripts

- `npm run dev` - Start both frontend and backend in development mode
- `npm run build` - Build the frontend for production
- `npm run preview` - Preview the production build
- `npm run server` - Start only the backend server
- `npm run lint` - Run ESLint

## 📧 Email Setup (Gmail)

1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
3. Use this app password in your `.env` file

## 🌐 Deployment

### Frontend (Netlify/Vercel)
```bash
npm run build
# Deploy the 'dist' folder
```

### Backend (Railway/Heroku)
The backend is ready for deployment with proper environment variable support.

## 🔧 VS Code Extensions (Recommended)

Install these extensions for the best development experience:
- ES7+ React/Redux/React-Native snippets
- TypeScript Importer
- Tailwind CSS IntelliSense
- Auto Rename Tag
- Bracket Pair Colorizer
- GitLens
- Thunder Client (for API testing)

## 📱 Features

- ✅ Responsive design
- ✅ Contact form with email notifications
- ✅ Newsletter subscription
- ✅ Multiple service landing pages
- ✅ Case studies and testimonials
- ✅ Blog and resources sections
- ✅ Pricing page
- ✅ SEO optimized
- ✅ Performance optimized

## 🐛 Troubleshooting

### Common Issues:

1. **Port already in use:**
   ```bash
   # Kill process on port 3001
   npx kill-port 3001
   ```

2. **Email not sending:**
   - Check your Gmail app password
   - Verify 2FA is enabled
   - Check firewall settings

3. **Build errors:**
   ```bash
   # Clear node modules and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

## 📞 Support

For questions or issues, please check the troubleshooting section above or contact the development team.