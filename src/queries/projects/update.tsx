"use client";

import api from "@/lib/api";
import { useMutation } from "@tanstack/react-query";

const favoriteOnLocalStorage = (id: string) => {
  const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
  if (favorites.includes(id)) {
    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites.filter((fav: string) => fav !== id))
    );
  } else {
    favorites.push(id);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
};

const useFavoriteProject = (id: string) =>
  useMutation({
    mutationKey: ["projects", id],
    mutationFn: async () => {
      favoriteOnLocalStorage(id);

      const response = await api.put(`/projects/liked/${id}`);
      if (response.status != 200) {
        throw new Error("Network response was not ok");
      }
      return response.data;
    },
  });

export { useFavoriteProject };
