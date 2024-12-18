import '@/app/_styles/globals.css';
import localFont from 'next/font/local';

export const metadata = {
	title: 'ZanWardaszka',
	description: 'ZanWardaszka Portfolio 2024',
	icons: {
		icon: '/icons/zw_icon.svg',
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
				className={`relative inset-0 w-full font-cotham bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text bg-grid-white/[0.07] flex items-center justify-center xs400:p-0 xs400:m-0 lg:w-full xs400:w-fit`}
			>
				<main className='relative z-10'>{children}</main>
			</body>
		</html>
	);
}
