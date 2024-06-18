import Link from 'next/link';
import Cursor from '../_components/Cursor';

export default function Page() {
	return (
		<div className='h-dvh'>
			<h1>Hello Contact</h1>
			<Cursor />
			<Link href='/'>Home</Link>
		</div>
	);
}
