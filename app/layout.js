import '@/app/_styles/globals.css';
import { Questrial } from 'next/font/google';

const questrial = Questrial({ weight: '400', subsets: ['latin'] });

export const metadata = {
	title: 'ZanWardaszka',
	description: 'Portfolio',
	icons: {
		icon: '/icons/zw_icon.svg',
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body
				className={`relative inset-0 w-full h-full  bg-zinc-950 light:bg-white bg-grid-white/[0.2] light:bg-grid-black/[0.17] flex items-center justify-center xs400:p-0 xs400:m-0 xs400:w-fit `}
			>
				<div className='absolute pointer-events-none inset-0 flex items-center justify-center bg-black light:bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_1%,black)] xs400:w-fit xs400:p-0 xs400:m-0'></div>
				<main className='relative z-10 xs400:w-fit xs400:p-0 xs400:m-0'>
					{children}
				</main>
			</body>
		</html>
	);
}
