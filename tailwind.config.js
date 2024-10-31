/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	content: ["./index.html", "./script.js", "./assets/**/*.js"],
	theme: {
		extend: {
			fontFamily: {
				athiti: "Athiti, sans-serif",
				lifeSaver: "Life Savers, serif",
				...defaultTheme.fontFamily,
			},
		},
	},
	plugins: [],
};
