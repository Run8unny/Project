import Link from 'next/link';
import NewScene from '../components/NewScene';
export default function Page() {
	return (
		<div>
			<h1>Hello From Gallery</h1>
			<div>
				<Link href='/gallery/items'>Item</Link>
			</div>
			<main className='h-screen'>
				<NewScene />
			</main>
			<Link href='/'>Home</Link>
		</div>
	);
}
