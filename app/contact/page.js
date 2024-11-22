import Link from 'next/link';
import SecondCursor from '../components/SecondCursor';
import Button from '../components/Button';
import ContactForm from '../components/ContactForm';
import ContactHeading from '../components/ContactHeading';
import SmallNav from '../components/SmallNav';

export default function Page() {
	return (
		<div className='w-full text-center'>
			<SmallNav>
				<div className='flex-shrink-0'>
					<Button>
						<Link href='/'>back</Link>
					</Button>
				</div>
				<div className='flex-shrink-0'>
					<Button>
						<Link href='/playground'>playground</Link>
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
