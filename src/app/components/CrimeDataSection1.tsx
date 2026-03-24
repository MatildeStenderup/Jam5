import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function CrimeDataSection1() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div ref={containerRef} className="relative min-h-screen py-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div style={{ opacity }} className="space-y-6">
            <h2 className="text-5xl">
              Crime has been declining
            </h2>
            <p className="text-xl text-gray-600">
              Since 2018, San Francisco has seen a <strong>14.7% decrease</strong> in total reported crimes. 
              The trend shows a significant drop during 2020, likely influenced by pandemic-related factors.
            </p>
            <p className="text-xl text-gray-600">
              While overall crime has decreased, the patterns reveal interesting shifts across different 
              categories. Violent crime has decreased by <strong>25.1%</strong>, while property crime fell by <strong>18.3%</strong>.
            </p>
            <p className="text-xl text-gray-600">
              The data suggests that San Francisco is becoming safer, though challenges remain in 
              maintaining this downward trajectory.
            </p>
          </motion.div>

          <motion.div 
            style={{ opacity }}
            className="bg-white p-6 rounded-lg shadow-xl"
          >
            <h3 className="text-2xl mb-4">Crime Trends Over Time</h3>
            <div className="w-full h-[400px] bg-gray-100 rounded flex items-center justify-center text-gray-400">
              Your plot goes here
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}