import Link from 'next/link';
import SecondCursor from '../_components/SecondCursor';
import MissionBox from '../_components/MissionBox';
import Main from '../_components/Main';
import localFont from 'next/font/local';
import '../_styles/style.css';
import Button from '../_components/Button';

const vietnamBold = localFont({
	src: '../../public/fonts/BeVietnamPro-Semibold.woff2',
});

export default function Page() {
	return (
		<div className='p-60 z-20 h-dvh w-screen cursor-none flex items-center'>
			<h1
				className={`${vietnamBold.className} text-[8.5vw] max-w-[90vw] text-green-600 text-center`}
			>
				Creative Front End Developer
			</h1>
			<Button color={'green-600'}>
				<Link href='/'>Enter</Link>
			</Button>
			<SecondCursor />
		</div>
	);
}
