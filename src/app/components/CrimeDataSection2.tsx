import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function CrimeDataSection2() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div ref={containerRef} className="relative min-h-screen py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            style={{ opacity }}
            className="bg-white p-6 rounded-lg shadow-xl order-2 md:order-1"
          >
            <h3 className="text-2xl mb-4">Crime by Category (2024)</h3>
            <div className="w-full h-[400px] bg-gray-100 rounded flex items-center justify-center text-gray-400">
              Your plot goes here
            </div>
          </motion.div>

          <motion.div style={{ opacity }} className="space-y-6 order-1 md:order-2">
            <h2 className="text-5xl">
              Not all crimes are equal
            </h2>
            <p className="text-xl text-gray-600">
              <strong>Larceny theft</strong> remains the most common crime in San Francisco, 
              accounting for over 30% of all reported incidents. This includes pickpocketing, 
              shoplifting, and theft from vehicles.
            </p>
            <p className="text-xl text-gray-600">
              Most categories show declining trends, with <strong>burglary down 22.5%</strong> and 
              <strong>drug offenses down 18.9%</strong> from the previous year.
            </p>
            <p className="text-xl text-gray-600">
              However, <strong>motor vehicle theft has increased by 15.3%</strong>, becoming a growing 
              concern for residents and law enforcement alike. This trend mirrors patterns seen in 
              other major cities across the country.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}