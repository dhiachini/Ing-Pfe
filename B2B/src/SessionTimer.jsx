import React, { useState, useEffect } from 'react';

const SessionTimer = ({ timeoutInMinutes }) => {
  const [sessionTimeout, setSessionTimeout] = useState(timeoutInMinutes * 60 * 1000);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Code to handle session timeout, e.g., logout user or show a modal
      console.log('Session expired!');
    }, sessionTimeout);

    return () => clearTimeout(timer);
  }, [sessionTimeout]);

  return null; // This component doesn't render anything visible in the UI
};

export default SessionTimer;
