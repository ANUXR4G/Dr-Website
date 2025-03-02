"use client";

import { useState, useEffect } from "react";

interface TypewriterOptions {
  speed?: number;
  delayAfterComplete?: number;
  loop?: boolean;
}

export function useTypewriter(
  texts: string | string[], 
  options: TypewriterOptions = {}
) {
  const { 
    speed = 150, 
    delayAfterComplete = 1500, 
    loop = true 
  } = options;
  
  const textArray = Array.isArray(texts) ? texts : [texts];
  
  const [displayText, setDisplayText] = useState<string>("");
  const [index, setIndex] = useState<number>(0);
  const [textIndex, setTextIndex] = useState<number>(0);
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");

  const currentText = textArray[textIndex];

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    // Typing phase
    if (phase === "typing" && index < currentText.length) {
      timeout = setTimeout(() => {
        setDisplayText((prev: string) => prev + currentText[index]);
        setIndex((prev: number) => prev + 1);
      }, speed);
    } 
    // Completed typing the full text
    else if (phase === "typing" && index >= currentText.length) {
      setPhase("pausing");
      timeout = setTimeout(() => {
        if (loop) {
          setPhase("deleting");
        }
      }, delayAfterComplete);
    } 
    // Deleting phase
    else if (phase === "deleting" && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText((prev: string) => prev.substring(0, prev.length - 1));
      }, speed / 2); // Delete faster than typing
    } 
    // Completed deleting
    else if (phase === "deleting" && displayText.length === 0) {
      // Move to the next text in the array
      setTextIndex((prev: number) => (prev + 1) % textArray.length);
      setPhase("typing");
      setIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [index, phase, displayText, currentText, textArray, textIndex, speed, delayAfterComplete, loop]);

  return displayText;
}