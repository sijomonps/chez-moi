"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if preloader has already run in the current session
    const hasLoaded = sessionStorage.getItem("hasLoaded");
    if (hasLoaded) {
      setLoading(false);
      return;
    }

    // Set timer to disable preloader
    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem("hasLoaded", "true");
    }, 1800); // 1.8 seconds is perfect for a luxury feel without making the user wait too long

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] } 
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0f1d]"
        >
          <div className="relative flex flex-col items-center max-w-[400px] px-6 text-center">
            {/* Elegant logo wrapper */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                y: 0,
                transition: { 
                  duration: 0.8, 
                  ease: [0.16, 1, 0.3, 1] 
                } 
              }}
              className="relative h-28 w-72 overflow-hidden"
            >
              <img
                src="/images/black%20bg-main.png"
                alt="Chez Moi Logo"
                className="h-full w-full object-contain"
              />
            </motion.div>

            {/* Subtitle tag with a subtle delayed fade-in */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 0.5,
                transition: { delay: 0.5, duration: 0.8 } 
              }}
              className="mt-4 text-[10px] uppercase tracking-[0.45em] text-[#faf8f2]"
            >
              Loading Experience
            </motion.p>
            
            {/* Elegant luxury loading bar */}
            <div className="mt-8 h-[1px] w-24 overflow-hidden bg-[#faf8f2]/10">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ 
                  x: "100%",
                  transition: { 
                    duration: 1.4, 
                    ease: "easeInOut",
                    repeat: Infinity
                  } 
                }}
                className="h-full w-full bg-[#d4af37]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
