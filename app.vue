<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useSeoMeta, useHead } from '#imports'


const appName = 'Schermone'

useHead({
  titleTemplate: (title) => title ? `${title} • ${appName}` : appName,
})

useSeoMeta({
  title: appName,
  ogTitle: appName,
  description: () => 'Modern Vue/Nuxt movie explorer using TMDB API • scalable state management • form validation • responsive UI',
  ogDescription: () => 'Modern Vue/Nuxt movie explorer using TMDB API • scalable state management • form validation • responsive UI',
  ogType: 'website',
  ogSiteName: appName,
  ogImage: '/og-image.jpg',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: `${appName} — Movie discovery app`,
  twitterCard: 'summary_large_image',
  twitterTitle: () => useSeoMeta().title || appName,
  twitterDescription: () => useSeoMeta().description || '',
  twitterImage: '/image.png',

})


useHead({
  link: [
    {
      rel: 'canonical',
      href: () => window.location.origin + useRoute().fullPath,
    },
  ],
  meta: [
    { name: 'theme-color', content: '#0f172a' },
    { name: 'robots', content: 'index, follow' },
  ],
})
</script>