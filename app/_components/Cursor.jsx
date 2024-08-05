'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Cursor({ isHovered }) {
	const size = isHovered ? 50 : 100;
	const circle = useRef();
	const mouse = useRef({
		x: 0,
		y: 0,
	});

	function handleMouseMove(e) {
		const { clientX, clientY } = e;
		mouse.current = {
			x: clientX,
			y: clientY,
		};
		moveCircle(mouse.current.x, mouse.current.y);
	}

	function moveCircle(x, y) {
		gsap.set(circle.current, { x, y, xPercent: -50, yPercent: -50 });
	}

	useEffect(() => {
		window.addEventListener('mousemove', handleMouseMove);

		return () => window.removeEventListener('mousemove', handleMouseMove);
	}, []);

	return (
		<div
			ref={circle}
			className='fixed z-50 top-0 left-0 rounded-full mix-blend-difference pointer-events-none'
			style={{ width: size, height: size, backgroundColor: 'white' }}
		></div>
	);
}
