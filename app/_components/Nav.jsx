import Cursor from './Cursor';
import Logo from './Logo';
import NavMenu from './NavMenu';

export default function Nav({ onIsHoverd, arrayFont, children }) {
	return (
		<div
			onMouseEnter={() => onIsHoverd(true)}
			onMouseLeave={() => onIsHoverd(false)}
			className='flex justify-between gap-40 px-6 my-2 p-2 sticky'
		>
			<Logo arrayFont={arrayFont} />
			{children}
		</div>
	);
}
