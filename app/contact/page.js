import SecondCursor from '../components/SecondCursor';
import ContactForm from '../components/ContactForm';
import SmallNav from '../components/SmallNav';
import MenuItem from '../components/MenuItem';
import ContactHeading from '../components/ContactHeading';

export default function Page() {
	return (
		<div className='w-full text-center'>
			<SmallNav>
				<MenuItem href='/'>back</MenuItem>
				<MenuItem href='./playground'>playground</MenuItem>
			</SmallNav>
			<div className='h-full w-full cursor-none flex flex-col justify-center items-center mt-20'>
				<ContactForm />
			</div>
			<SecondCursor />
		</div>
	);
}
