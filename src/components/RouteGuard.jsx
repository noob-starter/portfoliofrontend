import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logger from '../utils/logger';

/**
 * RouteGuard Hook
 * Provides additional security checks for route navigation
 */
export const useRouteGuard = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Track page views for analytics/security monitoring
    logger.info('Route accessed:', location.pathname);

    // Sanitize URL parameters to prevent XSS
    const searchParams = new URLSearchParams(location.search);
    const hasUnsafeParams = Array.from(searchParams.values()).some(value => {
      // Check for common XSS patterns
      const xssPatterns = /<script|javascript:|onerror=|onload=/i;
      return xssPatterns.test(value);
    });

    if (hasUnsafeParams) {
      logger.error('Suspicious URL parameters detected, redirecting to home');
      navigate('/', { replace: true });
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });

  }, [location, navigate]);
};

/**
 * RouteGuard Component
 * Wraps routes with security checks
 */
const RouteGuard = ({ children }) => {
  useRouteGuard();
  return children;
};

export default RouteGuard;

