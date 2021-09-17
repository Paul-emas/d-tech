module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: '#11C7B3',
				light: '#ECF8F6',
				medium: '#B7FBF4',
				lighter: '#14B8A7',
			},
			fontFamily: {
				sans: ['Raleway', 'sans-serif'],
			},
		},
	},
	variants: {
		extend: {
			divideColor: ['group-hover'],
		},
	},
	plugins: [require('@tailwindcss/custom-forms')],
};
