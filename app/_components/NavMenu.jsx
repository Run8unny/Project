import Link from 'next/link';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function NavMenu() {
	return (
<<<<<<< Updated upstream
		<ul className='flex gap-4 items-center text-lg'>
			<li>
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
			<li>
				<FontAwesomeIcon icon={faCircle} className='px-2 text-sm' />
				<Link href='/cosmos'>Cosmos</Link>
=======
		<ul className='flex gap-2 justify-center items-center text-lg'>
			<li className='hover:bg-white  hover:text-black rounded-full'>
				<Button>
					<Link href='/about'>about</Link>
				</Button>
			</li>
			<li className='hover:bg-white hover:text-black rounded-full'>
				<Button>
					<Link href='/playground'>playground</Link>
				</Button>
			</li>
			<li className='hover:bg-white hover:text-black rounded-full'>
				<Button>
					<Link href='/contact'>contact</Link>
				</Button>
			</li>
			<li className='hover:bg-white  hover:text-black rounded-full'>
				<Button>
					<Link href='/work'>work</Link>
				</Button>
>>>>>>> Stashed changes
			</li>
		</ul>
	);
}
