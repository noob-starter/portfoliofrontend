import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { colors } from '../theme/colors';
import loadingIcon from '../assets/loadingIcon.png';

const Loader = ({ onLoadingComplete }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);

  // Loading screen progress animation
  useEffect(() => {
    // Set flag to hide navbar
    sessionStorage.setItem('portfolioLoadingScreen', 'true');

    const duration = 4500; // 4.5 seconds total
    const interval = 50; // Update every 50ms
    const steps = duration / interval;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setLoadingProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            sessionStorage.removeItem('portfolioLoadingScreen'); // Remove flag when loading completes
            if (onLoadingComplete) {
              onLoadingComplete();
            }
          }, 200); // Small delay after reaching 100%
          return 100;
        }
        return next;
      });
    }, interval);

    return () => {
      clearInterval(timer);
      sessionStorage.removeItem('portfolioLoadingScreen');
    };
  }, [onLoadingComplete]);

  return (
    <div 
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{ backgroundColor: colors.background.glass }}
    >
      {/* Background Loading Icon */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 2.2 }}
        transition={{ duration: 1 }}
      >
        <img
          src={loadingIcon}
          alt="Loading"
          className="w-auto h-auto max-w-[80%] max-h-[80%] object-contain"
        />
      </motion.div>

      <motion.div
        className="flex flex-col items-center gap-8 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <motion.h1
          className="text-6xl font-bold text-gray-800"
          style={{ fontFamily: "'Getaway Car', sans-serif" }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Pratik Yawalkar
        </motion.h1>

        {/* Loading Text */}
        <motion.p
          className="text-2xl text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          loading portfolio...
        </motion.p>

        {/* Progress Bar Container */}
        <motion.div
          className="w-96 max-w-[90vw]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {/* Progress Bar Background */}
          <div className="w-full h-3 bg-gray-300 rounded-full overflow-hidden shadow-inner">
            {/* Progress Bar Fill with Gradient */}
            <motion.div
              className="h-full rounded-full"
              style={{
                background: `linear-gradient(90deg, ${colors.theme.blue} 0%, ${colors.theme.mint} 50%, ${colors.theme.green} 100%)`,
                width: `${loadingProgress}%`,
              }}
              transition={{ duration: 0.2 }}
            />
          </div>

          {/* Percentage Display */}
          <motion.div
            className="text-center mt-4 text-xl font-semibold text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            {Math.round(loadingProgress)}%
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Loader;

