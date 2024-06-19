'use client';
import Cursor from './Cursor';
import Logo from './Logo';
import { useState } from 'react';
import Link from 'next/link';

export default function Footer({ onIsHoverd, arrayFont }) {
	return (
		<div className='mr-20 ml-20 my-4  p-2'>
			<ul
				className='flex justify-evenly gap-40 text-lg'
				onMouseEnter={() => onIsHoverd(true)}
				onMouseLeave={() => onIsHoverd(false)}
			>
				<li>
					<Link href='https://github.com/Run8unny'>[Github]</Link>
				</li>
				<li>
					<Link href=''>[LinkedIn]</Link>
				</li>
				<li>
					<Link href='https://pl.pinterest.com/zanwardaszka/'>[Pinterest]</Link>
				</li>
				<li>
					<Link href=''>[Facebook]</Link>
				</li>
				<li>
					{/* <FontAwesomeIcon icon={faCircle} className='px-2 text-sm' /> */}
					<Link href='zaneta.wardaszka@gmail.com'>[Mail]</Link>
				</li>
			</ul>
		</div>
	);
}
