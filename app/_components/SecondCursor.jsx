'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const colors = ['#c32d27', '#fff', '#EE82EE', '#fff'];

export default function SecondCursor() {
	const size = 270;
	const circles = useRef([]);
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
		circles.current.forEach((circle, i) => {
			gsap.set(circle, { x, y, xPercent: -50, yPercent: -50 });
		});
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
		<>
			{colors.map((color, i) => {
				return (
					<div
						key={color}
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
				);
			})}
		</>
	);
}
