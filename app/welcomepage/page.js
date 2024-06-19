import Link from 'next/link';
import SecondCursor from '../_components/SecondCursor';
import MissionBox from '../_components/MissionBox';
import Main from '../_components/Main';

export default function Page() {
	return (
		<Main>
			<h1 className='text-[5.5vw] max-w-[90vw] text-center p-20 z-20'>
				<MissionBox text='Welcome to Solo Creative Web Studio by zan' />
			</h1>
			<SecondCursor />
			<Link href='/'>Home</Link>
		</Main>
	);
}
