'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/app/lib/utils';
import { useState, useEffect } from 'react';
import Logo from '../header/Logo';

const transition = {
	type: 'spring',
	mass: 0.2,
	damping: 5.5,
	stiffness: 70,
	restDelta: 0.001,
	restSpeed: 0.001,
};

export const MenuItem = ({ item }) => {
	return (
		<div className='relative '>
			<button className='relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'>
				<span className='absolute inset-[-1000%] animate-[spin_30s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#f9f8f8_0%,#827f7d_50%,#aab6db_100%)]' />
				<span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl'>
					<Link href='/about'>{item}</Link>
				</span>
			</button>
		</div>
	);
};

export const Menu = ({ children }) => {
	return (
		<nav className='relative rounded-full border border-transparent dark:bg-black dark:border-white/[0.2] bg-transparent shadow-input flex justify-center space-x-4 px-8 py-6 '>
			{children}
		</nav>
	);
};

function Navbar({ className }) {
	return (
		<div
			className={cn('fixed top-10 inset-x-0 max-w-2xl mx-auto z-50', className)}
		>
			<Menu>
				<MenuItem item='About me' />
				<MenuItem item='Playground' />
				<MenuItem item='Work' />
				<MenuItem item='Contact' />
			</Menu>
		</div>
	);
}

export default function NavMenu() {
	return (
		<div className='relative w-full flex items-center justify-center'>
			<Navbar className='top-2' />
		</div>
	);
}
