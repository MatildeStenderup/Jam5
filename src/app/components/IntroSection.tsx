import { motion } from "motion/react";

export function IntroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1609780604352-4aac2b12fff3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW4lMjBmcmFuY2lzY28lMjBnb2xkZW4lMjBnYXRlJTIwYnJpZGdlJTIwYWVyaWFsfGVufDF8fHx8MTc3NDM1NjAyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)'
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        <h1 className="text-6xl md:text-8xl mb-6 text-white">
          The Changing Face of Crime
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
          A data-driven exploration of crime patterns in San Francisco from 2018 to 2024
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-12"
        >
          <div className="text-white/60 text-sm">Scroll to explore</div>
          <div className="mt-2 text-white/60">↓</div>
        </motion.div>
      </motion.div>
    </section>
  );
}
