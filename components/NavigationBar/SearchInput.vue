<template>
	<form :class="['relative w-[50%] max-w-xl']">
		<input
			v-model="value"
			type="text"
			placeholder="Search..."
			class="w-full bg-white rounded-md py-2 pl-4 pr-10 text-gray-800 placeholder-gray-500 outline-none shadow-[inset_0_2px_4px_rgba(0,0,0,0.12)]"
			aria-label="Search"
		>
		<button
			type="submit"
			class="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
			aria-label="Submit search"
		>
			<Icon name="i-lucide-search" class="size-6 p-0 m-0" />
		</button>
	</form>
</template>

<script setup lang="ts">
import { getMovies, getSearch } from '~/services/movieServices';
const value = ref('')
let timeout = null
watch(value, () => {
    clearTimeout(timeout)
    timeout = setTimeout(async () => {
        if (value.value == "") {
            const movieData = await getMovies(useGenreStore().genreState)
            useMoviesStore().moviesState = [...movieData]
        } else {
            const moviesSearched = await getSearch(value.value, useGenreStore().genreState)
            useMoviesStore().moviesState = moviesSearched
        }
    }, 500)
})

onMounted(async () => {
})
</script>