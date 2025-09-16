"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollOptimizer() {
  const pathname = usePathname();

  useEffect(() => {
    // Suppress the sticky/fixed position scroll warnings
    const originalConsoleWarn = console.warn;

    console.warn = function (...args) {
      // Filter out the specific auto-scroll warning
      const message = args.join(" ");
      if (
        message.includes("Skipping auto-scroll behavior due to") &&
        message.includes("position: sticky")
      ) {
        return; // Suppress this specific warning
      }
      // Allow other warnings through
      originalConsoleWarn.apply(console, args);
    };

    // Optimize scroll behavior for sticky elements
    const optimizeScrolling = () => {
      const stickyElements = document.querySelectorAll(
        '[class*="sticky"], [style*="position: sticky"], [style*="position: fixed"]'
      );

      stickyElements.forEach((element) => {
        // Add performance optimization styles
        if (element.style) {
          element.style.willChange = element.style.willChange || "transform";
          element.style.transform = element.style.transform || "translateZ(0)";
          element.style.backfaceVisibility = "hidden";
        }
      });
    };

    // Run optimization after route change
    const timeoutId = setTimeout(optimizeScrolling, 100);

    // Cleanup
    return () => {
      clearTimeout(timeoutId);
      console.warn = originalConsoleWarn;
    };
  }, [pathname]);

  // Add global CSS to suppress layout warnings
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      /* Optimize sticky and fixed elements */
      .sticky, [class*="sticky"] {
        will-change: transform;
        transform: translateZ(0);
        backface-visibility: hidden;
      }
      
      /* Smooth scrolling optimization */
      html {
        scroll-behavior: smooth;
      }
      
      /* Prevent scroll jump issues */
      body {
        scroll-padding-top: 80px; /* Account for navbar height */
      }
    `;
    document.head.appendChild(style);

    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  return null; // This component doesn't render anything
}
