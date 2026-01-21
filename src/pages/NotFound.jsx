import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Button from '../components/Button';
import logger from '../utils/logger';
import '../styles/NotFound.css';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    logger.warn('404 Page Accessed:', window.location.pathname);
  }, []);

  return (
    <div className="notfound-container">
      <h1 className="notfound-h1">404</h1>
      <div className="cloak__wrapper">
        <div className="cloak__container">
          <div className="cloak"></div>
        </div>
      </div>
      <div className="info">
        <h1 className='text-6xl font-bold text-gray-800 tracking-tight shine-text mb-6' style={{ fontFamily: "'Getaway Car', sans-serif" }}>SORRY</h1>
        <h2 className='mb-4'>We can't find this page</h2>
        <p className='mb-6'>
          We're sorry, but the page you're looking for can't be found. 
          It may have been moved, deleted, or is temporarily unavailable.
        </p>
        <Button 
          onClick={() => navigate('/')} 
          content="Home"
        />
      </div>
    </div>
  );
};

export default NotFound;

