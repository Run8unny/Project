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
					className='relative inset-0 w-full h-full font-be-vietnam-pro bg-black'
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
					<main className='relative z-10'>{children}</main>
				</body>
			</ThemeProvider>
		</html>
	);
}
