'use client';
import Image from 'next/image';
import Link from 'next/link';
import Nav from './_components/Nav';
import dynamic from 'next/dynamic';
import Footer from './_components/Footer';
import Cursor from './_components/Cursor';
import { useState } from 'react';
import localFont from 'next/font/local';
import NavMenu from './_components/NavMenu';
import CTA from './_components/CTA';

const arrayFont = localFont({
	src: '../public/fonts/Array-Regular.woff2',
});

const Scene = dynamic(() => import('./_components/Scene'), { ssr: false });

export default function Home() {
	const [isHovered, setIsHoverd] = useState(false);
	return (
		<div
			onMouseEnter={() => setIsHoverd(true)}
			onMouseLeave={() => setIsHoverd(false)}
		>
			<header className='h-20'>
				<Nav onIsHoverd={setIsHoverd} arrayFont={arrayFont}>
					<NavMenu />
				</Nav>
			</header>
			<div className='w-full relative h-[37.625rem]'>
				<Scene />
			</div>
			<CTA />
			<Footer arrayFont={arrayFont} />
			<Cursor isHovered={isHovered} />
		</div>
	);
}
