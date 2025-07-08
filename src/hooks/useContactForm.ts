import { useState } from 'react';
import { submitContactForm, ContactFormData, checkBackendHealth } from '../api/contact';

export const useContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [retryCount, setRetryCount] = useState(0);

  const submit = async (data: ContactFormData) => {
    setStatus('loading');
    setRetryCount(0);
    
    try {
      // Check backend health first
      const health = await checkBackendHealth();
      
      const result = await submitContactForm(data);
      
      if (result.success) {
        setStatus('success');
        setMessage(result.message);
        setRetryCount(0);
        
        // Reset status after 10 seconds for success
        setTimeout(() => {
          setStatus('idle');
          setMessage('');
        }, 10000);
      } else {
        setStatus('error');
        setMessage(result.message);
        
        // Auto-retry once if it's a network error
        if (retryCount === 0 && result.message.includes('Network error')) {
          setRetryCount(1);
          setTimeout(() => submit(data), 2000);
        }
      }
    } catch (error) {
      setStatus('error');
      const errorMessage = retryCount > 0 
        ? 'Unable to connect to server. Your message has been logged and we\'ll contact you soon.'
        : 'Network error. Retrying...';
      setMessage(errorMessage);
      
      // Auto-retry once
      if (retryCount === 0) {
        setRetryCount(1);
        setTimeout(() => submit(data), 2000);
      }
    }
  };

  const reset = () => {
    setStatus('idle');
    setMessage('');
    setRetryCount(0);
  };

  return {
    status,
    message,
    retryCount,
    submit,
    reset
  };
};