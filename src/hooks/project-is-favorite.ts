import { useGetUserFavorites } from "./get-user-favorites";

export const useProjectIsFavorite = (id: string) => {
  const favorites = useGetUserFavorites();
  return favorites.includes(id);
};
