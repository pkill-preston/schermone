<template>
    <div v-if="isLoading" class="h-full w-full flex justify-center items-center absolute bg-white/10 backdrop-blur-md rounded z-99">
        <div class="loader"/>
    </div>
</template>

<script setup lang="ts">
const isLoading = ref(true)
onMounted(() => {
    isLoading.value = false
})

</script>

<style scoped>

    .loader {
        height: 4px;
        width: 130px;
        --c: no-repeat linear-gradient(#000000 0 0);
        background: var(--c), var(--c), #b8b8b8;
        background-size: 60% 100%;
        animation: l16 3s infinite;
    }

    @keyframes l16 {
        0% {
            background-position: -150% 0, -150% 0
        }

        66% {
            background-position: 250% 0, -150% 0
        }

        100% {
            background-position: 250% 0, 250% 0
        }
    }
</style>