'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Cursor({ isHovered }) {
	const size = isHovered ? 200 : 70;
	const circle = useRef();
	const mouse = useRef({
		x: 0,
		y: 0,
	});

	const delayedMouse = useRef({
		x: 0,
		y: 0,
	});

	function handleMouseMove(e) {
		const { clientX, clientY } = e;
		mouse.current = {
			x: clientX,
			y: clientY,
		};
	}

	const lerp = (x, y, a) => x * (1 - a) + y * a;

	function moveCircle(x, y) {
		gsap.set(circle.current, { x, y, xPercent: -50, yPercent: -50 });
	}

	function animate() {
		const { x, y } = delayedMouse.current;
		delayedMouse.current = {
			x: lerp(x, mouse.current.x, 0.08),
			y: lerp(y, mouse.current.y, 0.08),
		};

		moveCircle(delayedMouse.current.x, delayedMouse.current.y);
		window.requestAnimationFrame(animate);
	}

	useEffect(() => {
		animate();
		window.addEventListener('mousemove', handleMouseMove);

		return () => window.removeEventListener('mousemove', handleMouseMove);
	}, []);

	return (
		<div
			ref={circle}
			className='fixed top-0 left-0 bg-[#BCE4F2] rounded-full mix-blend-difference pointer-events-none'
			style={{ width: size, height: size }}
		></div>
	);
}
