import Link from 'next/link';
import SecondCursor from '../_components/SecondCursor';
import Button from '../_components/Button';
import ContactForm from '../_components/ContactForm';
import ContactHeading from '../_components/ContactHeading';

export default function Page() {
	return (
		<div className='h-dvh w-screen cursor-none flex flex-col items-center p-20 m-30'>
			<ContactHeading />
			<ContactForm />
			<Button color={'green-600'}>
				<Link href='/'>Home</Link>
			</Button>
			<SecondCursor />
		</div>
	);
}
