import MenuItem from './MenuItem';

export default function NavMenu() {
	return (
		<ul className='flex gap-2 justify-center items-center text-lg max-w-2xl mx-auto z-50'>
			<MenuItem href='/about'>about</MenuItem>
			<MenuItem href='./contact'>contact</MenuItem>
			<MenuItem href='./playground'>playground</MenuItem>
			<MenuItem href='./work'>work</MenuItem>
		</ul>
	);
}
