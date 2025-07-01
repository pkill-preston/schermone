import type { Genre } from "~/types/movie";

export const useGenreStore = defineStore("genre", {
	state: () => ({
		genreState: []
	}),
    actions:{
        populateGenres(genres: Genre[]) {
            this.genreState = [...genres]
        }
    },
	persist: true
});
