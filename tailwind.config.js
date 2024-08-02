/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
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
	plugins: [],
};
