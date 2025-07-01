<template>
	<Button
		size="xl"
		class="p-0 cursor-pointer text-text-black"
		:icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
		color="ghost"
		@click="isDark = !isDark"
	/>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

const isDark = computed({
    get() {
        return colorMode.value === 'dark'
    },
    set(_isDark: 'dark' | 'light') {
        colorMode.preference = _isDark ? 'dark' : 'light'
    }
})
</script>
