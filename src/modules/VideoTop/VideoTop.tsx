import { APP_NAME } from "@/src/configs/config";
import { motion } from "framer-motion";
import router from "next/router";
import { useEffect, useState, useMemo } from "react";
import styles from "./VideoTop.module.css";
import { useTranslation } from "react-i18next";
import Image from "next/image";

const VideoTop = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { t } = useTranslation();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 15;
      const y = (clientY / window.innerHeight - 0.5) * -15;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: "easeOut",
      },
    },
  };

  // Define shapes with fixed positions using useMemo
  const shapes = useMemo(
    () => [
      {
        type: "circle",
        size: "w-16 h-16",
        opacity: "0.2",
        left: "15%",
        top: "20%",
      },
      {
        type: "square",
        size: "w-12 h-12",
        opacity: "0.15",
        left: "85%",
        top: "15%",
      },
      {
        type: "triangle",
        size: "w-16 h-16",
        opacity: "0.1",
        left: "45%",
        top: "75%",
      },
      {
        type: "circle",
        size: "w-20 h-20",
        opacity: "0.08",
        left: "75%",
        top: "65%",
      },
      {
        type: "square",
        size: "w-14 h-14",
        opacity: "0.12",
        left: "25%",
        top: "55%",
      },
      {
        type: "triangle",
        size: "w-12 h-12",
        opacity: "0.15",
        left: "65%",
        top: "35%",
      },
      {
        type: "circle",
        size: "w-24 h-24",
        opacity: "0.06",
        left: "35%",
        top: "25%",
      },
      {
        type: "square",
        size: "w-16 h-16",
        opacity: "0.1",
        left: "55%",
        top: "85%",
      },
    ],
    []
  );

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-gradient-to-b from-primary-100/10 to-primary-100/5">
      <div
        className="absolute bottom-0 right-10 flex items-end justify-end pointer-events-none z-0"
        style={{
          opacity: 0.65,
          height: "100%",
        }}
      >
        <Image
          src="/images/avatar_no_background.png"
          alt="Avatar Background"
          width={600}
          height={1000}
          style={{
            height: "80%",
            objectFit: "contain",
          }}
        />
      </div>

      {/* Animated geometric shapes */}
      <div className="absolute inset-0 left-10 overflow-hidden">
        {shapes.map((shape, i) => (
          <motion.div
            key={i}
            className={`
              absolute ${shape.size} bg-primary-100
              ${shape.type === "circle" ? "rounded-full" : ""}
              ${shape.type === "square" ? "rotate-45 rounded" : ""}
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
              y: [0, -30, 0],
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
      </div>

      {/* Content Container with 3D Effect */}
      <div
        className="relative h-full flex flex-col px-0 md:px-28 lg:px-28 justify-end sm:justify-end md:justify-end lg:justify-center perspective-[1500px] pb-20"
        pb-20
      >
        <motion.div
          className="container-ct z-5 px-4"
          style={{
            transform: `rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)`,
            transition: "transform 0.5s cubic-bezier(0.03, 0.98, 0.52, 0.99)",
            transformStyle: "preserve-3d",
          }}
        >
          <div className="transform-style-3d">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[rgba(116,148,107,0.3)] via-[rgba(89,122,82,0.2)] to-transparent rounded-full blur-[100px]" />
              <div className="absolute bottom-1/4 right-1/4 w-[32rem] h-[32rem] bg-gradient-to-l from-[rgba(116,148,107,0.35)] via-[rgba(89,122,82,0.25)] to-transparent rounded-full blur-[120px]" />
            </div>

            <motion.h1
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              className={`word-break-keep text-[2.5rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] font-bold mb-6 relative text-primary-100 ${styles.gradientTitle}`}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                <span>{APP_NAME}</span>
                <motion.span
                  className="text-[1.2rem] font-semibold px-3 py-1 rounded-lg w-fit"
                  style={{
                    background: "linear-gradient(90deg, #b7e7b0, #7ba97b)",
                    color: "#222",
                    boxShadow: "0 0 8px 0px #b7e7b0, 0 0 16px 2px #7ba97b",
                    animation: "glow 2s infinite alternate",
                    letterSpacing: "1px",
                  }}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
                >
                  💻 Software Engineer
                </motion.span>
              </div>
            </motion.h1>

            <motion.p
              variants={subtitleVariants}
              initial="hidden"
              animate="visible"
              className="text-lg md:text-xl mb-8 max-w-2xl font-medium backdrop-blur-sm"
              style={{
                transform: "translateZ(25px) rotateX(5deg)",
                color: "rgba(255,255,255,0.9)",
                background:
                  "linear-gradient(135deg, rgba(116,148,107,0.2) 0%, rgba(89,122,82,0.1) 100%)",
                padding: "1rem",
                borderRadius: "10px",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 8px 32px 0 rgba(66,92,61, 0.2)",
                backdropFilter: "blur(4px)",
              }}
            >
              Fullstack Developer building elegant UIs and powerful backends,
              from pixels to production.
            </motion.p>

            <motion.button
              onClick={() => {
                router.push("/#overview");
              }}
              initial={{ scale: 0.8, y: 0 }}
              animate={{
                scale: 1,
                y: [0, -12, 0, 12, 0],
              }}
              transition={{
                opacity: { duration: 0.6, delay: 0.4, ease: "easeOut" },
                scale: { duration: 0.6, delay: 0.4, ease: "easeOut" },
                y: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              whileHover={{
                scale: 1.08,
                boxShadow: "0 20px 40px rgba(66,92,61,0.35)",
                backdropFilter: "blur(12px)",
              }}
              className="px-8 py-3 text-white rounded-full font-semibold transition-all relative overflow-hidden"
              style={{
                transform: "translateZ(75px) rotateX(-5deg)",
                background:
                  "linear-gradient(135deg, rgba(116,148,107,0.9) 0%, rgba(89,122,82,0.8) 100%)",
                border: "1px solid rgba(255,255,255,0.2)",
                boxShadow: "0 10px 20px rgba(66,92,61,0.2)",
                backdropFilter: "blur(4px)",
              }}
            >
              <span className="relative z-5">{t("start_now")}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[rgba(116,148,107,0.6)] to-[rgba(89,122,82,0.4)] opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        .clip-path-triangle {
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        }
        .perspective-[1500px] {
          perspective: 1500px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        @keyframes glow {
          from {
            filter: drop-shadow(0 0 6px #b7e7b0);
          }
          to {
            filter: drop-shadow(0 0 16px #7ba97b);
          }
        }
      `}</style>
    </div>
  );
};

export default VideoTop;
