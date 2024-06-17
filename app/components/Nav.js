'use client';
import Link from 'next/link';
import { useState } from 'react';
import Cursor from './Cursor';

export default function Nav() {
	const [isHovered, setIsHoverd] = useState(false);
	return (
		<div>
			<ul
				onMouseEnter={() => setIsHoverd(true)}
				onMouseLeave={() => setIsHoverd(false)}
			>
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
			<Cursor isHovered={isHovered} />
		</div>
	);
}
