const svgToDataUri = require('mini-svg-data-uri');

const colors = require('tailwindcss/colors');
const {
	default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette');

const defaultTheme = require('tailwindcss/defaultTheme');

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
				// Light Theme Colors
				light: {
					bg: colors.zinc[200],
					text: colors.zinc[950],
					primary: colors.orange[500],
				},
				// Dark Theme Colors
				dark: {
					bg: colors.zinc[950],
					text: colors.white,
					primary: colors.orange[500],
				},
			},
			spacing: {},
			letterSpacing: {
				wider: '0.005em',
			},
			fontFamily: {
				cotham: ['var(--font-cotham)', 'sans-serif'],
				cooper: ['var(--font-cooper)', 'sans-serif'],
				outward: ['var(--font-outward)', 'sans-serif'],
			},
			borderRadius: {
				'4xl': '290px',
				'6xl': '25px',
			},
			scale: {
				115: '1.2',
				160: '1.6',
				175: '1.75',
				200: '2', // 200% scaling
				250: '2.5', // 250% scaling
				300: '3', // 300% scaling
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
			xxs: '0.8rem',
			xs: ['1rem', { lineHeight: '1.5rem' }],
			sm: ['1.4rem', { lineHeight: '2.4rem' }],
			base: ['1.6rem', { lineHeight: '2.7rem' }],
			lg: '6.5rem',
			xl: '16rem',
			'2xl': '18rem',
			'3xl': '28rem',
			inherit: 'inherit',
		},
		screens: {
			xl: {
				max: '1500px',
			},
			lg: {
				max: '1350px',
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
			md: {
				max: '768px',
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
