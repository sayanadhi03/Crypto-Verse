"use client";
import React, { useState, useEffect } from "react";

const Typewriter = ({
  text,
  highlightText = "",
  speed = 100,
  delay = 0,
  className = "",
  highlightClassName = "",
  style = {},
  highlightStyle = {},
  showCursor = true,
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const fullText = highlightText ? `${text}${highlightText}` : text;

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timer = setTimeout(
        () => {
          setDisplayText(fullText.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        },
        currentIndex === 0 ? delay : speed
      );

      return () => clearTimeout(timer);
    } else {
      setIsTypingComplete(true);
    }
  }, [currentIndex, fullText, speed, delay]);

  const renderText = () => {
    if (!highlightText) {
      return (
        <span className={className} style={style}>
          {displayText}
        </span>
      );
    }

    const normalTextLength = text.length;
    const normalPart = displayText.slice(0, normalTextLength);
    const highlightPart = displayText.slice(normalTextLength);

    return (
      <>
        <span className={className} style={style}>
          {normalPart}
        </span>
        {highlightPart && (
          <span className={highlightClassName} style={highlightStyle}>
            {highlightPart}
          </span>
        )}
      </>
    );
  };

  return (
    <span>
      {renderText()}
      {showCursor && !isTypingComplete && (
        <span
          className="inline-block ml-1"
          style={{
            borderRight: "2px solid currentColor",
          }}
        >
          |
        </span>
      )}
    </span>
  );
};

export default Typewriter;
