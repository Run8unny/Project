import '@/app/_styles/globals.css';
import { ThemeProvider } from './_components/ThemeProvider';
import { Providers } from './Providers';

export const metadata = {
	title: 'ZanWardaszka',
	description: 'Portfolio',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<ThemeProvider>
				<body
					className='grain relative inset-0 w-full h-full font-be-vietnam-pro'
					style={{
						backgroundImage: 'url(/assets/home/Rectangle5.png)',
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat',
						backgroundAttachment: 'fixed',
						marginTop: 0,
						paddingTop: 0,
					}}
				>
					<Providers>
						<main className='overlay relative z-10'>{children}</main>
						{children}
					</Providers>
				</body>
			</ThemeProvider>
		</html>
	);
}
