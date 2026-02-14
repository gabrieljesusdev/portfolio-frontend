import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

const AboutSection = () => {
  const messages = useTranslations("AboutSection");
  return (
    <section
      id="about"
      className="mx-auto container  py-8 px-8 border-x-1 border-slate-200 flex flex-wrap items-end justify-between gap-8"
    >
      <div className="mb-12 md:mb-0">
        <span className="text-2xl mt-4 font-semibold">
          {messages("aboutMe")}
          <div className="bg-moody-blue-900 mt-0.5 w-6 h-1 block"></div>
        </span>

        <div className="flex mt-4 w-auto md:w-2xl text-md sm:text-lg flex-col gap-4">
          <p>{messages("aboutMeDescription")}</p>

          <p className="border-l-3 mb-4 mt-2 border-slate-500  text-slate-600 font-medium pl-4">
            {messages("aboutMeDescription2")}
          </p>

          <p>{messages("aboutMeDescription3")}</p>
        </div>

        <ul className="flex gap-2 mt-4 flex-wrap text-slate-800 font-semibold">
          <li className="flex items-center justify-center">
            <span className="w-2 h-2 bg-gray-500 rounded-full mr-2" />
            ReactJS
          </li>
          <li className="flex items-center justify-center">
            <span className="w-2 h-2 bg-gray-500 rounded-full mr-2" />
            NextJS
          </li>
          <li className="flex items-center justify-center">
            <span className="w-2 h-2 bg-gray-500 rounded-full mr-2" />
            TypeScript
          </li>
          <li className="flex items-center justify-center">
            <span className="w-2 h-2 bg-gray-500 rounded-full mr-2" />
            NestJS
          </li>
          <li className="flex items-center justify-center">
            <span className="w-2 h-2 bg-gray-500 rounded-full mr-2" />
            ExpressJS
          </li>
          <li className="flex items-center justify-center">
            <span className="w-2 h-2 bg-gray-500 rounded-full mr-2" />
            Prisma ORM
          </li>
          <li className="flex items-center justify-center">
            <span className="w-2 h-2 bg-gray-500 rounded-full mr-2" />
            TailwindCSS
          </li>
          <li className="flex items-center justify-center">
            <span className="w-2 h-2 bg-gray-500 rounded-full mr-2" />
            ReactNative
          </li>
        </ul>
      </div>

      <div className="w-50 md:w-100">
        <Image
          className=""
          src="/logos/icon.svg"
          width={100}
          height={100}
          alt="Logo SVG"
        />
      </div>
    </section>
  );
};

export default AboutSection;
