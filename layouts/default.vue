<template>
    <div>
        <LoadingWrapper/>
        <NavigationBar />
        <slot/>
    </div>
</template>

<script setup lang="ts">
import NavigationBar from '~/components/NavigationBar/NavigationBar.vue';
import LoadingWrapper from '~/components/LoadingWrapper/LoadingWrapper.vue';
</script>
