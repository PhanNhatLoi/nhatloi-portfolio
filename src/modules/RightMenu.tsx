import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactCurvedText from "react-curved-text";
import { menuListHeaderTop } from "../configs/config";
import { useTranslation } from "react-i18next";

export default function ArcMenu() {
  const [visible, setVisible] = useState(true);
  const timeoutRef = useRef<number | null>(null);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setVisible(false);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(() => setVisible(true), 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="fixed right-10 z-50 h-screen flex flex-col justify-center">
      <div className="relative">
        <AnimatePresence>
          {visible && (
            <motion.div
              style={{
                width: 56,
                height: 70 * menuListHeaderTop.length + 56,
                pointerEvents: "none",
                transform: "translateY(-50%)",
              }}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.4 } }}
              exit={{ opacity: 0, x: 100, transition: { duration: 0.3 } }}
            >
              <div
                className="absolute"
                style={{
                  left: 28,
                  top: 0,
                  width: 0,
                  height: 0,
                }}
              >
                {menuListHeaderTop.map((item, i) => {
                  return (
                    <motion.button
                      key={item.key}
                      onClick={item.onClick}
                      className="group absolute w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center border-2 border-primary-200 transition-all duration-300 overflow-visible"
                      style={{
                        color: item.color,
                        left: 0,
                        top: i * 70,
                        pointerEvents: "auto",
                        transform: "translate(-50%, 0)",
                      }}
                      title={t(item.label)}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        transition: { delay: i * 0.15 },
                      }}
                      whileHover={{ scale: 1.18 }}
                      exit={{
                        opacity: 0,
                        scale: 0.5,
                        transition: { duration: 0.2 },
                      }}
                    >
                      {item.icon}
                      <motion.div className="absolute flex items-center justify-center pointer-events-none">
                        <ReactCurvedText
                          width={220}
                          height={220}
                          cx={150}
                          cy={150}
                          rx={100}
                          ry={90}
                          startOffset={50}
                          reversed={true}
                          text={t(item.label)}
                          textProps={{
                            style: {
                              fontSize: 15,
                              fill: item.color,
                              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
                              fontWeight: "bold",
                            },
                          }}
                          tspanProps={null}
                          ellipseProps={null}
                          svgProps={{ style: { transform: "rotate(340deg)" } }}
                        />
                      </motion.div>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
