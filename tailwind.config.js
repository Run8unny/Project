const defaultTheme = require('tailwindcss/defaultTheme');

const svgToDataUri = require('mini-svg-data-uri');

const colors = require('tailwindcss/colors');
const {
	default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette');

/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				white: '#fff',
				black: '#000',
				darkgray: {
					100: '#b9b3b3',
					200: 'rgba(152, 148, 148, 0)',
					300: 'rgba(152, 148, 148, 0.27)',
				},
				gray: {
					100: '#080808',
					200: 'rgba(255, 255, 255, 0)',
					300: 'rgba(0, 0, 0, 0)',
				},
				silver: '#c5bfbf',
				limegreen: '#34cb5e',
				plum: '#270d27',
				darkslategray: {
					100: '#333',
					200: 'rgba(51, 51, 51, 0)',
				},
			},
			spacing: {},
			fontFamily: {
				'be-vietnam-pro': "'Be Vietnam Pro'",
				'be-vietnam': "'Be Vietnam'",
				array: 'Array',
				inter: 'Inter',
			},
			borderRadius: {
				'481xl': '500px',
				'6xl': '25px',
			},

			animation: {
				first: 'moveVertical 30s ease infinite',
				second: 'moveInCircle 20s reverse infinite',
				third: 'moveInCircle 40s linear infinite',
				fourth: 'moveHorizontal 40s ease infinite',
				fifth: 'moveInCircle 20s ease infinite',
			},
			keyframes: {
				moveHorizontal: {
					'0%': {
						transform: 'translateX(-50%) translateY(-10%)',
					},
					'50%': {
						transform: 'translateX(50%) translateY(10%)',
					},
					'100%': {
						transform: 'translateX(-50%) translateY(-10%)',
					},
				},
				moveInCircle: {
					'0%': {
						transform: 'rotate(0deg)',
					},
					'50%': {
						transform: 'rotate(180deg)',
					},
					'100%': {
						transform: 'rotate(360deg)',
					},
				},
				moveVertical: {
					'0%': {
						transform: 'translateY(-50%)',
					},
					'50%': {
						transform: 'translateY(50%)',
					},
					'100%': {
						transform: 'translateY(-50%)',
					},
				},
			},
		},
		fontSize: {
			'6xl': '1.563rem',
			xl: '1.25rem',
			'166xl': '11.563rem',
			'55xl': '4.625rem',
			'27xl': '2.875rem',
			'12xl': '1.938rem',
			lgi: '1.188rem',
			'57xl': '4.75rem',
			'42xl': '3.813rem',
			'29xl': '3rem',
			'99xl': '7.375rem',
			'16xl': '2.188rem',
			'40xl': '3.688rem',
			'129xl': '9.25rem',
			'18xl': '2.313rem',
			base: '1rem',
			'119xl': '8.625rem',
			'15xl': '2.125rem',
			'36xl': '3.438rem',
			inherit: 'inherit',
		},
		screens: {
			mq1225: {
				raw: 'screen and (max-width: 1225px)',
			},
			lg: {
				max: '1200px',
			},
			mq1050: {
				raw: 'screen and (max-width: 1050px)',
			},
			mq750: {
				raw: 'screen and (max-width: 750px)',
			},
			mq450: {
				raw: 'screen and (max-width: 450px)',
			},
		},
	},
	darkMode: 'class',
	plugins: [
		addVariablesForColors,
		function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					'bg-grid': (value) => ({
						backgroundImage: `url("${svgToDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
						)}")`,
					}),
					'bg-grid-small': (value) => ({
						backgroundImage: `url("${svgToDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
						)}")`,
					}),
					'bg-dot': (value) => ({
						backgroundImage: `url("${svgToDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
						)}")`,
					}),
				},
				{ values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
			);
		},
	],
};

function addVariablesForColors({ addBase, theme }) {
	let allColors = flattenColorPalette(theme('colors'));
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);

	addBase({
		':root': newVars,
	});
}
