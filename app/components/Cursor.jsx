'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Cursor({ isHovered }) {
	const size = isHovered ? 18 : 22;
	const circle = useRef();
	const pointer = useRef({
		x: 0,
		y: 0,
	});

	function handlePointerMove(e) {
		const x = e.touches?.[0]?.clientX || e.clientX;
		const y = e.touches?.[0]?.clientY || e.clientY;

		pointer.current = { x, y };
		moveCircle(pointer.current.x, pointer.current.y);
	}

	function moveCircle(x, y) {
		gsap.set(circle.current, { x, y, xPercent: -50, yPercent: -50 });
	}

	useEffect(() => {
		window.addEventListener('mousemove', handlePointerMove);
		window.addEventListener('touchmove', handlePointerMove);

		return () => {
			window.removeEventListener('mousemove', handlePointerMove);
			window.removeEventListener('touchmove', handlePointerMove);
		};
	}, []);

	return (
		<div
			ref={circle}
			className='fixed z-50 top-0 left-0 rounded-full mix-blend-difference pointer-events-none'
			style={{ width: size, height: size, backgroundColor: 'dodgerblue' }}
		></div>
	);
}
