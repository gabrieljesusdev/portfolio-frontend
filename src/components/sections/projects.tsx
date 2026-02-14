"use client";

import React from "react";
import ProjectCard from "../ui/Projects/Card";
import { Project } from "@/types/project";
import { useTranslations } from "next-intl";
const ProjectsSection = ({ projects }: { projects: Project[] }) => {
  const messages = useTranslations("Projects");

  return (
    <section
      id="projects"
      className="mx-auto container px-8 py-12 border-x-1 border-zinc-200"
    >
      <span className="text-2xl mt-4 font-semibold">
        {messages("projects")}
        <div className="bg-moody-blue-900 mt-0.5 w-6 h-1 block"></div>
      </span>

      <div className="flex my-12 gap-4 flex-wrap">
        {projects.length ? (
          projects?.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))
        ) : (
          <div className="flex items-center justify-center w-full h-full">
            <p className="text-gray-500">{messages("noProjectsFound")}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
