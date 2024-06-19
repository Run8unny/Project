import Link from 'next/link';
import SecondCursor from '../_components/SecondCursor';
import MissionBox from '../_components/MissionBox';

export default function Page() {
	return (
		<div className='h-dvh w-screen cursor-none flex items-center p-20 m-20'>
			<MissionBox text="Let's get in touch" />
			<SecondCursor />
			<Link href='/'>Home</Link>
		</div>
	);
}
