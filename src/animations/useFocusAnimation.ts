import { useState, useEffect } from 'react';

export const useFocusAnimation = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => prev + 1);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return {
    activeStep,
  };
};