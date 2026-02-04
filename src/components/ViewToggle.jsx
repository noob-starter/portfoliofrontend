import { colors } from '../theme/colors';

// Toggle Button Component with gradient styling
const ViewToggle = ({ activeView, onToggle, globeLabel = "3D Orbit", listLabel = "Horizontal Streaming" }) => {
  const activeButtonStyle = {
    background: `linear-gradient(to right, ${colors.theme.blue}, ${colors.theme.green})`,
    color: colors.ui.white,
    paddingLeft: '1.25rem',
    paddingRight: '1.25rem',
    paddingTop: '0.3125rem',
    paddingBottom: '0.3125rem',
  };

  const inactiveButtonStyle = {
    background: 'transparent',
    color: colors.text.secondary,
    paddingLeft: '1.25rem',
    paddingRight: '1.25rem',
    paddingTop: '0.3125rem',
    paddingBottom: '0.3125rem',
  };

  return (
    <div className="flex justify-center mb-10" style={{ marginTop: '3rem' }}>
      <div className="relative inline-block group">
        {/* Gradient glow behind */}
        <div 
          className="absolute inset-0 transition-all duration-1000 opacity-20 rounded-full blur-sm
          group-hover:opacity-40 group-hover:duration-200"
          style={{
            background: `linear-gradient(to right, ${colors.theme.blue}, ${colors.theme.mint}, ${colors.theme.green})`
          }}
        />
        <div className="relative inline-flex rounded-2xl p-1 bg-white/80 backdrop-blur-sm shadow-lg border border-gray-200">
          <button
            onClick={() => onToggle('globe')}
            className="relative rounded-2xl text-sm font-bold transition-all duration-300 transform-gpu hover:-translate-y-0.5"
            style={activeView === 'globe' ? activeButtonStyle : inactiveButtonStyle}
          >
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {globeLabel}
            </span>
          </button>
          <button
            onClick={() => onToggle('scroll')}
            className="relative rounded-2xl text-sm font-bold transition-all duration-300 transform-gpu hover:-translate-y-0.5"
            style={activeView === 'scroll' ? activeButtonStyle : inactiveButtonStyle}
          >
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
              {listLabel}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewToggle;
