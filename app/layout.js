import '@/app/_styles/globals.css';
import { ThemeProvider } from './components/ThemeProvider';

export const metadata = {
	title: 'ZanWardaszka',
	description: 'Portfolio',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<ThemeProvider>
				<body
					className='relative inset-0 w-full h-full font-be-vietnam-pro bg-black light:bg-white bg-grid-white/[0.2] light:bg-grid-black/[0.2] flex items-center justify-center'
					// style={{
					// 	backgroundImage: 'url(/assets/home/Rectangle5.png)',
					// 	backgroundSize: 'cover',
					// 	backgroundPosition: 'center',
					// 	backgroundRepeat: 'no-repeat',
					// 	backgroundAttachment: 'fixed',
					// 	marginTop: 0,
					// 	paddingTop: 0,
					// }}
				>
					<div className='absolute pointer-events-none inset-0 flex items-center justify-center bg-black light:bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_1%,black)]'></div>
					<main className='relative z-10'>{children}</main>
				</body>
			</ThemeProvider>
		</html>
	);
}
