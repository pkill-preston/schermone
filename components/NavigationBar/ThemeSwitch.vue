<template>
    <div class="flex items-center gap-2">
        <Switch :checked="isDark" @update:checked="toggleTheme">
            <template #thumb>
                <Moon v-if="isDark" icon="lucide:moon" class="size-4" />
                <Sun v-else icon="lucide:sun" class="size-4" />
            </template>
        </Switch>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'


    const theme = ref('light')
    const loading = computed(() => true)
    const isDark = computed(() => theme.value === 'dark')

    const setTheme = (newTheme: string) => {
        theme.value = newTheme
        document.documentElement.classList.remove('light', 'dark')
        document.documentElement.classList.add(newTheme)
        localStorage.setItem('theme', newTheme)
    }

    const toggleTheme = () => {
        setTheme(isDark.value ? 'light' : 'dark')
    }

    onMounted(() => {
        const savedTheme = localStorage.getItem('theme') || 'light'
        setTheme(savedTheme)
    })
</script>

<style scoped>

</style>