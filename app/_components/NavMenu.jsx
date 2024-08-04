import Link from 'next/link';
import Button from './Button';
import ToggleThemeButton from './ToggleThemeButton';

export default function NavMenu() {
	return (
		<ul className='flex gap-2 justify-center items-center text-lg'>
			<li>
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
			<li>
				<Button>
					<Link href='/work'>work</Link>
				</Button>
			</li>
		</ul>
	);
}
