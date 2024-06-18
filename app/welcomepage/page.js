import Link from 'next/link';
import SecondCursor from '../_components/SecondCursor';

export default function Page() {
	return (
		<div className='h-dvh cursor-none'>
			<h1 className='text-[4.5vw] max-w-[90vw] text-center text-black p-20 z-20'>
				Hello From Welcome Page
			</h1>
			<SecondCursor />
			<Link href='/'>Home</Link>
		</div>
	);
}
