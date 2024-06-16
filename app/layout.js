import '@/app/globals.css';
import Footer from './components/Footer';

export const metadata = {
	title: 'ZanWardaszka',
	description: 'Portfolio',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
