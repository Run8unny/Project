'use client';
import Image from 'next/image';
import Link from 'next/link';
import Nav from './_components/Nav';
import dynamic from 'next/dynamic';
import Footer from './_components/Footer';
import Cursor from './_components/Cursor';
import { useState } from 'react';
import localFont from 'next/font/local';
<<<<<<< Updated upstream

const arrayFont = localFont({
	src: '../public/fonts/Array-Regular.woff2',
});
=======
import NavMenu from './_components/NavMenu';
import CTA from './_components/CTA';
import Homefooter from './_components/Homefooter';
>>>>>>> Stashed changes

const Scene = dynamic(() => import('./_components/Scene'), { ssr: false });

export default function Home() {
	const [isHovered, setIsHoverd] = useState(false);
	return (
<<<<<<< Updated upstream
		<div className='h-screen border border-neutral-400 m-5'>
			<header>
				<Nav onIsHoverd={setIsHoverd} arrayFont={arrayFont} />
=======
		<div
			onMouseEnter={() => setIsHoverd(true)}
			onMouseLeave={() => setIsHoverd(false)}
		>
			<header className='h-20'>
				<Nav onIsHoverd={setIsHoverd}>
					<NavMenu />
				</Nav>
>>>>>>> Stashed changes
			</header>
			<main className='h-4/5 w-auto'>
				<Scene />
<<<<<<< Updated upstream
			</main>

=======
			</div>
			<CTA />
>>>>>>> Stashed changes
			<Cursor isHovered={isHovered} />
			{/* <Footer onIsHoverd={setIsHoverd} arrayFont={arrayFont} /> */}
		</div>
	);
}
