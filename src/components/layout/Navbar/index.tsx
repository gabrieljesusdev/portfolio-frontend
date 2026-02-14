"use client";

import { motion, AnimatePresence } from "framer-motion";

import PortfolioLinksComponent from "@/components/modules/PortfolioLinks";
import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { useLocale } from "next-intl";

const Navbar = () => {
  const locale = useLocale();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: "pt-BR", label: "Português" },
    { code: "en", label: "English" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsLanguageDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menuVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.3, 1, 0.3, 1] as [number, number, number, number],
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: [0.3, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  const itemVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: 20, opacity: 0 },
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -10, scale: 0.95 },
  };

  const mobileDropdownVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto" },
    exit: { opacity: 0, height: 0 },
  };

  return (
    <nav className="container mx-auto h-20 px-8 md:px-8  border-x-2 border-zinc-200 border-solid flex justify-between items-center relative">
      <Link href="/" className="font-semibold text-2xl text-stone-600">
        GABRIEL JESUS
      </Link>

      <div className="hidden sm:block">
        <PortfolioLinksComponent>
          <li className="px-4 h-13 w-full max-w-30  flex items-center bg-stone-100 relative">
            <button
              className="flex items-center gap-2"
              onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
            >
              <ChevronDown color="#0D0D1C" className="size-4" />
              <h1 className="font-semibold text-lg text-stone-600">
                {locale.toUpperCase()}
              </h1>
            </button>

            <AnimatePresence>
              {isLanguageDropdownOpen && (
                <motion.div
                  ref={dropdownRef}
                  className="absolute top-full left-0 mt-1 w-full bg-white shadow-lg z-50 border border-zinc-200"
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.2 }}
                >
                  <ul>
                    {languages.map((language) => (
                      <li key={language.code}>
                        <Link
                          href={`/${language.code}`}
                          className="w-full flex items-center text-left px-4 py-2 text-stone-600 hover:bg-stone-100"
                          onClick={() => {
                            setIsLanguageDropdownOpen(false);
                          }}
                        >
                          {language.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        </PortfolioLinksComponent>
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden">
        {/* Hamburger Button */}
        <motion.button
          className="size-10 flex items-center justify-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          whileTap={{ scale: 0.95 }}
        >
          {isMenuOpen ? (
            <XIcon className="size-10 text-stone-600" />
          ) : (
            <MenuIcon className="size-10 text-stone-600" />
          )}
        </motion.button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black z-40"
                onClick={() => setIsMenuOpen(false)}
              />

              {/* Menu Content */}
              <motion.div
                className="fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50 p-6"
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="flex justify-between items-center mb-8">
                  <h2 className="font-semibold text-2xl text-stone-600">
                    Menu
                  </h2>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="text-stone-600 p-2"
                  >
                    <XIcon className="size-8" />
                  </button>
                </div>

                <nav className="flex flex-col gap-4">
                  <motion.a
                    href="#projects"
                    className="text-stone-600 text-lg p-3 hover:bg-stone-100 transition-colors"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Projetos
                  </motion.a>

                  <motion.a
                    href="#about"
                    className="text-stone-600 text-lg p-3 hover:bg-stone-100 transition-colors"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sobre
                  </motion.a>

                  <motion.a
                    href="#contact"
                    className="text-stone-600 text-lg p-3 hover:bg-stone-100 transition-colors"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contato
                  </motion.a>

                  {/* Seletor de idioma mobile */}
                  <div className="mt-2">
                    <motion.button
                      className="flex items-center gap-2 text-stone-600 text-lg p-3 hover:bg-stone-100 transition-colors w-full"
                      onClick={() =>
                        setIsLanguageDropdownOpen(!isLanguageDropdownOpen)
                      }
                      variants={itemVariants}
                    >
                      <ChevronDown color="#0D0D1C" className="size-4" />
                      <span className="uppercase">{locale}</span>
                    </motion.button>

                    <AnimatePresence>
                      {isLanguageDropdownOpen && (
                        <motion.div
                          className="ml-4 bg-stone-50 flex flex-col overflow-hidden mt-1"
                          variants={mobileDropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          transition={{ duration: 0.2 }}
                        >
                          {languages.map((language) => (
                            <Link
                              href={`${language.code}`}
                              prefetch={false}
                              key={language.code}
                              className="w-full text-left px-4 py-2 text-stone-600 hover:bg-stone-100"
                              onClick={() => {
                                setIsLanguageDropdownOpen(false);
                              }}
                            >
                              {language.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
