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

const Scene = dynamic(() => import('../components/Scene'), { ssr: false });

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
					<Heading>{`CREATIVE DEV`}</Heading>
				</header>
				<main className='w-auto outline felx just items-center xs400:p-0 xs400:m-0 xs400:w-fit'>
					<Scene>
						<Water />
						<Disc />
					</Scene>
					<EvervaultCardContainer />
				</main>
			</div>
			<HomeContact />
			<Footer />
		</div>
	);
}
