export interface Movie {
	id: number;
	title: string;
	director?: string;
	releaseDate: string;
	genres: Genre[];
	rating: number;
	posterPath: string;
	adult: boolean;
}

export interface CartItem {
	id: number;
	title: string;
	rating: number;
	posterPath: string;
	amount: number;
}

export interface Genre {
	id: number;
	name: string;
}