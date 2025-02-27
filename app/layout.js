import '@/app/_styles/globals.css';
import localFont from 'next/font/local';
import SecondCursor from './components/SecondCursor';

export const metadata = {
	title: '',
	description: 'Website made by V5V Studio',
	icons: {
		icon: '/icons/logo_white.svg',
	},
};

const cotham = localFont({
	src: '/fonts/CothamSans.woff',
	variable: '--font-cotham',
});

const outward = localFont({
	src: '/fonts/outward-block-webfont.woff',
	variable: '--font-outward',
});

export default function RootLayout({ children }) {
	return (
		<html
			lang='en'
			className={`${cotham.variable}  ${outward.variable} container`}
		>
			<body
				className={`w-full font-cotham bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text flex items-center justify-center xs400:p-0 xs400:m-0 lg:w-full xs400:w-fit box-border`}
			>
				<main className='relative z-10'>{children}</main>
				<SecondCursor />
			</body>
		</html>
	);
}
