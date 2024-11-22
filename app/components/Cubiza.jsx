import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Cubiza(props) {
	const { nodes, materials } = useGLTF('/source/cubiza_squeezer.glb');
	return (
		<group {...props} dispose={null}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Object_4.geometry}
				material={materials.Material}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Object_5.geometry}
				material={materials.Material}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Object_6.geometry}
				material={materials.Material}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Object_7.geometry}
				material={materials.Material}
			/>
		</group>
	);
}

useGLTF.preload('/source/cubiza_squeezer.glb');
