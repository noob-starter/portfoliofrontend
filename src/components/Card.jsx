import ArrowIcon from '../assets/icons/arrow.png';
import GithubIcon from '../assets/icons/github.png';
import { truncateText, joinContentUsingSeperator } from '../utils/helper';

const Card = ({ title, subtitle, duration, description, image, label,
                  link = "#", githubLink = "#", useModal = false, points = [], onOpenModal, hideMoreButton = false }) => {

  // Generate description from points if available
  const displayDescription = points && points.length > 0 
    ? joinContentUsingSeperator(points, '. ')
    : description;

  const handleMoreClick = (e) => {
    if (useModal && onOpenModal) {
      e.preventDefault();
      e.stopPropagation();
      onOpenModal();
    }
  };

  return (
    <article className="glass-card relative rounded-sm transform-gpu transition-all duration-400
    ease-in-out overflow-hidden group min-w-[350px] max-w-[350px] flex flex-col
    bg-white/10 backdrop-blur-lg border border-white/20 
    shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
    hover:bg-white/20 hover:border-white/30
    hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.5)]">
      <div className="article-wrapper flex-1 flex flex-col relative z-10">

        {image && (
          <div className="flex justify-center items-center w-full">
            <figure className="m-0 p-0 aspect-video overflow-hidden" style={{ width: '75%' }}>
              <img 
                src={image} 
                alt={title}
                className="w-full h-full object-cover transform-gpu origin-center
                transition-transform duration-400 ease-in-out group-hover:scale-110"
              />
            </figure>
          </div>
        )}
        
        <div className="article-body pt-4 flex-1 flex flex-col">

          {title && (
            <h2 
              className="text-[1.9rem] font-bold tracking-wider text-ui-black transition-colors
              duration-300 ease-out leading-tight group-hover:text-brand-teal text-center"
              style={{ marginBottom: subtitle ? '0.5rem' : '1rem' }}
            >
              {truncateText(title, 15)}
            </h2>
          )}

          {subtitle && (
            <p className="text-text-tertiary text-base text-center mb-4 italic">{truncateText(subtitle, 150)}</p>
          )}

          {duration && (
            <p className="text-text-secondary text-sm text-center mb-4">{duration}</p>
          )}

          {label && (
            <p className="text-text-tertiary text-lg text-center mb-4">{label}</p>
          )}

          {displayDescription && (
            <p className="text-text-secondary text-justify leading-relaxed mb-6 text-base flex-1"
            style={{ marginBottom: '1rem' }}>
              {truncateText(displayDescription, 120)}
            </p>
          )}

          <div className="flex justify-center items-center mt-auto relative">
            {!hideMoreButton && (
              <a 
                href={useModal ? "#" : link}
                className="inline-flex items-center no-underline text-text-link font-large
                group-hover:gap-2 transition-all text-xl"
                onClick={handleMoreClick}
              >
                More
                <span className="sr-only"> about {title || label}</span>
                <img 
                  src={ArrowIcon} 
                  alt="View More Information" 
                  className="min-w-6 w-6 h-6 ml-1 -translate-x-5 opacity-0 transition-all duration-300
                  group-hover:translate-x-0 group-hover:opacity-100"
                />
              </a>
            )}

            {githubLink !== "#" && (
              <a 
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`${hideMoreButton ? '' : 'absolute right-0'} text-text-tertiary hover:text-text-link transition-colors duration-300`}
                onClick={(e) => e.stopPropagation()}
              >
                <img 
                  src={GithubIcon} 
                  alt="GitHub" 
                  className="w-8 h-8" 
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
