"use client";
import React, { useState, useEffect } from "react";
import { useMotionValue, useMotionTemplate, motion } from "framer-motion";

export const cn = (...classes) => classes.filter(Boolean).join(" ");

export const EvervaultCard = ({
  text,
  className,
  children
}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    let str = generateRandomString(1500);
    setRandomString(str);
  }, []);

  function onMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);

    const str = generateRandomString(1500);
    setRandomString(str);
  }

  return (
    <div
      className={cn(
        "bg-transparent flex items-center justify-center w-full h-full relative",
        className
      )}
    >
      <div
        onMouseMove={onMouseMove}
        className="group/card border border-[#E6A15A]/20 hover:border-[#FFD56B]/60 transition-colors duration-500 w-full relative overflow-hidden bg-[#0A0A0A]/50 flex flex-col justify-end h-full backdrop-blur-sm"
      >
        <CardPattern
          mouseX={mouseX}
          mouseY={mouseY}
          randomString={randomString}
        />
        {/* Render children or text safely on top layer */}
        <div className="relative z-10 w-full h-full pointer-events-none flex flex-col justify-center">
          {children ? (
            children
          ) : (
            <div className="relative flex items-center justify-center text-white font-bold p-6">
              <span className="text-[#3CC7D6] z-20 font-press-start text-sm">{text}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export function CardPattern({ mouseX, mouseY, randomString }) {
  let maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-[#111] opacity-40 group-hover/card:opacity-10 transition-opacity duration-700"></div>
      
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#7A5CFF] to-[#3CC7D6] opacity-0 group-hover/card:opacity-60 backdrop-blur-md transition duration-500"
        style={style}
      />
      <motion.div
        className="absolute inset-0 opacity-0 mix-blend-overlay group-hover/card:opacity-100"
        style={style}
      >
        <p className="absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-white font-mono font-bold transition duration-500 opacity-80 drop-shadow-lg">
          {randomString}
        </p>
      </motion.div>
    </div>
  );
}

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-<>?{}[]!";
export const generateRandomString = (length) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

export const Icon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
