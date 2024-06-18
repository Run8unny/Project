'use client';
import Image from 'next/image';
import Link from 'next/link';
import Nav from './_components/Nav';
import dynamic from 'next/dynamic';
import Footer from './_components/Footer';
import Cursor from './_components/Cursor';
import { useState } from 'react';

const Scene = dynamic(() => import('./_components/Scene'), { ssr: false });

export default function Home() {
	const [isHovered, setIsHoverd] = useState(false);
	return (
		<div className='h-screen'>
			<header>
				<Nav onIsHoverd={setIsHoverd} />
			</header>
			<main className='h-3/5 w-auto'>
				<Scene />
			</main>
			<Cursor isHovered={isHovered} />
			<Footer onIsHoverd={setIsHoverd} />
		</div>
	);
}
