import '@/app/_styles/globals.css';
import localFont from 'next/font/local';

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
				className={`relative inset-0 w-full font-cotham bg-zinc-950 light:bg-white bg-grid-white/[0.06] light:bg-grid-black/[0.17] flex items-center justify-center xs400:p-0 xs400:m-0 lg:w-full xs400:w-fit `}
			>
				<main className='relative z-10'>{children}</main>
			</body>
		</html>
	);
}
