'use client';
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/bg.png')`}}>
      <div className="absolute inset-0 bg-black opacity-40"></div> {/* Overlay */}
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        {/* Title */}
        <motion.h1 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 z-3"
        >
          Elevate Your Style
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl"
        >
          Discover the latest trends in fashion and get inspired by our new collections.
        </motion.p>

        {/* Call to Action Button */}
        <motion.a 
          href="#shop" 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ delay: 1, duration: 0.5 }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
        >
          Shop Now
        </motion.a>

        {/* Image Animation */}
        <motion.div
          className="absolute bottom-0 right-0 w-1/2 md:w-1/3"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <img
            src="https://via.placeholder.com/500x700?text=Fashion+Model"
            alt="Fashion Model"
            className="object-cover rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
