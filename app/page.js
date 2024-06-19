'use client';
import Image from 'next/image';
import Link from 'next/link';
import Nav from './_components/Nav';
import dynamic from 'next/dynamic';
import Footer from './_components/Footer';
import Cursor from './_components/Cursor';
import { useState } from 'react';
import localFont from 'next/font/local';
import MissionBoox from './_components/MissionBox';
import HomeNav from './_components/HomeNav';

const arrayFont = localFont({
	src: '../public/fonts/Array-Regular.woff2',
});

const Scene = dynamic(() => import('./_components/Scene'), { ssr: false });

export default function Home() {
	const [isHovered, setIsHoverd] = useState(false);
	return (
		<div className='h-full'>
			<header className='h-20'>
				<Nav onIsHoverd={setIsHoverd} arrayFont={arrayFont}>
					<HomeNav />
				</Nav>
			</header>
			<main className='h-screen w-screen border border-neutral-400 '>
				<Scene />
				<MissionBoox text='I creat viusal experience through web design.' />
			</main>
			<Cursor isHovered={isHovered} />
		</div>
	);
}
