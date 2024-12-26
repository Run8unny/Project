'use client';

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
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
import ThemeToggler from '../components/ThemeToggler';
import Button from '../components/Button';

const Scene = dynamic(() => import('../components/Scene'), { ssr: false });

export default function Home() {
	const [isHovered, setIsHovered] = useState(false);
	const [theme, setTheme] = useState('light');

	useEffect(() => {
		// Check localStorage for the saved theme preference
		const savedTheme = localStorage.getItem('theme') || 'light';
		setTheme(savedTheme);
		document.documentElement.classList.toggle('dark', savedTheme === 'dark');
	}, []);

	const toggleTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(newTheme);
		document.documentElement.classList.toggle('dark', newTheme === 'dark');
		localStorage.setItem('theme', newTheme);
	};

	return (
		<div className='felx flex-col justify-center items-center w-full'>
			<Cursor isHovered={isHovered} />
			<div
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				<Nav>
					<NavMenu>
						<MenuItem href='/about'>about</MenuItem>
						<MenuItem href='./contact'>contact</MenuItem>
						<MenuItem href='./playground'>playground</MenuItem>
						<MenuItem href='./work'>work</MenuItem>
					</NavMenu>
				</Nav>
				<header className='w-full h-50 top-20 relative'>
					<Heading>CREATIVE DEVELOPER</Heading>
				</header>
				<main>
					<Scene>
						<Water />
						<Disc />
					</Scene>
					<ThemeToggler>
						<Button onClick={toggleTheme}>
							{theme === 'light' ? 'theme dark' : 'theme light'}
						</Button>
					</ThemeToggler>
				</main>
			</div>
			<EvervaultCardContainer />
			<HomeContact />
			<Footer />
		</div>
	);
}
