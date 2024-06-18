import '@/app/_styles/globals.css';
import localFont from 'next/font/local';

export const metadata = {
	title: 'ZanWardaszka',
	description: 'Portfolio',
};

const vietnam = localFont({
	src: '../public/fonts/BeVietnamPro-Thin.woff2',
});

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
				<main className={vietnam.className}>{children}</main>
			</body>
		</html>
	);
}
