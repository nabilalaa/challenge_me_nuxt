/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./nuxt.config.{js,ts}",
		"./node_modules/flowbite/**/*.{js,ts}",
	],
	safelist: ["text-red-500", "bg-red-50"],
	pattern: /bg-red-.+/,

	theme: {
		colors: {
			maincolor: "#e63946",
			secondarycolor: "#1d3557",
			thirdcolor: "#a8dadc",
			fourthcolor: "#f1faee",
		},
		container: {
			center: true,
			padding: "2rem",
		},
		extend: {},
	},
	plugins: [require("flowbite/plugin")],
};
