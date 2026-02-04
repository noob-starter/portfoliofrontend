import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, OrbitControls } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';
import Card from './Card';
import ViewToggle from './ViewToggle';
import { colors } from '../theme/colors';

// Helper function to distribute points on a sphere (Fibonacci sphere algorithm)
const fibonacciSphere = (samples, radius) => {
  const points = [];
  const phi = Math.PI * (3 - Math.sqrt(5));

  for (let i = 0; i < samples; i++) {
    const y = 1 - (i / (samples - 1)) * 2;
    const radiusAtY = Math.sqrt(1 - y * y);
    const theta = phi * i;

    const x = Math.cos(theta) * radiusAtY;
    const z = Math.sin(theta) * radiusAtY;

    points.push(new THREE.Vector3(x * radius, y * radius, z * radius));
  }
  return points;
};

// Single skill point with image and tooltip
const SkillPoint = ({ position, skill }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <group position={position}>
      {/* HTML Image with Tooltip */}
      <Html
        center
        distanceFactor={6}
        style={{
          transition: 'all 0.3s ease',
          transform: `scale(${hovered ? 1.3 : 1})`,
          zIndex: hovered ? 100 : 1,
        }}
      >
        <div
          className="relative cursor-pointer"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Skill Image */}
          <div
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: hovered ? '3px solid #44BCFF' : '2px solid rgba(255,255,255,0.3)',
              boxShadow: hovered 
                ? '0 0 25px rgba(68, 188, 255, 0.6)' 
                : '0 4px 15px rgba(0,0,0,0.2)',
              transition: 'all 0.3s ease',
              background: 'white',
            }}
          >
            <img
              src={skill.image}
              alt={skill.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/50?text=' + skill.title.charAt(0);
              }}
            />
          </div>

          {/* Tooltip */}
          {hovered && (
            <div
              style={{
                position: 'absolute',
                bottom: '60px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'rgba(0, 0, 0, 0.9)',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: 'bold',
                whiteSpace: 'nowrap',
                boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                border: '1px solid rgba(68, 188, 255, 0.5)',
                zIndex: 1000,
              }}
            >
              {skill.title}
              {skill.subtitle && (
                <div style={{ 
                  fontSize: '11px', 
                  fontWeight: 'normal', 
                  opacity: 0.8,
                  marginTop: '2px'
                }}>
                  {skill.subtitle}
                </div>
              )}
              {/* Tooltip arrow */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-6px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 0,
                  height: 0,
                  borderLeft: '6px solid transparent',
                  borderRight: '6px solid transparent',
                  borderTop: '6px solid rgba(0, 0, 0, 0.9)',
                }}
              />
            </div>
          )}
        </div>
      </Html>
    </group>
  );
};

// Globe wireframe mesh
const GlobeMesh = ({ radius }) => {
  return (
    <group>
      {/* Main sphere wireframe */}
      <mesh>
        <sphereGeometry args={[radius, 32, 32]} />
        <meshBasicMaterial
          color="#44BCFF"
          wireframe
          transparent
          opacity={0.08}
        />
      </mesh>

      {/* Secondary wireframe for depth */}
      <mesh>
        <sphereGeometry args={[radius * 0.98, 24, 24]} />
        <meshBasicMaterial
          color="#99edc3"
          wireframe
          transparent
          opacity={0.05}
        />
      </mesh>
    </group>
  );
};

// Main rotating scene
const RotatingScene = ({ skills }) => {
  const groupRef = useRef();
  const radius = 2.8;

  const skillPositions = useMemo(() => {
    return fibonacciSphere(skills.length, radius);
  }, [skills.length]);

  // Auto-rotate
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={groupRef}>
      <GlobeMesh radius={radius} />
      
      {skills.map((skill, index) => (
        <SkillPoint
          key={skill.title + index}
          position={skillPositions[index]}
          skill={skill}
        />
      ))}
    </group>
  );
};

// Horizontal Scroll with Progress Bar (inline version)
const HorizontalScrollView = ({ skills }) => {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const scrollWidth = container.scrollWidth - container.clientWidth;
      const progress = scrollWidth > 0 ? (scrollLeft / scrollWidth) * 100 : 0;
      setScrollProgress(progress);
    };

    container.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => container.removeEventListener('scroll', handleScroll);
  }, [skills]);

  return (
    <div className="w-full flex flex-col items-center gap-8">
      <div
        ref={containerRef}
        className="w-full overflow-x-auto hide-scrollbar pb-4"
      >
        <div
          className="flex gap-6 items-stretch justify-center min-w-max mx-auto"
          style={{ scrollBehavior: 'smooth' }}
        >
          {skills.map((skill, index) => (
            <Card key={skill.title + index} {...skill} hideMoreButton={true} />
          ))}
        </div>
      </div>

      {/* Scroll Progress Bar */}
      <div className="w-full max-w-4xl px-8">
        <div className="relative h-1.5 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full rounded-full transition-all duration-300 ease-out shadow-lg"
            style={{
              width: `${scrollProgress}%`,
              background: `linear-gradient(90deg, ${colors.theme.blue} 0%, ${colors.theme.mint} 50%, ${colors.theme.green} 100%)`,
              boxShadow: '0 0 10px rgba(68, 188, 255, 0.5)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Globe component
const Globe = ({ 
  skills = [], 
  title = "Skills Universe"
}) => {
  const [isClient, setIsClient] = useState(false);
  const [activeView, setActiveView] = useState('globe');

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <motion.section
      className="w-full py-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Section Header */}
        <motion.div
          className="text-center mb-6 w-full flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 shine-text">
            {title}
          </h2>
        </motion.div>

        {/* Toggle Button */}
        <ViewToggle activeView={activeView} onToggle={setActiveView} />

        {/* Content Area */}
        <AnimatePresence mode="wait">
          {activeView === 'globe' ? (
            <motion.div
              key="globe"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="w-full flex justify-center pb-8"
              style={{ marginTop: '3rem' }}
            >
              {/* 3D Globe Container - Transparent Background */}
              <div
                className="relative w-full max-w-4xl h-[500px] md:h-[550px] rounded-2xl overflow-hidden"
                style={{
                  background: 'transparent',
                }}
              >
                <Canvas
                  camera={{ position: [0, 0, 8], fov: 45 }}
                  gl={{ antialias: true, alpha: true }}
                  style={{ background: 'transparent' }}
                >
                  <ambientLight intensity={0.8} />
                  <pointLight position={[10, 10, 10]} intensity={0.5} />

                  <RotatingScene skills={skills} />

                  <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    minDistance={5}
                    maxDistance={14}
                    autoRotate={false}
                    rotateSpeed={0.5}
                  />
                </Canvas>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="scroll"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="w-full pb-8"
              style={{ marginTop: '3rem' }}
            >
              {/* Horizontal Scroll View with Progress Bar */}
              <HorizontalScrollView skills={skills} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default Globe;
