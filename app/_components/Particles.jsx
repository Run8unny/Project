import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Particles(props) {
	const { nodes, materials } = useGLTF('/source/particles.glb');
	return (
		<group {...props} dispose={null}>
			<group rotation={[-Math.PI / 2, 0, 0]} scale={0.122}>
				<points
					geometry={nodes.Object_2.geometry}
					material={materials['Scene_-_Root']}
				/>
				<points
					geometry={nodes.Object_3.geometry}
					material={materials['Scene_-_Root']}
				/>
				<points
					geometry={nodes.Object_4.geometry}
					material={materials['Scene_-_Root']}
				/>
				<points
					geometry={nodes.Object_5.geometry}
					material={materials['Scene_-_Root']}
				/>
				<points
					geometry={nodes.Object_6.geometry}
					material={materials['Scene_-_Root']}
				/>
			</group>
		</group>
	);
}

useGLTF.preload('/spurce/particles.glb');
