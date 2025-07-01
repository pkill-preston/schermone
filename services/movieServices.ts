import type { Genre, Movie } from "~/types/movie";
import instance from "./instance";

export const getMovies = async (genresList: Genre[]): Promise<Movie[]> => {
	const response = await instance.get("/trending/movie/day");
	return response.data.results.map(
		(movie: Movie): Movie => ({
			id: movie.id,
			title: movie.title,
			releaseDate: movie.releaseDate,
			genres: movie.genre_ids.map((id: number) => {
				const genre = genresList.genres.find((g) => g.id === id);
				return genre ? genre : {id, name: "Unknown"};
			}),
			rating: movie.vote_average,
			posterPath: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
			adult: movie.adult
		})
	);
};

export const getSearch = async (searchInput: string, genresList?: Genre[] ): Promise<Movie[]> => {
	const response = await instance.get(`/search/movie?query=${searchInput}`);
	return response.data.results.map(
		(movie: Movie): Movie => ({
			id: movie.id,
			title: movie.title,
			releaseDate: movie.releaseDate,
			genres: movie.genre_ids.map((id: number) => {
				const genre = genresList.genres.find((genre) => genre.id === id);
				return genre ? genre : {id, name: "Unknown"};
			}),
			rating: movie.rating,
			posterPath: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
			adult: movie.adult
		})
	);
};

export const getMovieGenres = async (): Promise<Genre[]> => {

	const cached = useGenreStore().genreState.length > 0

	if (cached){
		try {
			return JSON.parse(useGenreStore().genreState) as Genre[];
		} catch (err) {
			console.error(err);
		}
	}
	const response = await instance.get("/genre/movie/list");
	const genres = response.data as Genre[];
	useGenreStore().genreState = genres

	return genres;
};
