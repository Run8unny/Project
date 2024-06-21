import Link from 'next/link';
import SecondCursor from '../_components/SecondCursor';
import MissionBox from '../_components/MissionBox';
import LogoIcon from '../_components/LogoIcon';
import Button from '../_components/Button';
import ContactForm from '../_components/ContactForm';

export default function Page() {
	return (
		<div className='h-dvh w-screen cursor-none flex flex-col items-center p-20 m-30'>
			<MissionBox text="Let's get in touch" />
			{/* <LogoIcon
				width={80}
				height={80}
				color='bg-green-600'
				className='m-20 p-20'
			/> */}
			<ContactForm />
			<Button color={'green-600'}>
				<Link href='/'>Home</Link>
			</Button>
			<SecondCursor />
		</div>
	);
}
