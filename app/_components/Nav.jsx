import Cursor from './Cursor';
import Logo from './Logo';

import NavMenu from './NavMenu';

export default function Nav({ onIsHoverd }) {
	return (
		<div
			onMouseEnter={() => onIsHoverd(true)}
			onMouseLeave={() => onIsHoverd(false)}
			className='flex justify-between gap-40 mr-20 ml-20 my-10 border-b border-neutral-400 p-2 pr-80'
		>
			<Logo />
			<NavMenu />
		</div>
	);
}
