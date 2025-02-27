import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Text } from '@react-three/drei';

export default function FloatingText({ textContent }) {
	const textRef = useRef();

	const { viewport } = useThree();
	const screenLimit = viewport.width / 2 + 2;

	useFrame((state, delta) => {
		if (textRef.current) {
			textRef.current.position.x += delta * 0.3;
			if (textRef.current.position.x > screenLimit) {
				textRef.current.position.x = -screenLimit;
			}
		}
	});

	return (
		<Text
			ref={textRef}
			position={[-screenLimit, 0, 0]}
			fontSize={0.4}
			anchorX='center'
			anchorY='middle'
			maxWidth={viewport.width / 1.5}
			lineHeight={1.2}
			letterSpacing={0.02}
			textAlign='center'
			font='/fonts/CothamSans.otf'
		>
			{textContent}
		</Text>
	);
}
