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
				darkgray: 'rgba(152, 148, 148, 0.27)',
				silver: '#c5bfbf',
				limegreen: '#34cb5e',
				neongreen: '#b6ff00',
				darkslategray: {
					100: '#333',
					200: 'rgba(51, 51, 51, 0)',
				},
			},
			spacing: {},
			fontFamily: {},
			xs: ['1rem', { lineHeight: '1.5rem' }],
			sm: ['1.618rem', { lineHeight: '2.427rem' }],
			base: ['2.617rem', { lineHeight: '3.925rem' }],
			lg: ['4.235rem', { lineHeight: '6.325rem' }],
			xl: '11.089rem',
			'2xl': '17.942rem',
			'3xl': '29.030rem',
			'4xl': '46.970rem',
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
			xl: {
				max: '1500px',
			},
			lg: {
				max: '1350px',
			},
			md: {
				max: '768px',
			},
			mq1225: {
				raw: 'screen and (max-width: 1225px)',
			},
			mq1050: {
				raw: 'screen and (max-width: 1050px)',
			},
			mq850: {
				raw: 'screen and (max-width: 920px)',
			},
			mq650: {
				raw: 'screen and (max-width: 650px)',
			},
			xs400: {
				max: '420px',
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
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="50" height="50" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
						)}")`,
					}),
					'bg-dot': (value) => ({
						backgroundImage: `url("${svgToDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="30" height="30" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
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
