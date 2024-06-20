'use client';
import Image from 'next/image';
import Link from 'next/link';
import Nav from './_components/Nav';
import dynamic from 'next/dynamic';
import Footer from './_components/Footer';
import Cursor from './_components/Cursor';
import { useState } from 'react';
import MissionBoox from './_components/MissionBox';
import HomeNav from './_components/HomeNav';
import localFont from 'next/font/local';

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
					<HomeNav />
				</Nav>
			</header>
			<main className='h-full w-screen border-neutral-400 flex flex-col justify-center items-center'>
				<Scene />
				<MissionBoox text='I create viusal experience through web design.' />
			</main>
			<Footer arrayFont={arrayFont} />
			<Cursor isHovered={isHovered} />
		</div>
	);
}
