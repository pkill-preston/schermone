import type { Movie } from "~/types/movie";

export const useWatchlistStore = defineStore("watchlist", {
	state: () => ({
		watchlistState: [] as Movie[]
	}),
	actions: {
		toggleWatchlist(movie: Movie) {
			const index = this.watchlistState.findIndex(
				(item: Movie) => item.id === movie.id
			);

			if (index !== -1) {
				// Movie is already in the watchlist → remove it
				this.watchlistState.splice(index, 1);
			} else {
				// Movie not in the watchlist → add it
				this.watchlistState.push(movie);
			}
		}
	},
	persist: true
});
