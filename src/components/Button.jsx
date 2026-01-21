import { Link } from 'react-router-dom';
import { colors } from '../theme/colors';

/**
 * Generic Button Component
 * 
 * Use cases:
 * 1. Internal Navigation: Pass `to` prop for React Router links
 * 2. External Links/Downloads: Pass `href` and optionally `download` props
 * 3. Custom Actions: Pass `onClick` prop for custom function calls
 * 
 * Props:
 * @param {string} to - Internal route path (for React Router navigation)
 * @param {string} href - External URL or file path (for downloads/external links)
 * @param {string} download - Filename for download (optional, used with href)
 * @param {function} onClick - Custom click handler function
 * @param {string} content - Button text content
 * @param {ReactNode} icon - Icon element to display
 * @param {string} className - Additional CSS classes
 */
const Button = ({ 
  to, 
  href, 
  download, 
  onClick, 
  content, 
  icon, 
  className = '' 
}) => {

  const buttonClasses = `relative inline-flex items-center justify-center gap-6 text-sm 
  font-bold transition-all duration-200 rounded-2xl focus:outline-none transform-gpu hover:-translate-y-1 
  hover:shadow-xl whitespace-nowrap ${className}`;
  
  const buttonStyles = { 
    paddingLeft: '1.25rem',
    paddingRight: '1.25rem', 
    paddingTop: '0.3125rem',
    paddingBottom: '0.3125rem',
    width: 'auto',
    minWidth: 'fit-content',
    color: colors.ui.white,
    background: `linear-gradient(to right, ${colors.theme.blue}, ${colors.theme.green})`,
    fontWeight: 'bold',
    textDecoration: 'none',
  };

  const buttonContent = (
    <>
      <span>{content}</span>
      {icon && (
        <span className="inline-flex items-center">
          {icon}
        </span>
      )}
    </>
  );

  const ButtonWrapper = ({ children }) => (
    <div className="relative inline-block group" style={{ width: 'auto' }}>
      <div 
        className="absolute inset-0 transition-all duration-1000 opacity-20 rounded-md blur-sm
        group-hover:opacity-100 group-hover:scale-110 group-hover:duration-200 animate-tilt"
        style={{
          background: `linear-gradient(to right, ${colors.theme.blue}, ${colors.theme.mint}, ${colors.theme.green})`
        }}
      >
      </div>
      {children}
    </div>
  );

  if (onClick) {

    return (
      <ButtonWrapper>
        <button
          onClick={onClick}
          className={buttonClasses}
          style={buttonStyles}
        >
          {buttonContent}
        </button>
      </ButtonWrapper>
    );
  }

  if (href) {

    return (
      <ButtonWrapper>
        <a
          href={href}
          download={download}
          className={buttonClasses}
          style={buttonStyles}
          target={download ? undefined : '_blank'}
          rel={download ? undefined : 'noopener noreferrer'}
        >
          {buttonContent}
        </a>
      </ButtonWrapper>
    );
  }

  // Internal navigation (default)
  return (
    <ButtonWrapper>
      <Link
        to={to}
        className={buttonClasses}
        style={buttonStyles}
      >
        {buttonContent}
      </Link>
    </ButtonWrapper>
  );
};

export default Button;

