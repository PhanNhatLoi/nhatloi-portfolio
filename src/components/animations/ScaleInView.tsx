import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScaleInViewProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export default function ScaleInView({
  children,
  delay = 0,
  duration = 0.5,
  className = "",
}: ScaleInViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: duration,
        delay: delay,
        type: "spring",
        damping: 15,
        stiffness: 100,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
