import MenuItem from './MenuItem';

export default function NavMenu({ children }) {
	return (
		<ul className='min-w-40 flex flex-grow md:flex-shrink justify-center items-center text-lg max-w-2xl mx-auto'>
			{children}
		</ul>
	);
}
