'use client';

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import NavMenu from './components/NavMenu';
import HomeContact from './components/HomeContact';
import Heading from './components/Heading';
import Water from './components/Water';
import Disc from './components/Disc';
import MenuItem from './components/MenuItem';
import CTA from './components/CTA';
import VideoComponent from './components/VideoComponent';

const Scene = dynamic(() => import('./components/Scene'), { ssr: false });

export default function Home() {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div className='felx bg-myblack flex-col justify-center items-center w-full'>
			<Cursor isHovered={isHovered} />
			<div
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				<Nav>
					<NavMenu>
						<MenuItem href='/about'>About</MenuItem>
						<MenuItem href='./contact'>Contact</MenuItem>
						<MenuItem href='./playground'>Playground</MenuItem>
					</NavMenu>
				</Nav>
				<header className='w-full h-50 top-20 xs400:top-16 relative'>
					<VideoComponent />
					<CTA />
					<Heading />
				</header>
				<main>
					<Scene>
						<Water />
						<Disc />
					</Scene>
					<HomeContact />
				</main>
				<Footer />
			</div>
		</div>
	);
}
