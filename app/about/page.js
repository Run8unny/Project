import Link from 'next/link';
import Cursor from '../_components/Cursor';
export default function Page() {
	return (
		<div className='h-dvh'>
			<h1>Hello From About</h1>
			<Link href='/'>Home</Link>
			<Cursor />
		</div>
	);
}
