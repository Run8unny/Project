import '@/app/_styles/globals.css';

export const metadata = {
	title: 'ZanWardaszka',
	description: 'Portfolio',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body
				className='grain absolute inset-0 w-full h-full font-be-vietnam-pro'
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
				<main className='overlay'>{children}</main>
			</body>
		</html>
	);
}
