// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	$meta:{
		name: "Schermone"
	},
	runtimeConfig: {
		public: {
			apiBase: "https://api.themoviedb.org/3/",
			apiToken: process.env.API_ACCESS_TOKEN
		}
	},
	ssr: false,
	compatibilityDate: "2025-05-15",
	devtools: {enabled: true},
	imports: {
		autoImport: true
	},
	piniaPluginPersistedstate: {
		storage: "sessionStorage",
		cookieOptions: {
			sameSite: "lax"
		},
		debug: true
	},
	modules: [
		"@nuxt/eslint",
		"@nuxt/eslint-config",
		"@nuxt/fonts",
		"@nuxt/image",
		"@nuxt/scripts",
		"@nuxt/eslint-config",
		"@nuxt/ui",
		"@nuxt/icon",
		"@nuxtjs/tailwindcss",
		"@nuxtjs/color-mode",
		"@pinia/nuxt",
		"pinia-plugin-persistedstate/nuxt"
	],
	css: ["@/assets/css/main.css"],
	ui: {
		prefix: ""
	}
});