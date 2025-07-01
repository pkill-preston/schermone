<template>
	<div
		class="p-2 w-[47%] md:w-[30.5%] lg:w-[23%] xl:w-[18.5%] shadow-[0px_5px_48px_0px_rgba(0,_0,_0,_0.1)] flex flex-col justify-self-center bg-background dark:bg-card dark:border max-h-[440px] text-card-foreground gap-2 xl:gap-2 relative rounded-[8px] overflow-hidden"
	>
		<div class="relative">
			<div class="absolute top-0 right-0 p-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					stroke="#FACE15"
					stroke-width="2"
					stroke-linecap="round"
					:class="isWatchlisted ? 'fill-[#FACE15]' : 'fill-none'"
					stroke-linejoin="round"
					:onclick="addToWatchlist"
					class="cursor-pointer lucide lucide-star-icon lucide-star"
				>
					<path
						d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
					/>
				</svg>
			</div>
			<div class="absolute bottom-0 left-0 p-2 justify-between w-full flex">
				<Badge class="bg-green-500 lg:text-sm md:text-sm hover:bg-green-600">
					R$ {{ (rating * 1.8).toFixed(2) }}
				</Badge>
				<Badge class="bg-red-500">{{ rating.toFixed(1) }}</Badge>
			</div>
			<NuxtImg
				:class="adult ? 'blur-md brightness-75' : ''"
				class="rounded-[8px] w-full xl:h-78 lg:h-72 md:h-64 h-46 object-cover"
				:src="`${posterPath}`"
			/>
		</div>
		<div class="flex gap-2 flex-col h-full justify-between">
			<div>
				<p class="xl:text-xl lg:text-md line-clamp-1 ">{{ title }}</p>
			</div>
			<div
				class="flex flex-col justify-around gap-2 overflow-scroll no-scrollbar"
			>
				<div class="flex gap-4 no-scrollbar overflow-scroll">
					<Badge
						v-for="(genre, index) in genres"
						:key="index"
						size="xl"
						class="xs:text-[10px] lg:text-[9px] xl:text-[14px] md:text-[10px] text-[10px] whitespace-nowrap"
						:label="genre.name"
					/>
				</div>
				<Button
					:onclick="addToCart"
					class="justify-center cursor-pointer"
					label="Add to cart"
				/>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { Genre, Movie} from '~/types/movie'


const props = defineProps({
    id: {
        type: Number,
        default: 0
    },
    title: {
        type: String,
        default: "Title"
    },
    posterPath: {
        type: String,
        default: ""
    },
    director: {
        type: String,
        default: "Director"
    },
    releaseYear: {
        type: String,
        default: "2025"
    },
	genres: {
		type: Array as PropType<Genre[]>,
		default: () => [],
		validator: (val: unknown[]) => val.every(item => typeof item === 'object' && item !== null && 'name' in item)
	},
    watchlist: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        default: 0.0
    },
    adult: Boolean
})
const isWatchlisted = ref(props.watchlist)

const watchlistStore = useWatchlistStore()

const addToCart = () => {
    useCartStore().addToCart({
        id: props.id,
        title: props.title,
        posterPath: props.posterPath,
        rating: props.rating,
        amount: 1
    })
}

const addToWatchlist = () => {
    watchlistStore.toggleWatchlist({
		id: props.id,
		title: props.title,
		posterPath: props.posterPath,
		director: props.director,
		genres: props.genres,
		rating: props.rating,
		adult: props.adult,
		releaseDate: ''
	})
    isWatchlisted.value = !isWatchlisted.value
}
onMounted(()=>{
    const index = watchlistStore.watchlistState.findIndex((item: Movie) => item.id == props.id)
    if (index !== -1) {
        isWatchlisted.value = !isWatchlisted.value
    }
})
</script>

