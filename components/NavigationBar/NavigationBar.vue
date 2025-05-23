<template>
    <div class=" flex justify-center">
        <div
            class="w-[90%] flex justify-between items-center p-4 shadow-xl rounded-b-lg dark:border-b dark:border-r dark:border-l">
            <p class="md:text-lg text-md font-bold cursor-pointer">Schermone</p>
            <div class="relative w-[45%] md:w-full max-w-sm items-center">
                <Input id="search" type="text" placeholder="Search..."
                    class="pl-10 w-full shadow-[inset_0_0px_4px_rgba(0,0,0,0.6)]" />
                <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
                    <Search class="size-6 text-muted-foreground" />
                </span>
            </div>
            <div class="flex justify-between items-center gap-[1rem]">
                <Clock v-if="width" class="cursor-pointer" />
                <DropdownMenu v-if="width">
                    <DropdownMenuTrigger>
                        <ShoppingCart class="cursor-pointer"></ShoppingCart>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <div class="w-lg p-3">
                            <h1>teste</h1>
                        </div>
                    </DropdownMenuContent>
                </DropdownMenu>
                <ThemeSwitch v-if="width" />
                <Menu v-if="!width"></Menu>
                <Avatar v-if="width">
                    <AvatarImage class="cursor-pointer" src="/img/avatar.jpg" alt="@radix-vue" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
        </div>
    </div>
</template>

<script setup>

    import { Input } from '@/components/ui/input';
    import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
    import {
        DropdownMenu,
        DropdownMenuContent,
        DropdownMenuItem,
        DropdownMenuLabel,
        DropdownMenuSeparator,
        DropdownMenuTrigger,
    } from '@/components/ui/dropdown-menu'
    import ThemeSwitch from './ThemeSwitch.vue';
    import { onMounted } from 'vue';
    const width = window.innerWidth > 425

</script>

<style scoped>

</style>