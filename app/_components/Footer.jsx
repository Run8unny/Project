'use client';
import Cursor from './Cursor';
import Logo from './Logo';
import { useState } from 'react';
import Link from 'next/link';

export default function Footer({ onIsHoverd }) {
	return (
		<div className='flex justify-between gap-40 mr-20 ml-20 my-20 border-t border-neutral-400 p-2 pr-80'>
			<ul
				onMouseEnter={() => onIsHoverd(true)}
				onMouseLeave={() => onIsHoverd(false)}
			>
				<li>
					<Link href='https://github.com/Run8unny'>[Github]</Link>
				</li>
			</ul>
		</div>
	);
}
