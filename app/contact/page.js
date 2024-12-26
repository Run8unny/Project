import Cursor from '../components/Cursor';
import ContactForm from '../components/ContactForm';
import MenuItem from '../components/MenuItem';
import ContactHeading from '../components/ContactHeading';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import NavMenu from '../components/NavMenu';

export default function Page() {
	return (
		<div className='felx flex-col justify-center items-center w-full'>
			<Nav>
				<NavMenu>
					<MenuItem href='./home'>home</MenuItem>
					<MenuItem href='/about'>about</MenuItem>
					<MenuItem href='./playground'>playground</MenuItem>
					<MenuItem href='./work'>work</MenuItem>
				</NavMenu>
			</Nav>
			<Cursor />
			<div>
				<main className='top-24 relative'>
					<ContactHeading />
					<div className='min-h-[40vw] w-full cursor-none flex flex-col flex-grow justify-center items-center mt-6'>
						<ContactForm />
					</div>
				</main>
			</div>
			<Footer />
		</div>
	);
}
