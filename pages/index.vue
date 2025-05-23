<template layout="">
	<div class="flex w-[100%] justify-center ">
		<div class="max-w-[90%] flex flex-wrap justify-between gap-6 py-6 ">
			<!-- <MovieCard v-for="(item, key) in movies" :title="item.title" :director="item.director"
				:release-year="item.release_year" :key="key" /> -->
		</div>
	</div>
</template>

<script setup lang="ts">
	const movies = [
		{
			"title": "La La Land",
			"director": "Damien Chazelle",
			"release_year": "2016",
			"genres": ["Drama", "Comedy", "Music"]
		},
		{
			"title": "Whiplash",
			"director": "Damien Chazelle",
			"release_year": "2014",
			"genres": ["Drama", "Music"]
		},
		{
			"title": "The Grand Budapest Hotel",
			"director": "Wes Anderson",
			"release_year": "2014",
			"genres": ["Comedy", "Drama", "Adventure"]
		},
		{
			"title": "Inception",
			"director": "Christopher Nolan",
			"release_year": "2010",
			"genres": ["Action", "Sci-Fi", "Thriller"]
		},
		{
			"title": "Parasite",
			"director": "Bong Joon-ho",
			"release_year": "2019",
			"genres": ["Thriller", "Drama"]
		},
		{
			"title": "Interstellar",
			"director": "Christopher Nolan",
			"release_year": "2014",
			"genres": ["Sci-Fi", "Adventure", "Drama"]
		},
		{
			"title": "The Social Network",
			"director": "David Fincher",
			"release_year": "2010",
			"genres": ["Drama", "Biography"]
		},
		{
			"title": "The Truman Show",
			"director": "Peter Weir",
			"release_year": "1998",
			"genres": ["Drama", "Sci-Fi"]
		},
		{
			"title": "Eternal Sunshine of the Spotless Mind",
			"director": "Michel Gondry",
			"release_year": "2004",
			"genres": ["Drama", "Romance", "Sci-Fi"]
		},
		{
			"title": "There Will Be Blood",
			"director": "Paul Thomas Anderson",
			"release_year": "2007",
			"genres": ["Drama", "History"]
		},
		{
			"title": "Birdman",
			"director": "Alejandro G. Iñárritu",
			"release_year": "2014",
			"genres": ["Drama", "Comedy"]
		},
		{
			"title": "Mulholland Drive",
			"director": "David Lynch",
			"release_year": "2001",
			"genres": ["Mystery", "Drama", "Thriller"]
		}
	]
</script>