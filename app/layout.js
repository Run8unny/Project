import '@/app/_styles/globals.css';
import { ThemeProvider } from './components/ThemeProvider';
import { Questrial } from 'next/font/google';

const questrial = Questrial({ weight: '400', subsets: ['latin'] });

export const metadata = {
	title: 'ZanWardaszka',
	description: 'Portfolio',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<ThemeProvider>
				<body
					className={`relative inset-0 w-full h-full  bg-zinc-950 light:bg-white bg-grid-white/[0.2] light:bg-grid-black/[0.17] flex items-center justify-center`}
				>
					<div className='absolute pointer-events-none inset-0 flex items-center justify-center bg-black light:bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_1%,black)]'></div>
					<main className='relative z-10'>{children}</main>
				</body>
			</ThemeProvider>
		</html>
	);
}
