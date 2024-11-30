/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}", // Scan all React files for Tailwind classes
	],
	theme: {
		extend: {
			boxShadow: {
				bottom: "0 4px 6px -1px rgba(0, 0, 0, 0.1)", // Custom bottom shadow
			},
			colors: {
				'custom-black': '#09090B',
				'border-grey' : '#F3F3F3',
				'light-grey': '#AFAFAF',
				
			  }
		},
	},
	plugins: [],
};
