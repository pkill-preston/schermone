<template layout="">
	<div
		class="flex w-[100%] xl:px-8 px-3 justify-between flex-wrap xl:gap-6 mb-4 lg:gap-5 md:gap-4 gap-4"
	>
		<MovieCard
			v-for="(item, key) in movieStore.moviesState"
			:id="item.id"
			:key="key"
			:title="item.title"
			:poster-path="item.posterPath"
			:release-year="item.release_year"
			:adult="item.adult"
			:rating="item.rating"
			:genres="item.genres"
		/>
	</div>
</template>

<script setup lang="ts">
import { getMovieGenres, getMovies } from "~/services/movieServices"

const movieStore = useMoviesStore()
onMounted(async () => {

    const genres = await getMovieGenres()
    const movieData = await getMovies(genres)
    movieStore.moviesState = [...movieData]
	console.log(movieData)
})
</script>
