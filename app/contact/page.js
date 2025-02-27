import Cursor from '../components/Cursor';
import ContactForm from '../components/ContactForm';
import MenuItem from '../components/MenuItem';
import ContactHeading from '../components/ContactHeading';
import Nav from '../components/Nav';
import NavMenu from '../components/NavMenu';

export default function Page() {
	return (
		<div className='felx flex-col justify-center items-center w-full md:h-fit bg-myblack'>
			<Nav>
				<NavMenu>
					<MenuItem href='./'>Home</MenuItem>
					<MenuItem href='/about'>About</MenuItem>
					<MenuItem href='./playground'>Playground</MenuItem>
				</NavMenu>
			</Nav>
			<Cursor />
			<main className='top-10 xs400:top-5 relative'>
				<div className='min-h-[30vw] md:min-h-[27vw] w-full cursor-none flex flex-col flex-grow justify-center items-center mt-6'>
					<ContactForm />
				</div>
				<div className='flex flex-col items-start justify-center px-10'>
					<ContactHeading />
				</div>
			</main>
		</div>
	);
}
