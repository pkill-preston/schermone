<template>
    <Drawer v-model="isOpen">
        <DrawerTrigger as-child="">Open</DrawerTrigger>
        <DrawerContent>
            <DrawerHeader>
                <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                <DrawerDescription>This action cannot be undone.</DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
                <Button>Submit</Button>
                <DrawerClose>
                    <Button variant="outline">
                        Cancel
                    </Button>
                </DrawerClose>
            </DrawerFooter>
        </DrawerContent>
    </Drawer>
</template>

<script setup lang="ts">
    import {
        Drawer,
        DrawerClose,
        DrawerContent,
        DrawerDescription,
        DrawerFooter,
        DrawerHeader,
        DrawerTitle,
        DrawerTrigger,
    } from '@/components/ui/drawer'
    import { ref, defineExpose} from "vue";

    const isOpen = ref(false);

    const openDrawer: () => void = () => {
        isOpen.value = true;
    }
    defineExpose({ openDrawer });
</script>

<style scoped>

</style>