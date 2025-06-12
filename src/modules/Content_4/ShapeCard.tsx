import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";

const ShapeCard = ({ children }: { children: React.ReactNode }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 10;
      const y = (clientY / window.innerHeight - 0.5) * -10;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const shapes = useMemo(
    () => [
      {
        type: "circle",
        size: "w-12 h-12",
        opacity: "0.1",
        left: "10%",
        top: "20%",
      },
      {
        type: "square",
        size: "w-8 h-8",
        opacity: "0.08",
        left: "85%",
        top: "30%",
      },
      {
        type: "triangle",
        size: "w-10 h-10",
        opacity: "0.06",
        left: "75%",
        top: "60%",
      },
      {
        type: "circle",
        size: "w-16 h-16",
        opacity: "0.04",
        left: "15%",
        top: "70%",
      },
    ],
    []
  );

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-[rgba(116,148,107,0.85)] to-[rgba(66,92,61,0.9)]">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className={`
            absolute ${shape.size} bg-white
            ${shape.type === "circle" ? "rounded-full" : ""}
            ${shape.type === "square" ? "rotate-45" : ""}
            ${shape.type === "triangle" ? "clip-path-triangle" : ""}
          `}
          style={{
            left: shape.left,
            top: shape.top,
            opacity: shape.opacity,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: shape.opacity,
            scale: 1,
            y: [0, -20, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 3 + i * 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            delay: i * 0.1,
          }}
        />
      ))}

      <motion.div
        className="container-ct perspective-[1500px]"
        style={{
          transform: `rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)`,
          transition: "transform 0.5s cubic-bezier(0.03, 0.98, 0.52, 0.99)",
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ShapeCard;
