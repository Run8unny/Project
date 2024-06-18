import ImageLogo from './ImageLogo';
import Link from 'next/link';
import localFont from 'next/font/local';

const arrayFont = localFont({
	src: '../../public/fonts/Array-Regular.woff2',
});

export default function Logo() {
	return (
		<div className={arrayFont.className}>
			<Link href='/' className='flex items-center'>
				<span className='text-6xl'>zan</span>
				<ImageLogo />
			</Link>
		</div>
	);
}
