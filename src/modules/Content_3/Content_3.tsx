import { useRouter } from "next/router";
import React, { useState, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Content3 = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { locale } = router;
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

  const goToPage = (path: string) => {
    const currentLocale = locale === "vi" ? "" : `/${locale}`;
    router.push(`${currentLocale}${path}`);
  };

  return (
    <div className="relative w-full flex flex-col justify-center items-center bg-gradient-to-br from-[rgba(116,148,107,0.85)] to-[rgba(66,92,61,0.9)] text-white py-16 px-8 overflow-hidden mt-4">
      {/* Animated shapes */}
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

      {/* Content with 3D effect */}
      <motion.div
        className="container-ct flex flex-col items-center text-center perspective-[1500px]"
        style={{
          transform: `rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)`,
          transition: "transform 0.5s cubic-bezier(0.03, 0.98, 0.52, 0.99)",
          transformStyle: "preserve-3d",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold uppercase"
          style={{ transform: "translateZ(30px)" }}
        >
          {t("any_questions")}?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-2 text-lg font-light"
          style={{ transform: "translateZ(20px)" }}
        >
          {t("we_here")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          onClick={() => goToPage("/contact-us")}
          className="mt-6 border-2 border-white text-white px-6 py-2 uppercase font-bold hover:bg-white hover:text-[rgba(66,92,61,1)] transition cursor-pointer"
          style={{ transform: "translateZ(40px)" }}
        >
          {t("contact_me")}!
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Content3;
