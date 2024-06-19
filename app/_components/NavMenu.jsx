import Link from 'next/link';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function NavMenu() {
	return (
		<ul className='flex gap-4 items-center text-lg'>
			<li className='hover:text-pink-400'>
				<FontAwesomeIcon icon={faCircle} className='px-2 text-sm' />
				<Link href='/about'>About</Link>
			</li>
			<li>
				<FontAwesomeIcon icon={faCircle} className='px-2 text-sm' />
				<Link href='/gallery'>Gallery</Link>
			</li>
			<li>
				<FontAwesomeIcon icon={faCircle} className='px-2 text-sm' />
				<Link href='/contactform'>Contact</Link>
			</li>
			<li className='hover:text-pink-400'>
				<FontAwesomeIcon icon={faCircle} className='px-2 text-sm' />
				<Link href='/cosmos'>Cosmos</Link>
			</li>
		</ul>
	);
}
