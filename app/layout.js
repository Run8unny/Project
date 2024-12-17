import '@/app/_styles/globals.css';
import localFont from 'next/font/local';

const cotham = localFont({
	src: '/fonts/CothamSans.otf',
	variable: '--font-cotham',
});

const outward = localFont({
	src: '/fonts/outward-block-webfont.woff',
	variable: '--font-outward',
});

export default function RootLayout({ children }) {
	return (
		<html lang='en' className={`${cotham.variable} ${outward.variable}`}>
			<body
				className={`relative inset-0 w-full font-cotham bg-zinc-950 light:bg-white bg-grid-white/[0.2] light:bg-grid-black/[0.17] flex items-center justify-center xs400:p-0 xs400:m-0 lg:w-full xs400:w-fit `}
			>
				<div className='absolute pointer-events-none inset-0 flex items-center justify-center bg-black light:bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_1%,black)]'></div>
				<main className='relative z-10'>{children}</main>
			</body>
		</html>
	);
}
