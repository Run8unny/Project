import Link from 'next/link';
import Button from './Button';

export default function NavMenu() {
	return (
		<ul className='flex gap-4 items-center text-lg'>
			<li className='hover:text-pink-400'>
				<Button>
					<Link href='/about'>about</Link>
				</Button>
			</li>
			<li>
				<Button>
					<Link href='/playground'>playground</Link>
				</Button>
			</li>
			<li>
				<Button>
					<Link href='/contact'>contact</Link>
				</Button>
			</li>
			<li className='hover:text-pink-400'>
				<Link href='/work'>work</Link>
			</li>
		</ul>
	);
}
