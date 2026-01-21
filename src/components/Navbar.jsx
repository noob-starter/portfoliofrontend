import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';
import DownloadIcon from '../assets/icons/download.png';
import MenuIcon from '../assets/icons/menu.png';
import CloseIcon from '../assets/icons/cancel.png';
import PortfolioIcon from '../assets/logo.png';
import ResumeFile from '../assets/resumes/resume_1.pdf';
import colors from '../theme/colors.js';

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass shadow-sm"
         style={{ borderBottom: `2.5px solid ${colors.ui.black}` }}>
      <div className="w-full px-4 md:px-6 lg:px-8 relative flex items-center md:justify-center"
           style={{ minHeight: '50px' }}>

        <Link to="/" className="md:absolute md:left-8 lg:left-12 xl:left-24 flex items-center gap-2 md:gap-3 lg:gap-4 z-20"
              onClick={closeMobileMenu}>
          <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-gradient-to-br from-brand-teal-light
          to-brand-cyan flex items-center justify-center overflow-hidden">
            <img src={PortfolioIcon} alt="Portfolio" className="w-12 h-8 md:w-15 md:h-10 lg:w-18 lg:h-12" />
          </div>
          <div className="flex flex-col">
            <span className="text-base md:text-lg lg:text-xl font-bold text-text-primary leading-tight">Portfolio</span>
          </div>
        </Link>


        <div className="absolute left-1/2 transform -translate-x-1/2 md:absolute md:left-auto md:right-8 lg:right-12 xl:right-24
        md:transform-none">
          <Button
            href={ResumeFile}
            download="latest_resume.pdf"
            content="Latest Resume"
            icon={
              <img src={DownloadIcon} alt="Download" className="w-4 h-4 md:w-5 md:h-5" />
            }
          />
        </div>

        {/* Hamburger Menu - Right on mobile, hidden on tablet/desktop */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden absolute right-4 flex items-center justify-center w-12 h-12 rounded-lg z-50
          focus:outline-none hover:bg-gray-100 transition-all"
          aria-label="Toggle menu"
        >
          <img
            src={isMobileMenuOpen ? CloseIcon : MenuIcon}
            alt={isMobileMenuOpen ? "Close menu" : "Open menu"}
            className="w-7 h-7 transition-transform duration-300"
          />
        </button>

        {/* Desktop Navigation - Hidden on mobile, shown on tablet and larger */}
        <div className="hidden md:inline-flex items-center justify-center gap-8 lg:gap-12 xl:gap-16 2xl:gap-24">
          <Link
            to="/"
            className={`text-text-primary hover:text-text-secondary text-base xl:text-lg transition-all
            whitespace-nowrap px-4 xl:px-8 py-3 relative ${
              isActive('/') ? 'font-bold' : 'font-medium'
            }`}
            style={isActive('/') ? {
              position: 'relative',
              zIndex: 10
            } : {}}
          >
            Home
            {isActive('/') && (
              <span style={{
                position: 'absolute',
                bottom: '-14px',
                left: '-15px',
                width: '90px',
                height: '3px',
                background: colors.background.glass,
                backdropFilter: 'blur(10px)',
                zIndex: 11
              }}></span>
            )}
          </Link>
          <Link
            to="/project"
            className={`text-text-primary hover:text-text-secondary text-base xl:text-lg transition-all
            whitespace-nowrap px-4 xl:px-8 py-3 relative ${
              isActive('/project') ? 'font-bold' : 'font-medium'
            }`}
            style={isActive('/project') ? {
              position: 'relative',
              zIndex: 10
            } : {}}
          >
            Project
            {isActive('/project') && (
              <span style={{
                position: 'absolute',
                bottom: '-14px',
                left: '-15px',
                width: '90px',
                height: '3px',
                background: colors.background.glass,
                backdropFilter: 'blur(10px)',
                zIndex: 11
              }}></span>
            )}
          </Link>
          <Link
            to="/contact"
            className={`text-text-primary hover:text-text-secondary text-base xl:text-lg transition-all
            whitespace-nowrap px-4 xl:px-8 py-3 relative ${
              isActive('/contact') ? 'font-bold' : 'font-medium'
            }`}
            style={isActive('/contact') ? {
              position: 'relative',
              zIndex: 10
            } : {}}
          >
            Contact
            {isActive('/contact') && (
              <span style={{
                position: 'absolute',
                bottom: '-14px',
                left: '-15px',
                width: '90px',
                height: '3px',
                background: colors.background.glass,
                backdropFilter: 'blur(10px)',
                zIndex: 11
              }}></span>
            )}
          </Link>
          <Link
            to="/inquire"
            className={`text-text-primary hover:text-text-secondary text-base xl:text-lg transition-all
            whitespace-nowrap px-4 xl:px-8 py-3 relative ${
              isActive('/inquire') ? 'font-bold' : 'font-medium'
            }`}
            style={isActive('/inquire') ? {
              position: 'relative',
              zIndex: 10
            } : {}}
          >
            Inquire
            {isActive('/inquire') && (
              <span style={{
                position: 'absolute',
                bottom: '-14px',
                left: '-15px',
                width: '90px',
                height: '3px',
                background: colors.background.glass,
                backdropFilter: 'blur(10px)',
                zIndex: 11
              }}></span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden glass overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{
          borderTop: isMobileMenuOpen ? `1px solid ${colors.ui.black}20` : 'none'
        }}
      >
        <div className="flex flex-col py-4 px-6 space-y-2">
          <Link
            to="/"
            onClick={closeMobileMenu}
            className={`text-text-primary hover:text-text-secondary text-lg transition-all
            py-3 rounded-lg ${
              isActive('/') ? 'font-bold bg-brand-teal-light bg-opacity-10' : 'font-medium'
            }`}
            style={{ paddingLeft: '2rem', paddingRight: '1rem' }}
          >
            Home
          </Link>
          <Link
            to="/project"
            onClick={closeMobileMenu}
            className={`text-text-primary hover:text-text-secondary text-lg transition-all
            py-3 rounded-lg ${
              isActive('/project') ? 'font-bold bg-brand-teal-light bg-opacity-10' : 'font-medium'
            }`}
            style={{ paddingLeft: '2rem', paddingRight: '1rem' }}
          >
            Project
          </Link>
          <Link
            to="/contact"
            onClick={closeMobileMenu}
            className={`text-text-primary hover:text-text-secondary text-lg transition-all
            py-3 rounded-lg ${
              isActive('/contact') ? 'font-bold bg-brand-teal-light bg-opacity-10' : 'font-medium'
            }`}
            style={{ paddingLeft: '2rem', paddingRight: '1rem' }}
          >
            Contact
          </Link>
          <Link
            to="/inquire"
            onClick={closeMobileMenu}
            className={`text-text-primary hover:text-text-secondary text-lg transition-all
            py-3 rounded-lg ${
              isActive('/inquire') ? 'font-bold bg-brand-teal-light bg-opacity-10' : 'font-medium'
            }`}
            style={{ paddingLeft: '2rem', paddingRight: '1rem' }}
          >
            Inquire
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
