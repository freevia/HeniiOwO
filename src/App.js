import React, { useState, useRef } from 'react'; // Importa useRef
import { motion, AnimatePresence } from 'framer-motion';
import { FaDiscord, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import SocialLink from './components/SocialLink';
import SakuraBackground from './components/SakuraBackground';

const randomPhrases = [
  "nimodillo chat 🗣️🔥",
  "chamacos meados 🗣️🔥",
  "Le debo a coppel🗣️🔥",
  "DEJEN DE PREGUNTAR POR CUBO🗣️🔥",
  "LoL es vida🗣️🔥.",
  "No les doy de comer a los del sotano 🗣️🔥",
  "Soy 100% furra y 0% Fan de Bugdrock 🗣️🔥.",
  "No me gustan los Bugdrocks 🗣️🔥!",
  "Es java 🗣️🔥",
  "Golpeo a mi editor 🗣️🔥",
  "Pateo abuelitas en mis tiempos libres 🗣️🔥",
  "Vivan los corridos onichan 🗣️🔥",
  "Silencio 🗣️🔥",
  "No musica agropecuaria 🗣️🔥",
  "Si la perfección existiera, sería yo🗣️🔥",
  "ERROR 404 🗣️🔥",
  "Gracias por el clic, ¡eres mi persona favorita hoy!🗣️🔥"
];

const App = () => {
  const [showSpeechBubble, setShowSpeechBubble] = useState(false);
  const [speechBubbleText, setSpeechBubbleText] = useState('');
  const timeoutRef = useRef(null); // Referencia para el temporizador

  const handleAvatarClick = () => {
    // Limpiar el temporizador anterior si existe
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    const randomIndex = Math.floor(Math.random() * randomPhrases.length);
    setSpeechBubbleText(randomPhrases[randomIndex]);
    setShowSpeechBubble(true);

    // Establecer un nuevo temporizador
    timeoutRef.current = setTimeout(() => {
      setShowSpeechBubble(false);
    }, 3000); // El globo de texto desaparece después de 3 segundos
  };

  const socialLinks = [
    { name: 'Discord', url: 'https://discord.gg/7HKj24jYwC', icon: FaDiscord, color: '#7289DA' },
    { name: 'Instagram', url: 'https://www.instagram.com/heni_owo/', icon: FaInstagram, color: '#E1306C' },
    { name: 'WhatsApp', url: 'https://whatsapp.com/channel/0029Va8XLzHLY6dB4NOgyT3j', icon: FaWhatsapp, color: '#25D366' },
    { name: 'YouTube', url: 'https://www.youtube.com/@heniowo1834', icon: FaYoutube, color: '#FF0000' },
    { name: 'YouTube Vlogs', url: 'https://www.youtube.com/@HeniVlogs', icon: FaYoutube, color: '#CC0000' },
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-4 overflow-hidden">
      <SakuraBackground />
      <motion.div
        className="relative z-10 bg-white/60 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-pink-200/50 max-w-md w-full"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="flex flex-col items-center mb-8"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6, type: "spring", stiffness: 100 }}
        >
          <div className="relative">
            <motion.img
              src="https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0wOO2lAbxP1T5XDmuZkHCc9hBg6RVIbyjU7Fs" // Tu imagen de perfil
              alt="Avatar"
              className="w-24 h-24 rounded-full border-4 border-white shadow-lg mb-4 object-cover cursor-pointer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={handleAvatarClick}
            />
            <AnimatePresence>
              {showSpeechBubble && (
                <motion.div
                  className="absolute top-1/2 left-full transform -translate-y-1/2 ml-4 p-3 bg-pink-500 text-white text-sm rounded-lg shadow-lg whitespace-nowrap z-20" // Posición a la derecha de la imagen
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {speechBubbleText}
                  {/* Triángulo que apunta a la izquierda */}
                  <div className="absolute right-full top-1/2 -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-pink-500"></div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <motion.h1
            className="text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600 relative"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            🌸 Mis Redes Sociales 🌸
            {/* Efecto de brillo en el título */}
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-pink-300 to-purple-300 opacity-0"
              animate={{ opacity: [0, 0.5, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            />
          </motion.h1>
          <motion.p
            className="text-gray-600 text-center mt-2 text-lg font-medium"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Sigueme en todas mis redes sociales.
          </motion.p>
        </motion.div>

        <div className="space-y-6">
          {socialLinks.map((link, index) => (
            <SocialLink
              key={index}
              icon={link.icon}
              name={link.name}
              url={link.url}
              color={link.color}
            />
          ))}
        </div>

        <motion.p
          className="text-center text-gray-600 mt-8 text-sm"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          "Nunca sabes cuando es la ultima vez que nos veremos... mejor sigueme ahora"
        </motion.p>
      </motion.div>
    </div>
  );
};

export default App;
