'use client';

import Nav from './_components/Nav';
import dynamic from 'next/dynamic';
import Footer from './_components/Footer';
import Cursor from './_components/Cursor';
import { useState } from 'react';
import NavMenu from './_components/NavMenu';
import CTA from './_components/CTA';
import Homefooter from './_components/Homefooter';
import ToggleThemeButton from './_components/ToggleThemeButton';
import HomeContact from './_components/HomeContact';

const Scene = dynamic(() => import('./_components/Scene'), { ssr: false });

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
				</header>
				<main className='w-auto'>
					<Scene />
				</main>
				<Homefooter>
					<ToggleThemeButton />
				</Homefooter>
			</div>
			<CTA onIsHoverd={setIsHovered} />
			<HomeContact />
			<Footer />
		</div>
	);
}
