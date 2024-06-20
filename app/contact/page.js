import Link from 'next/link';
import SecondCursor from '../_components/SecondCursor';
import MissionBox from '../_components/MissionBox';
import LogoIcon from '../_components/LogoIcon';
import Button from '../_components/Button';

export default function Page() {
	return (
		<div className='h-dvh w-screen cursor-none flex items-center p-20 m-20'>
			<MissionBox text="Let's get in touch" />
			<LogoIcon
				width={80}
				height={80}
				color='bg-green-600'
				className='m-20 p-20'
			/>
			<Button color={'green-600'}>
				<Link href='/'>Home</Link>
			</Button>
			<SecondCursor />
		</div>
	);
}
