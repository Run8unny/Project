import Link from 'next/link';
import SecondCursor from '../_components/SecondCursor';
import MissionBox from '../_components/MissionBox';
import Main from '../_components/Main';
import localFont from 'next/font/local';

const vietnamBold = localFont({
	src: '../../public/fonts/BeVietnamPro-Bold.woff2',
});

export default function Page() {
	return (
		<div className='p-20 z-20 h-dvh w-screen cursor-none flex items-center'>
			<h1
				className={`${vietnamBold.className} text-[7.5vw] max-w-[90vw] text-green-600 text-center`}
			>
				Welcome to Solo Creative Coding Studio{' '}
				<span className='text-lg'>by zan</span>
			</h1>

			<Link href='/'>Home</Link>
			<SecondCursor />
		</div>
	);
}
