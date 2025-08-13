import React from 'react';
import { motion } from 'framer-motion';

const SocialLink = ({ icon: Icon, name, url, color }) => {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-center p-4 rounded-xl border-2 border-pink-300 bg-white/30 backdrop-blur-sm transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-pink-500`}
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
    >
      <Icon className="w-7 h-7 text-pink-600 mr-3" /> {/* Icono más pequeño y color rosa */}
      <span className="text-gray-800 text-lg font-semibold">{name}</span> {/* Texto en gris oscuro */}
    </motion.a>
  );
};

export default SocialLink;