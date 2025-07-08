import { useState } from 'react';
import { submitContactForm, ContactFormData } from '../api/contact';

export const useContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const submit = async (data: ContactFormData) => {
    setStatus('loading');
    
    try {
      const result = await submitContactForm(data);
      
      if (result.success) {
        setStatus('success');
        setMessage(result.message);
        
        // Reset status after 10 seconds for success
        setTimeout(() => {
          setStatus('idle');
          setMessage('');
        }, 10000);
      } else {
        setStatus('error');
        setMessage(result.message);
      }
    } catch (error) {
      setStatus('error');
      setMessage('Network error. Please check your connection and try again.');
    }
  };

  const reset = () => {
    setStatus('idle');
    setMessage('');
  };

  return {
    status,
    message,
    submit,
    reset
  };
};