<template>
	<Drawer direction="right" :handle="false">
		<Avatar
			v-if="props.avatar == true"
			alt="Heron Lorena"
			size="xl"
		/>
		<Icon v-if="!props.avatar" class="size-6" name="i-lucide-shopping-cart" />
		<template #content>
			<Placeholder
				class="lg:w-[35vw] md:w-[40vw] w-[75vw] flex gap-4 flex-col m-4"
			>
				<div class="flex justify-between">
					<p class="text-xl">Hello Heron!</p>
					<div
						v-if="width <= 769"
						class="flex gap-4 justify-center items-center"
					>
						<NuxtLink class="flex items-center" to="/watchlist">
							<Icon class="cursor-pointer size-6" name="i-lucide-clock" />
						</NuxtLink>
						<ThemeSwitcher />
					</div>
				</div>
				<Separator color="#fffffff" size="sm" />
				<div class="h-[85%] overflow-y-scroll">
					<div class="flex justify-between">
						<p class="mb-4">Cart Items:</p>
						<Icon
							:onclick="useCartStore().cleanCart"
							class="cursor-pointer size-6"
							name="i-lucide-trash-2"
						/>
					</div>
					<div class="flex gap-4 flex-col">
						<CartMovie
							v-for="(item, key) in cartState"
							:id="item.id"
							:key="key"
							:title="item.title"
							:amount="item.amount"
							:poster-path="item.posterPath"
							:rating="item.rating"
						/>
					</div>
				</div>
				<NuxtLink to="/checkout">
					<Button
						class="flex w-full justify-center cursor-pointer"
						trailing-icon="i-lucide-arrow-right"
					>
						Go to checkout
					</Button>
				</NuxtLink>
			</Placeholder>
		</template>
	</Drawer>
</template>

<script setup lang="ts">

const props = defineProps({
	avatar: Boolean
})

const width = ref(0)

onMounted(() => {
	width.value = window.innerWidth
})

interface CartItem {
	id: number | string
	title: string
	amount: number
	posterPath: string
	rating: number
}
const cartStore = useCartStore()
const cartState = computed(() => cartStore.cartState)
</script>

<style scoped></style>
