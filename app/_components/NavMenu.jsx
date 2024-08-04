import Link from 'next/link';
import Button from './Button';
import ToggleThemeButton from './ToggleThemeButton';

export default function NavMenu() {
	return (
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
			</li>
			<li className='hover:bg-white  hover:text-black rounded-full'>
				<ToggleThemeButton />
			</li>
		</ul>
	);
}
