import '@/app/_styles/globals.css';
import localFont from 'next/font/local';

export const metadata = {
	title: 'ZanWardaszka',
	description: 'Portfolio',
};

const poppins = localFont({
	src: '../public/fonts/Poppins-Regular.woff2',
});

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className='grain'>
				<main className={`${poppins.className} overlay`}>{children}</main>
			</body>
		</html>
	);
}
