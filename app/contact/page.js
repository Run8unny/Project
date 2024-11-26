import SecondCursor from '../components/SecondCursor';
import ContactForm from '../components/ContactForm';
import SmallNav from '../components/SmallNav';
import MenuItem from '../components/MenuItem';
import ContactHeading from '../components/ContactHeading';
import SmallFooter from '../components/SmallFooter';
import FooterItem from '../components/FooterItem';

export default function Page() {
	return (
		<div className='w-full h-full text-center outline'>
			<SmallNav>
				<MenuItem href='/'>back</MenuItem>
				<MenuItem href='./playground'>playground</MenuItem>
			</SmallNav>
			<ContactHeading />
			<div className='min-h-[40vw] w-full cursor-none flex flex-col flex-grow justify-center items-center mt-4 outline'>
				<ContactForm />
			</div>
			<div className='w-full flex flex-row justify-between items-center mt-7'>
				<SmallFooter>
					<FooterItem href='https://github.com/Run8unny'>github</FooterItem>
					<FooterItem href='https://www.linkedin.com/'>linkedIn</FooterItem>
					<FooterItem href='https://pl.pinterest.com/zanwardaszka/'>
						pinterest
					</FooterItem>
				</SmallFooter>
			</div>
			<SecondCursor />
		</div>
	);
}
