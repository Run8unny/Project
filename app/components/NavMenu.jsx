import Link from 'next/link';
import Button from './Button';
import MenuItem from './MenuItem';

export default function NavMenu() {
	return (
		<ul className='flex gap-2 justify-center items-center text-lg max-w-2xl mx-auto z-50'>
			<MenuItem>about</MenuItem>
			<MenuItem>playground</MenuItem>
			<MenuItem>contact</MenuItem>
			<MenuItem>work</MenuItem>
		</ul>
	);
}
