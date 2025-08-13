import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LeafParticle = ({ size, duration, delay, x, rotate }) => { // Eliminado 'y' inicial
  return (
    <motion.div
      className="absolute bg-pink-200 rounded-full" // Color rosa claro para las hojas
      style={{
        width: size,
        height: size / 2, // Forma de hoja más alargada
        borderRadius: '50% 0', // Forma de hoja
        filter: 'blur(0.5px)',
        left: `${x}%`,
        top: `-10%`, // Empieza desde arriba
      }}
      initial={{ y: 0, opacity: 0, rotate: 0 }}
      animate={{
        y: [0, window.innerHeight + size], // Cae hasta abajo de la pantalla
        opacity: [0, 0.7, 0],
        rotate: [0, rotate, rotate * 2],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        delay: delay,
        ease: "linear",
      }}
    />
  );
};

const SakuraBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const leafParticles = Array.from({ length: 50 }).map((_, i) => ({ // Más hojas
    size: Math.random() * 15 + 10, // 10 to 25px
    duration: Math.random() * 10 + 10, // 10 to 20s
    delay: Math.random() * 10, // 0 to 10s
    x: Math.random() * 100,
    rotate: Math.random() * 360,
  }));

  const gradientX = (mousePosition.x / window.innerWidth) * 100;
  const gradientY = (mousePosition.y / window.innerHeight) * 100;

  return (
    <div
      className="absolute inset-0 overflow-hidden z-0"
      style={{
        background: `radial-gradient(circle at ${gradientX}% ${gradientY}%, #fbcfe8, #e9d5ff, #d8b4fe, #c4b5fd)`,
        transition: 'background 0.5s ease-out',
      }}
    >
      {leafParticles.map((particle, i) => (
        <LeafParticle key={i} {...particle} />
      ))}
    </div>
  );
};

export default SakuraBackground;