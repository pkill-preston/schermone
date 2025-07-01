<template>
	<div class="px-8 flex flex-wrap">
		<p>User Watchlist</p>
		<div
			class="flex w-[100%] xl:p-8 p-3 flex-wrap xl:gap-6 mb-4 lg:gap-5 md:gap-4 gap-4 shadow-lg rounded "
		>
			<MovieCard
				v-for="(item, key) in movies"
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
	</div>
</template>

<script setup lang="ts">
const movies = ref([])
onMounted(()=>{
    movies.value = useWatchlistStore().watchlistState
})
</script>
