'use client';
import Image from 'next/image';
import Link from 'next/link';
import Nav from './_components/Nav';
import dynamic from 'next/dynamic';
import Footer from './_components/Footer';
import Cursor from './_components/Cursor';
import { useState } from 'react';
import NavMenu from './_components/NavMenu';
import CTA from './_components/CTA';

const Scene = dynamic(() => import('./_components/Scene'), { ssr: false });

export default function Home() {
	const [isHovered, setIsHoverd] = useState(false);
	return (
		<div>
			<div
				onMouseEnter={() => setIsHoverd(true)}
				onMouseLeave={() => setIsHoverd(false)}
			>
				<header className='h-20'>
					<Nav onIsHoverd={setIsHoverd}>
						<NavMenu />
					</Nav>
				</header>
				<main className='h-4/5 w-auto'>
					<Scene />
				</main>
			</div>
			<CTA />
			<Cursor isHovered={isHovered} />
		</div>
	);
}
