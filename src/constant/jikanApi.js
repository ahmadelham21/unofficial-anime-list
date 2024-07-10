export const jikanApi = {
  url: {
    getTopAnime: "https://api.jikan.moe/v4/top/anime",
    getCharacterByAnimeId: (id) => {
      return `https://api.jikan.moe/v4/anime/${id}/characters`;
    },
  },
};
