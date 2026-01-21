import { useEffect } from 'react';
import Button from './Button';
import ArrowIcon from '../assets/icons/right.png';
import CancelIcon from '../assets/icons/cancel.png';

const Modal = ({ isOpen, onClose, title, subtitle, duration, description, image, label, link, linkText = "View Details", technologies = [], points = [] }) => {
  
  // Close modal on ESC key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/85 backdrop-blur-sm flex justify-center items-center z-[1000]"
      onClick={onClose}
      style={{
        animation: 'fadeIn 300ms ease-in-out forwards'
      }}
    >
      <div 
        className="relative bg-white rounded-xl shadow-[0_20px_60px_0_rgba(0,0,0,0.3)] w-[70vw] h-[70vh] sm:w-[95vw] sm:h-[90vh] md:w-[85vw] md:h-[80vh] overflow-hidden flex flex-col opacity-0 transform scale-75"
        onClick={(e) => e.stopPropagation()}
        style={{
          animation: 'scaleIn 350ms 150ms ease-out forwards'
        }}
      >
        {/* Close Button */}
        <div className="absolute top-4 right-4 z-10 group">
          <button 
            className="w-12 h-12 border-none rounded-full bg-text-link/10 flex items-center justify-center cursor-pointer transition-all duration-250 backdrop-blur-md hover:bg-text-link/20 hover:scale-150 hover:rotate-180"
            onClick={onClose} 
            aria-label="Close modal"
            style={{ backgroundColor: 'white', padding: '8px' }}
          >
            <img 
              src={CancelIcon} 
              alt="Close" 
              className="w-6 h-6"
            />
          </button>
          
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 px-3 py-1.5 text-white text-2xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap pointer-events-none">
            close
          </div>
        </div>

        <div className="flex flex-col h-full overflow-y-auto" style={{ scrollbarWidth: 'thin', scrollbarColor: '#44BCFF #f1f1f1' }}>
          {image && (
            <figure className="m-0 p-0 w-full rounded-t-xl overflow-hidden flex-shrink-0 flex justify-center items-center">
              <img 
                src={image} 
                alt={title}
                className="block object-cover"
                style={{ width: '50%', height: '50%' }}
              />
            </figure>
          )}

          <div className="px-12 py-8 md:px-8 md:py-6 sm:px-6 sm:py-5 flex-1 overflow-y-auto flex flex-col items-center" style={{ scrollbarWidth: 'thin', scrollbarColor: '#44BCFF #f1f1f1' , marginBottom: '30px'}}>
            <div className="w-full max-w-4xl mx-auto">
              {title && (
                <h2 className="text-9xl md:text-7xl sm:text-5xl font-bold text-ui-black text-center mb-6 tracking-wide leading-tight">
                  {title}
                </h2>
              )}

              {subtitle && (
                <p className="text-text-tertiary text-4xl md:text-3xl sm:text-2xl text-center mb-5 italic font-medium">{subtitle}</p>
              )}

              {duration && (
                <p className="text-text-secondary text-xl md:text-lg sm:text-base text-center mb-8 font-medium" style={{ padding: '20px 20px'}}>{duration}</p>
              )}

              {label && (
                <p className="text-text-tertiary text-3xl md:text-2xl sm:text-xl text-center text-justify mb-8">{label}</p>
              )}

              {points && points.length > 0 ? (
                <div className="my-10" style={{ padding: '20px 40px', marginBottom: '20px'}}>
                  <ul className="text-text-secondary leading-[1.8] text-xl md:text-lg sm:text-base list-disc list-outside space-y-4 pl-6">
                    {points.map((point, index) => (
                      <li key={index} className="text-justify">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : description ? (
                <div className="my-10">
                  <p className="text-text-secondary leading-[1.5] text-xl md:text-lg sm:text-base text-justify whitespace-pre-wrap" style={{ padding: '20px 20px', marginBottom: '20px'}}>
                    {description}
                  </p>
                </div>
              ) : null}

              {technologies && technologies.length > 0 && (
                <div className="my-12">
                  <h3 className="text-text-primary font-bold text-3xl md:text-2xl sm:text-xl mb-6 text-center">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2 justify-center mx-auto">
                    {technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="inline-block text-text-primary rounded-sm text-lg md:text-base sm:text-sm font-semibold border-2 border-theme-blue/30 hover:border-theme-blue hover:shadow-lg hover:scale-115 transition-all duration-200 cursor-default" style={{ padding: '10px 20px', margin: '20px'}}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {link && link !== "#" && (
                <div className="flex justify-center items-center mt-10 pt-8 border-t-2 border-text-link/20" style={{ paddingTop: '40px'}}>
                  <Button
                    to={link}
                    content={linkText}
                    className="text-3xl md:text-2xl sm:text-xl"
                      icon={
                        <img 
                          src={ArrowIcon} 
                          alt="Arrow" 
                          className="w-15 h-10"
                          style={{
                            animation: 'slideLeftRight 2s ease-in-out infinite'
                          }}
                        />
                      }
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

