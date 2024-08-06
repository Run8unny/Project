import Link from 'next/link';
import SecondCursor from '../_components/SecondCursor';
import Button from '../_components/Button';
import ContactForm from '../_components/ContactForm';
import ContactHeading from '../_components/ContactHeading';
import SmallNav from '../_components/SmallNav';

export default function Page() {
	return (
		<div className='w-full text-center font-be-vietnam-pro'>
			<SmallNav>
				<div className='flex-shrink-0'>
					<Button>
						<Link href='/'>back</Link>
					</Button>
				</div>
				<div className='flex-shrink-0'>
					<Button>
						<Link href='/contact'>playground</Link>
					</Button>
				</div>
			</SmallNav>
			<div className='h-full w-full cursor-none flex flex-col justify-center items-center m-4 p-3'>
				<ContactHeading />
				<ContactForm />
			</div>
			<SecondCursor />
		</div>
	);
}
