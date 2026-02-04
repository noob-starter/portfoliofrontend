import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { lazy, Suspense, useState, useEffect } from 'react';
import RouteGuard from './components/RouteGuard';
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import colors from './theme/colors';

// Lazy load pages for better code splitting and security
const Home = lazy(() => import('./pages/Home'));
const Inquire = lazy(() => import('./pages/Inquire'));
const Project = lazy(() => import('./pages/Project'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Loading component for Suspense fallback
const LoadingFallback = () => <Loader />;

function Layout() {
  const location = useLocation();
  const validPaths = ['/', '/inquire', '/project', '/contact'];
  const showNavbar = validPaths.includes(location.pathname);
  const [isLoadingScreenActive, setIsLoadingScreenActive] = useState(false);
  const { isDarkMode } = useTheme();

  // Check if loading screen is active
  useEffect(() => {
    const checkLoadingScreen = () => {
      const loadingActive = sessionStorage.getItem('portfolioLoadingScreen') === 'true';
      setIsLoadingScreenActive(loadingActive);
    };

    // Initial check
    checkLoadingScreen();

    // Poll for changes (since we can't listen to sessionStorage changes in the same tab easily)
    const interval = setInterval(checkLoadingScreen, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen" style={{ 
      backgroundColor: isDarkMode ? colors.darkBackground.primary : colors.background.primary 
    }}>
      {showNavbar && !isLoadingScreenActive && <Navbar />}
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inquire" element={<Inquire />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <RouteGuard>
          <Layout />
        </RouteGuard>
      </Router>
    </ThemeProvider>
  );
}

export default App;
