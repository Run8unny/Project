import Link from 'next/link';
export default function Page() {
	return (
		<div>
			<h1>Hello From Gallery</h1>
			<div>
				<Link href='/gallery/items'>Item</Link>
			</div>
			<Link href='/'>Home</Link>
		</div>
	);
}
