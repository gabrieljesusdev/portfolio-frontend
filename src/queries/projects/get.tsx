"use client";

import api from "@/lib/api";
import { Project } from "@/types/project";
import { useQuery } from "@tanstack/react-query";

const useFetchProjects = () =>
  useQuery<Project[]>({
    queryKey: ["projects"],
    queryFn: async () => {
      const response = await api.get<Project[]>("/projects");
      console.log(response.data);
      return response.data;
    },
  });

const useFetchUniqueProject = (id: string) =>
  useQuery<Project>({
    queryKey: ["project", id],
    queryFn: async () => {
      const response = await api.get<Project>(`/projects/${id}`);
      return response.data;
    },
  });

export { useFetchProjects, useFetchUniqueProject };
