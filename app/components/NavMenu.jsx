import MenuItem from './MenuItem';

export default function NavMenu({ children }) {
	return (
		<ul className='flex flex-grow justify-center items-center text-lg max-w-2xl mx-auto z-50'>
			{children}
		</ul>
	);
}
