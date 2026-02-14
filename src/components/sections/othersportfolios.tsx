"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PortfolioLinksComponent from "../modules/PortfolioLinks";
import { useTranslations } from "next-intl";

const OthersPortfoliosSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const messages = useTranslations("OthersPortfolios");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.7 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="mx-auto container  border-x-1 border-zinc-200 relative overflow-hidden"
    >
      <div className="absolute inset-0" />

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{
              width: 100,
              height: 100,
              borderRadius: "0%",
              left: 0,
              top: 0,
              opacity: 1,
            }}
            animate={{
              width: "100%",
              height: "100%",
              borderRadius: "0%",
              left: 0,
              bottom: 0,
            }}
            transition={{
              duration: 1.4,
              ease: [0.2, 0.3, 0.2, 1],
            }}
            className="absolute bg-[#2E2E37] origin-bottom-left"
          />
        )}
      </AnimatePresence>
      <div className="relative px-8 py-8 z-10">
        <span className="text-2xl text-white font-semibold ">
          {messages("othersPortfolios")}
          <div className="bg-white mt-0.5 w-6 h-1 block"></div>
        </span>

        <p className="text-white w-auto md:w-xl text-lg mt-4 mb-4">
          {messages("accessMyProjects")}
        </p>

        <PortfolioLinksComponent />
      </div>
    </section>
  );
};

export default OthersPortfoliosSection;
