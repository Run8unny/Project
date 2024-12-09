'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const colors = ['#d40909', '#8cf6a1', '#eded47', '#e832ae', '#ffffff'];

export default function SecondCursor() {
	const size = 270;
	const circles = useRef([]);
	const mouse = useRef({ x: 0, y: 0 });
	const delayedMouse = useRef({ x: 0, y: 0 });

	const lerp = (x, y, a) => x * (1 - a) + y * a;

	const handlePointerMove = (e) => {
		const x = e.touches?.[0]?.clientX || e.clientX;
		const y = e.touches?.[0]?.clientY || e.clientY;

		mouse.current = { x, y };

		const { x: delayedX, y: delayedY } = delayedMouse.current;
		delayedMouse.current = {
			x: lerp(delayedX, mouse.current.x, 0.08),
			y: lerp(delayedY, mouse.current.y, 0.08),
		};

		moveCircle(delayedMouse.current.x, delayedMouse.current.y);
	};

	const moveCircle = (x, y) => {
		circles.current.forEach((circle, i) => {
			gsap.set(circle, { x, y, xPercent: -50, yPercent: -50 });
		});
	};

	useEffect(() => {
		window.addEventListener('mousemove', handlePointerMove);
		window.addEventListener('touchmove', handlePointerMove);

		return () => {
			window.removeEventListener('mousemove', handlePointerMove);
			window.removeEventListener('touchmove', handlePointerMove);
		};
	}, []);

	return (
		<>
			{colors.map((color, i) => (
				<div
					key={i}
					ref={(ref) => (circles.current[i] = ref)}
					className='fixed top-0 left-0 rounded-full mix-blend-difference pointer-events-none'
					style={{
						width: size,
						height: size,
						backgroundColor: color,
						filter: 'blur(15px)',
						transition: `height 0.3s ease-out, width 0.3s ease-out, filter 0.3s ease-out, transform ${
							0.03 * i
						}s ease-out`,
					}}
				></div>
			))}
		</>
	);
}
