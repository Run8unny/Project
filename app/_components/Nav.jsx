<<<<<<< Updated upstream
import Cursor from './Cursor';
import Logo from './Logo';

import NavMenu from './NavMenu';

export default function Nav({ onIsHoverd, arrayFont }) {
	return (
		<div
			onMouseEnter={() => onIsHoverd(true)}
			onMouseLeave={() => onIsHoverd(false)}
			className='flex justify-between gap-40 px-6 my-2  p-2'
		>
			<Logo arrayFont={arrayFont} />
			<NavMenu />
=======
import Link from 'next/link';
import Logo from './Logo'; // Assuming Logo is imported from a file

export default function Nav({ children }) {
	return (
		<div className='flex flex-row md:flex-row justify-between items-center gap-4 md:gap-10 px-4 py-3 mb-5'>
			<div className='mb-2 md:mb-0'>
				<Logo />
			</div>
			<div className='flex-grow'>{children}</div>
			<span className='text-[40px] font-array pr-4 hover:text-white'>
				<Link href='/contact'>{`let's talk`}</Link>
			</span>
>>>>>>> Stashed changes
		</div>
	);
}
