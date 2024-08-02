import '@/app/_styles/globals.css';
import localFont from 'next/font/local';

export const metadata = {
	title: 'ZanWardaszka',
	description: 'Portfolio',
};

const vietnam = localFont({
	src: '../public/fonts/BeVietnamPro-Regular.ttf',
});

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className='grain'>
				<main className={`${vietnam.className} overlay`}>{children}</main>
			</body>
		</html>
	);
}
