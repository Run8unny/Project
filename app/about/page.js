import Link from 'next/link';
import Cursor from '../components/Cursor';
export default function Page() {
	return (
		<div>
			<h1>Hello From About</h1>
			<Link href='/'>Home</Link>
			<Cursor />
		</div>
	);
}
