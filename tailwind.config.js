/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./**/*.html'],
	theme: {
		extend: {
			backgroundImage: {
				card: "url('./public/guardian.jpg')",
			},
		},
	},
	plugins: [],
};
