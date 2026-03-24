import { motion } from "motion/react";

export function OutroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center px-6 max-w-4xl mx-auto py-24"
      >
        <h2 className="text-5xl md:text-6xl mb-8">
          The story continues
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          While the data shows encouraging trends in crime reduction, the work is far from over. 
          Communities, law enforcement, and policymakers must continue collaborating to ensure 
          San Francisco remains safe for all residents.
        </p>
        <p className="text-xl md:text-2xl text-gray-600 mb-12">
          Understanding crime patterns through data is just the first step. Real change requires 
          sustained effort, investment in prevention programs, and addressing the root causes of crime.
        </p>
        
        <div className="border-t border-gray-200 pt-12 mt-12">
          <h3 className="text-2xl mb-6">About this story</h3>
          <p className="text-gray-600 mb-4">
            This data story explores crime trends in San Francisco using publicly available data. 
            The visualizations and analysis are based on reported incidents from 2018-2024.
          </p>
          <p className="text-sm text-gray-500 mb-8">
            Data source: San Francisco Police Department Crime Database
            <br />
            Last updated: March 2026
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <a href="#" className="text-blue-600 hover:text-blue-800 underline">Methodology</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="text-blue-600 hover:text-blue-800 underline">Download Data</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="text-blue-600 hover:text-blue-800 underline">Share This Story</a>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-sm text-gray-400"
        >
          <p>Scroll to top ↑</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
