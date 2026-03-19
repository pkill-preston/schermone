// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	$meta: {
		name: "Schermone"
	},
	runtimeConfig: {
		public: {
			apiBase: process.env.API_URL,
			apiToken: process.env.API_KEY
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