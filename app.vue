<template>
  <div>
    <App>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </App>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const appName = 'Schermone'

  const defaultTitle = `${appName} — Discover Movies & TV`
  const defaultDescription =
    'Modern Vue 3 movie app built with TMDB API • clean scalable state management • typed stores • form validation • responsive design'
  const pageTitle = computed(() => {
    if (route.meta.title) {
      return `${route.meta.title} • ${appName}`
    }
    return defaultTitle
  })
  const pageDescription = computed(() => {
    return (route.meta.description as string) || defaultDescription
  })
useHead({

    title: pageTitle,

    meta: [

      {
        name: 'description',
        content: pageDescription,
      },
      {
        name: 'keywords',
        content:
          'vue 3, tmdb, pinia, zustand, form validation, zod, yup, movie app, portfolio, frontend, typescript',
      },


      {
        property: 'og:title',
        content: pageTitle,
      },
      {
        property: 'og:description',
        content: pageDescription,
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: () => window.location.origin + route.fullPath,
      },
      {
        property: 'og:site_name',
        content: appName,
      },
      {
        property: 'og:image',
        content: 'https://schermone.vercel.app/image.png',
      },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      {
        property: 'og:image:alt',
        content: `${appName} — Modern movie discovery application`,
      },
      { property: 'og:locale', content: 'en_US' },


      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:title',
        content: pageTitle,
      },
      {
        name: 'twitter:description',
        content: pageDescription,
      },
      {
        name: 'twitter:image',
        content: 'https://schermone.vercel.app/image.png',
      },
      {
        name: 'twitter:creator',
        content: '@filledwithblues',
      },


      {
        name: 'theme-color',
        content: '#0f172a',
      },
      {
        name: 'robots',
        content: 'index, follow',
      },
    ],

    link: [
      {
        rel: 'canonical',
        href: () => window.location.origin + route.fullPath,
      },


    ],
  })
</script>
