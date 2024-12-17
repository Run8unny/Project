import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Text } from '@react-three/drei';

export default function FloatingText({ textContent }) {
	const textRef = useRef();

	// Access viewport width to adjust text animation responsively
	const { viewport } = useThree();
	const screenLimit = viewport.width / 2 + 2; // Adjust limits dynamically based on viewport

	// Animation logic
	useFrame((state, delta) => {
		if (textRef.current) {
			textRef.current.position.x += delta * 0.3; // Move the text horizontally
			if (textRef.current.position.x > screenLimit) {
				textRef.current.position.x = -screenLimit; // Reset position if out of bounds
			}
		}
	});

	return (
		<Text
			ref={textRef}
			position={[-screenLimit, 0, 0]} // Start text off-screen
			fontSize={0.5} // Adjust text size
			anchorX='center'
			anchorY='middle'
			maxWidth={viewport.width / 1.5} // Responsive text width
			lineHeight={1.2}
			letterSpacing={0.02}
			textAlign='center'
			font='/fonts/CothamSans.otf'
		>
			{textContent}
		</Text>
	);
}
