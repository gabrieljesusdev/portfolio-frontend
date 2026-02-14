import { useLocale } from "next-intl";

import React from "react";
import { Project } from "@/types/project";
import Button from "../../button";

import { useRouter } from "next/navigation";

interface ProjectCardProps {
  project: Project;
  locale?: string;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const locale = useLocale();
  const router = useRouter();

  const truncateText = (text: string, maxWords: number = 50): string => {
    const words = text.trim().split(/\s+/);
    if (words.length <= maxWords) {
      return text;
    }
    return words.slice(0, maxWords).join(" ") + "...";
  };

  const description =
    locale === "en" ? project.description_en : project.description;
  const truncatedDescription = truncateText(description, 25);

  return (
    <div className="p-4 w-full flex flex-col max-w-xl bg-zinc-100">
      <div className="p-0 mb-4">
        <div className="flex items-center w-full justify-between text-xl font-bold text-gray-900">
          <span>{locale === "en" ? project.name_en : project.name}</span>
          <span className="text-gray-700 text-lg font-medium">
            {project.type === "ui/ux" ? "UI/UX Design" : "Dev"}
          </span>
        </div>
        <div className="pl-4 mt-4 border-l-slate-600 border-l-3 text-md text-slate-700 font-medium">
          {truncatedDescription}
        </div>
      </div>
      <div className="px-0">
        <div className="flex flex-wrap justify-between items-center">
          <ul className="flex flex-wrap list-disc gap-2 font-medium text-gray-700">
            {project.tags.map((tag: string, i: number) => (
              <li
                key={i}
                className="flex items-center text-sm text-slate-900 capitalize"
              >
                <span className="size-1 bg-gray-500 rounded-full mr-1" />
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-auto w-full">
        <Button.Root
          action={() => router.push(`/${project.id}`)}
          className="w-full mt-1.5 justify-start"
        >
          <Button.Text>Ver projeto</Button.Text>
        </Button.Root>
      </div>
    </div>
  );
};

export default ProjectCard;
