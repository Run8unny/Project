import Link from 'next/link';
export default function Page() {
	return (
		<div>
			<h1>Hello From Item in Gallery</h1>
			<Link href='/gallery'>Gallery</Link>
		</div>
	);
}
