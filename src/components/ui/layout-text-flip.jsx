"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export const LayoutTextFlip = ({
  text = "Build Amazing",
  words = ["Landing Pages", "Component Blocks", "Page Sections", "3D Shaders"],
  duration = 3000,
  className = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [duration, words.length]);

  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-center gap-2 md:gap-4",
        className
      )}
    >
      <motion.span
        layoutId="subtext"
        className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white"
        style={{ fontFamily: "Space Grotesk, Inter, sans-serif" }}
      >
        {text}
      </motion.span>
      <motion.span
        layout
        className="relative w-fit overflow-hidden rounded-xl border border-orange-500/30 bg-gradient-to-r from-orange-500/20 to-pink-500/20 backdrop-blur-lg px-4 py-2 md:px-6 md:py-3 font-bold tracking-tight text-white shadow-lg ring-1 ring-orange-400/20 text-2xl md:text-4xl lg:text-5xl"
        style={{ fontFamily: "Space Grotesk, Inter, sans-serif" }}
      >
        <AnimatePresence mode="popLayout">
          <motion.span
            key={currentIndex}
            initial={{ y: -40, filter: "blur(10px)" }}
            animate={{
              y: 0,
              filter: "blur(0px)",
            }}
            exit={{ y: 50, filter: "blur(10px)", opacity: 0 }}
            transition={{
              duration: 0.5,
            }}
            className={cn(
              "inline-block whitespace-nowrap bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent"
            )}
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </div>
  );
};
