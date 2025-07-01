import type { Movie } from "~/types/movie";

export const useMoviesStore = defineStore("movies", {
	state: () => ({
		moviesState: []
	}),
	actions: {
		populate(movies: Movie[]) {
			this.moviesState = [...movies];
		},
		cleanStore(){
			this.moviesState = []
		}
	},
	persist: true
});
