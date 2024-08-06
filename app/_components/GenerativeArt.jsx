import React, { useRef, useEffect } from 'react';

const GenerativeArt = () => {
	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvas.getContext('2d');
		const width = canvas.width;
		const height = canvas.height;

		context.clearRect(0, 0, width, height);

		// Helper function to generate random number between min and max
		const randomBetween = (min, max) =>
			Math.floor(Math.random() * (max - min + 1)) + min;

		// Draw abstract geometric patterns
		for (let i = 0; i < 100; i++) {
			context.beginPath();
			context.moveTo(randomBetween(0, width), randomBetween(0, height));
			context.lineTo(randomBetween(0, width), randomBetween(0, height));
			context.strokeStyle = Math.random() > 0.5 ? 'black' : 'white';
			context.lineWidth = randomBetween(1, 5);
			context.stroke();
		}
	}, []);

	return (
		<canvas
			ref={canvasRef}
			width={800}
			height={600}
			style={{ border: '1px solid #000' }}
		/>
	);
};

export default GenerativeArt;
