import Cursor from '../components/Cursor';
import ContactForm from '../components/ContactForm';
import SmallNav from '../components/SmallNav';
import MenuItem from '../components/MenuItem';
import ContactHeading from '../components/ContactHeading';
import Footer from '../components/Footer';

export default function Page() {
	return (
		<div className='felx flex-col justify-center items-center w-full'>
			<Cursor />
			<div>
				<SmallNav>
					<MenuItem href='./home'>back</MenuItem>
					<MenuItem href='./about'>about</MenuItem>
					<MenuItem href='./playground'>playground</MenuItem>
					<MenuItem href='./work'>work</MenuItem>
				</SmallNav>
				<main>
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
