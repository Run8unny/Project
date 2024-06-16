import Link from 'next/link';

export default function Nav() {
	return (
		<ul>
			<li>
				<Link href='/about'>About</Link>
			</li>
			<li>
				<Link href='/gallery'>Gallery</Link>
			</li>
			<li>
				<Link href='/contactform'>Contact</Link>
			</li>
			<li>
				<Link href='/cosmos'>Cosmos</Link>
			</li>
		</ul>
	);
}
