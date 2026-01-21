import { colors } from '../../theme/colors.js';

const AnimatedText3D = ({ text, fontSize = '3rem' }) => {

  return (
    <div style={{
      position: 'relative',
      height: '120px',
      perspective: '800px',
      transformStyle: 'preserve-3d'
    }}>
      <style>
        {`
          ${Array.from({ length: 40 }).map((_, i) => {
            const key = i + 1;
            const row = Math.floor(i / 20);
            const initX = Math.floor(Math.random() * 1000) - 500;
            const initY = Math.floor(Math.random() * 1000) - 500;
            const initZ = Math.floor(Math.random() * 1000) - 500;
            const initDepth = Math.floor(Math.random() * 3000) - 2500;

            const themeColors = [
              colors.theme.blue, 
              colors.text.linkHover, 
              colors.theme.mint, 
              colors.theme.green, 
              colors.text.primary, 
              colors.text.secondary, 
            ];
            const colorIndex = Math.floor((i / 40) * themeColors.length);
            const color = themeColors[colorIndex];

            const clipX1 = Math.floor(i / 2) * 10 - row * 100;
            const clipY1 = row * 50;
            const clipX2 = Math.floor(key / 2) * 10 - row * 100;
            const clipY2 = Math.ceil(key % 2) * 50 + row * 50;
            const clipX3 = Math.ceil(key / 2) * 10 - row * 100;
            const clipY3 = (row + 1) * 50;
            const originX = (Math.random() * 100 - 50) + Math.floor(i / 2) * 10 - row * 100;
            const originY = (Math.random() * 100 - 50) + row * 50;

            return `
              .text-3d-${key} {
                position: absolute;
                font-size: ${fontSize};
                color: ${color};
                line-height: ${fontSize};
                opacity: 0;
                font-weight: bold;
                transform: translate(-50%, -50%);
                mix-blend-mode: screen;
                white-space: nowrap;
                clip-path: polygon(
                  ${clipX1}% ${clipY1}%,
                  ${clipX2}% ${clipY2}%,
                  ${clipX3}% ${clipY3}%
                );
                transform-origin: ${originX}% ${originY}%;
                animation: fly${key} 8000ms ${i * 40}ms cubic-bezier(0.360, 0.100, 0.160, 1.000) infinite alternate;
              }

              @keyframes fly${key} {
                0% {
                  opacity: 0;
                  transform: translate(-50%, -50%) rotateX(${initX}deg) rotateY(${initY}deg) rotateZ(${initZ}deg) translateZ(${initDepth}px);
                }
                10% {
                  opacity: 0;
                  transform: translate(-50%, -50%) rotateX(${initX}deg) rotateY(${initY}deg) rotateZ(${initZ}deg) translateZ(${initDepth}px);
                }
                90% {
                  opacity: 1;
                  transform: translate(-50%, -50%) rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
                }
                100% {
                  opacity: 1;
                  transform: translate(-50%, -50%) rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
                }
              }
            `;
          }).join('\n')}
        `}
      </style>
      {Array.from({ length: 40 }).map((_, i) => (
        <div
          key={i}
          className={`text-3d-${i + 1}`}
          style={{
            left: '50%',
            top: '50%'
          }}
        >
          {text}
        </div>
      ))}
    </div>
  );
};

export default AnimatedText3D;

