import Cursor from './Cursor';
import Logo from './Logo';
import NavMenu from './NavMenu';
import Link from 'next/link';

export default function Nav({ arrayFont, children }) {
	return (
		<div className='flex justify-between gap-40 px-6 my-2 p-2'>
			<Logo arrayFont={arrayFont} />
			{children}
			<span
				className={`${arrayFont.className} text-5xl px-4 my-2 p-2 hover:text-white`}
			>
				<Link href='/contact'>let's talk</Link>
			</span>
		</div>
	);
}
