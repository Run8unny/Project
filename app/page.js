'use client';

import Nav from './components/Nav';
import dynamic from 'next/dynamic';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import { useState } from 'react';
import NavMenu from './components/NavMenu';
import CTA from './components/CTA';
import Homefooter from './components/Homefooter';
import ToggleThemeButton from './components/ToggleThemeButton';
import HomeContact from './components/HomeContact';
import Water from './components/Water';
import Heading from './components/Heading';

const Scene = dynamic(() => import('./components/Scene'), { ssr: false });

export default function Home() {
	const [isHovered, setIsHovered] = useState(false);
	return (
		<div>
			<Cursor isHovered={isHovered} />
			<div
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				<header className='h-18'>
					<Nav>
						<NavMenu />
					</Nav>
					<Heading>CREATIVE DEVELOPER</Heading>
				</header>
				<main className='w-auto'>
					<Scene>
						<Water />
					</Scene>
					<Homefooter>
						<ToggleThemeButton />
					</Homefooter>
				</main>
			</div>
			<CTA onIsHoverd={setIsHovered} />
			<HomeContact />
			<Footer />
		</div>
	);
}
