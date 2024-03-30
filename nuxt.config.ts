// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	modules: ["@nuxtjs/tailwindcss", "@nuxtjs/supabase"],
	css: ["~/assets/css/input.css", "~/assets/css/pacfont.css"],
	app: {
		head: {
			link: [
				{
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap",
				},
			],
		},
	},
	supabase: {
		redirect: false,
	},
	runtimeConfig: {
		public: {
			cloudinary_url: process.env.cloudinary_url,
		},
	},
});
