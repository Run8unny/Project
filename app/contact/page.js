import Cursor from '../components/Cursor';
import ContactForm from '../components/ContactForm';
import SmallNav from '../components/SmallNav';
import MenuItem from '../components/MenuItem';
import ContactHeading from '../components/ContactHeading';
import SmallFooter from '../components/SmallFooter';
import FooterItem from '../components/FooterItem';

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
			<div className='w-full flex flex-row justify-between items-center mt-7 border-t-2'>
				<SmallFooter>
					<FooterItem href='https://github.com/Run8unny'>github</FooterItem>
					<FooterItem href='https://www.linkedin.com/'>linkedIn</FooterItem>
					<FooterItem href='https://pl.pinterest.com/zanwardaszka/'>
						pinterest
					</FooterItem>
				</SmallFooter>
			</div>
		</div>
	);
}
