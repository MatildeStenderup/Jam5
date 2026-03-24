import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function CrimeDataSection3() {
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
              Geography matters
            </h2>
            <p className="text-xl text-gray-600">
              Crime distribution varies significantly across San Francisco's police districts. 
              The <strong>Bayview district</strong> consistently reports the highest number of incidents, 
              while <strong>Northern district</strong> shows the lowest.
            </p>
            <p className="text-xl text-gray-600">
              The data reveals a seasonal pattern, with crime rates typically peaking in summer months 
              (June-August) and declining during winter. This pattern is consistent across all districts.
            </p>
            <p className="text-xl text-gray-600">
              Understanding these geographic and temporal patterns helps law enforcement allocate 
              resources more effectively and implement targeted intervention strategies in 
              high-crime areas.
            </p>
            <div className="bg-amber-50 border-l-4 border-amber-400 p-4">
              <p className="text-sm text-gray-700">
                <strong>Note:</strong> District boundaries and crime reporting methods can affect these numbers. 
                Population density and economic factors also play significant roles.
              </p>
            </div>
          </motion.div>

          <motion.div 
            style={{ opacity }}
            className="bg-white p-6 rounded-lg shadow-xl"
          >
            <h3 className="text-2xl mb-4">Crime by District (2024)</h3>
            <div className="w-full h-[400px] bg-gray-100 rounded flex items-center justify-center text-gray-400">
              Your plot goes here
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}