import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SlideInViewProps {
  children: ReactNode;
  direction?: "left" | "right";
  delay?: number;
  duration?: number;
  className?: string;
}

export default function SlideInView({
  children,
  direction = "left",
  delay = 0,
  duration = 0.5,
  className = "",
}: SlideInViewProps) {
  const initialX = direction === "left" ? -100 : 100;

  return (
    <motion.div
      initial={{ opacity: 0, x: initialX }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: duration,
        delay: delay,
        type: "spring",
        damping: 20,
        stiffness: 100,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
