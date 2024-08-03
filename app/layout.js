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
<<<<<<< Updated upstream
			<body>
				<main className={vietnam.className}>{children}</main>
=======
			<body
				className='grain absolute inset-0 w-full h-full'
				style={{
					backgroundImage: 'url(/assets/home/Rectangle5.png)',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
					backgroundAttachment: 'fixed',
					marginTop: 0,
					paddingTop: 0,
					zIndex: 1,
				}}
			>
				<main className={`${vietnam.className} overlay`}>{children}</main>
>>>>>>> Stashed changes
			</body>
		</html>
	);
}
