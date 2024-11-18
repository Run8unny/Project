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

	const handleMouseMove = (e) => {
		const { clientX, clientY } = e;
		mouse.current = { x: clientX, y: clientY };

		const { x, y } = delayedMouse.current;
		delayedMouse.current = {
			x: lerp(x, mouse.current.x, 0.08),
			y: lerp(y, mouse.current.y, 0.08),
		};

		moveCircle(delayedMouse.current.x, delayedMouse.current.y);
	};

	const moveCircle = (x, y) => {
		circles.current.forEach((circle, i) => {
			gsap.set(circle, { x, y, xPercent: -50, yPercent: -50 });
		});
	};

	useEffect(() => {
		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
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
