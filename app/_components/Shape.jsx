import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export function Shape(props) {
	const { nodes, materials } = useGLTF('/source/variation.glb');
	return (
		<group {...props} dispose={null}>
			<group position={[0, 0.5, 0]}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Object_4.geometry}
					material={materials['Material.001']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Object_5.geometry}
					material={materials.Material}
				/>
			</group>
		</group>
	);
}
useGLTF.preload('/source/variation.glb');
export default Shape;
