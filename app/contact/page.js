import Cursor from '../components/Cursor';
import ContactForm from '../components/ContactForm';
import MenuItem from '../components/MenuItem';
import ContactHeading from '../components/ContactHeading';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import NavMenu from '../components/NavMenu';

export default function Page() {
	return (
		<div className='felx flex-col justify-center items-center w-full md:h-fit'>
			<Nav>
				<NavMenu>
					<MenuItem href='./home'>home</MenuItem>
					<MenuItem href='/'>about</MenuItem>
					<MenuItem href='./playground'>playground</MenuItem>
				</NavMenu>
			</Nav>
			<Cursor />
			<main className='top-24 xs400:top-5 relative'>
				<ContactHeading />
				<div className='min-h-[40vw] md:min-h-[27vw] w-full cursor-none flex flex-col flex-grow justify-center items-center mt-6'>
					<ContactForm />
				</div>
				<div className='flex flex-col items-start justify-center text-left leading-none text-base mt-10 mq850:text-sm xs400:p-0 xs400:m-2'>
					<h3 className='my-20 pb-24'>
						Let’s talk! I’m always excited to discuss new project and
						opportunities. Feel free to reach out and let’s have a nice chat!
					</h3>
				</div>
			</main>
			<Footer />
		</div>
	);
}
