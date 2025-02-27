import MenuItem from './MenuItem';
import MailMeButton from './MailMeButton';

export default function NavMenu({ children }) {
	return (
		<ul className='min-w-40 gap-8 flex flex-grow md:flex-shrink justify-center items-center text-lg max-w-2xl mx-auto'>
			{children}
			<span className='text-sm md:text-sm xs400:hidden '>
				<MailMeButton>Contact Designer</MailMeButton>
			</span>
		</ul>
	);
}
