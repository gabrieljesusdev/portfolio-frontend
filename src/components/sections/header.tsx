import { ArrowDown } from "lucide-react";
import React from "react";
import { useTranslations } from "next-intl";

const HeaderSection = () => {
  const messages = useTranslations("Header");
  return (
    <header
      id="header"
      className="px-8 flex text-center items-center justify-center flex-col h-[60dvh]"
    >
      <div className="container mx-auto inset-0 z-[-1] bg-grid border-r-1 border-zinc-200 absolute h-[60dvh] mt-20"></div>
      <h1 className="text-xl md:text-3xl font-medium ">Antônio Gabriel</h1>
      <h2 className="text-3xl md:text-5xl font-semibold">
        Software Developer & UI/UX Designer
      </h2>
      <h3 className="text-md sm:text-xl mt-2 mb-4 font-regular">
        {messages("description")} <br className="sm:hidden" />{" "}
        {messages("description2")}
      </h3>

      <a
        href="#header"
        className="bg-zinc-50 p-2 border-2 border-zinc-200 cursor-pointer"
      >
        <ArrowDown color="#0D0D1C" className="size-4 md:size-5" />
      </a>
    </header>
  );
};

export default HeaderSection;
