import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';

export default function FloatingText({ textContent }) {
	const textRef = useRef();
	const [position, setPosition] = useState([-10, 0, 0]);

	useFrame((state, delta) => {
		setPosition((prevPosition) => {
			const newX = prevPosition[0] + delta * 0.3;
			return [newX > 10 ? -10 : newX, prevPosition[1], prevPosition[2]];
		});

		if (textRef.current) {
			textRef.current.position.x = position[0];
		}
	});

	return (
		<Text
			ref={textRef}
			position={position}
			fontSize={1}
			fontWeight={600}
			color='hotpink'
			anchorX='right'
			anchorY='top'
			maxWidth={9}
			lineHeight={1.2}
			letterSpacing={0.02}
			textAlign='center'
			font='../../fonts/Poppins-SemiBold.ttf'
		>
			{textContent}
		</Text>
	);
}
