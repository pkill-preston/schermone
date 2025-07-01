<template>
	<div class="width-full h-16 px-8 flex justify-center mb-4">
		<div
			class="bg-ui-bg dark:border w-full max-h-16 h-full px-4 shadow-lg dark:border-ui-text rounded-b-lg flex justify-between items-center"
		>
			<div class="flex items-center">
				<NuxtLink class="flex justify-center items-center" to="/">
					<p v-if="width >= 769">Schermone</p>
				</NuxtLink>
				<NuxtLink to="/">
					<Icon
						v-if="width <= 769"
						class="size-6 text-ui-text"
						name="i-lucide-app-window-mac"
					/>
				</NuxtLink>
			</div>
			<SearchInput />
			<div class="flex items-center gap-2">
				<div v-if="width >= 769" class="flex items-center gap-2">
					<NuxtLink class="flex items-center" to="/watchlist">
						<Icon class="cursor-pointer size-6" name="i-lucide-clock" />
					</NuxtLink>
					<DrawerBar class="cursor-pointer" :avatar="false" />
					<ThemeSwitcher />
				</div>
				<div class="flex cursor-pointer">
					<DrawerBar v-if="width <= 769" :avatar="true" />
					<Avatar
						v-if="width >= 769"
						alt="Heron Lorena"
						size="xl"
						src="/img/avatar.jpg"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import DrawerBar from './DrawerBar.vue'
import ThemeSwitcher from './ThemeSwitcher.vue'
import SearchInput from './SearchInput.vue'
const width = ref(0)
onMounted(() => {
    width.value = window.innerWidth
})
</script>
