'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Cursor from '../components/Cursor';
import NavMenu from '../components/NavMenu';
import HomeContact from '../components/HomeContact';
import Heading from '../components/Heading';
import EvervaultCardContainer from '../components/ui/EvervaultCard';
import Water from '../components/Water';
import Disc from '../components/Disc';
import MenuItem from '../components/MenuItem';

const Scene = dynamic(() => import('../components/Scene'), { ssr: false });

export default function Home() {
	const [isHovered, setIsHovered] = useState(false);
	return (
		<div className='felx flex-col justify-center items-center w-full'>
			<Cursor isHovered={isHovered} />
			<div
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				<header className='h-50'>
					<Nav>
						<NavMenu>
							<MenuItem href='/about'>about</MenuItem>
							<MenuItem href='./playground'>playground</MenuItem>
							<MenuItem href='./contact'>contact</MenuItem>
							<MenuItem href='./work'>work</MenuItem>
						</NavMenu>
					</Nav>
					<Heading>CREATIVE DEVELOPER</Heading>
				</header>
				<main>
					<Scene>
						<Water />
						<Disc />
					</Scene>
				</main>
			</div>
			<EvervaultCardContainer />
			<HomeContact />
			<Footer />
		</div>
	);
}
