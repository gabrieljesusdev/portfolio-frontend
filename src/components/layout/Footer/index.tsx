import { ArrowUpIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";

const Footer = () => {
  const messages = useTranslations("Footer");
  return (
    <footer className="bg-zinc-200 px-8 py-8 flex justify-center sm:justify-between flex-col items-center">
      <div className="text-center sm:text-left">
        <h1 className="text-2xl sm:text-2xl text-zinc-800 font-semibold">
          gabrieljesus.dev development
        </h1>
        <h2 className="text-md sm:text-lg font-medium text-zinc-600">
          2025 © {messages("rightsReserved")}
        </h2>
      </div>
      <a
        href="#header"
        className="bg-zinc-100 p-2 border-2 mt-4 sm:mt-0 border-zinc-300 cursor-pointer"
      >
        <ArrowUpIcon color="#0D0D1C" className="size-4 sm:size-5" />
      </a>
    </footer>
  );
};

export default Footer;
