<template>
    <div
        class="p-2 w-[45%] md:w-[30.5%] lg:w-[23%] xl:w-[18.5%] shadow-[0px_5px_48px_0px_rgba(0,_0,_0,_0.1)] flex flex-col justify-self-center bg-background dark:bg-card dark:border text-card-foreground gap-2 xl:gap-2 relative rounded-[8px] overflow-hidden">
        <div class="relative">
            <div class="absolute top-0 right-0 p-2">
                <IconStar color="yellow" />
            </div>
            <div class="absolute bottom-0 left-0 p-2">
                <Badge class="bg-green-500 hover:bg-green-600">R$ 7,98</Badge>
            </div>
            <NuxtImg class="rounded-[8px] w-full xl:h-96 lg:h-72 object-cover" src="/img/placeholder.jpg" />
        </div>
        <div class="flex gap-2 flex-col">
            <h3 class="text-2xl w-[calc(100% - 16px)] truncate">{{ title }}</h3>
            <div class="flex gap-2">
                <h3 class="w-[calc(100% - 16px)] truncate">{{ director }}</h3>
                <h3>({{ releaseYear }})</h3>
            </div>
            <div class="flex justify-between gap-2">
                <Badge v-for="(item, index) in badges" :key="index"
                    class="xs:text-[10px] lg:text-[9px] xl:text-[12px] md:text-[8px]">Romance</Badge>
            </div>
            <Button>Add to cart</Button>
        </div>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps({
        title: String,
        director: String,
        releaseYear: String,
        genres: Array<String>
    })
    const badges = [1,2,3]
</script>

<style scoped>

</style>