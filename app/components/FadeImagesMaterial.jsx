import { extend } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';

export const FadeImagesMaterial = shaderMaterial(
	{
		effectFactor: 0.5,
		dispFactor: 0.5,
		texture1: undefined,
		texture2: undefined,
		disp: undefined,
	},

	/*glsl*/ ` varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }`,

	/*glsl*/ ` varying vec2 vUv;
    uniform sampler2D texture1;
    uniform sampler2D texture2;
    uniform sampler2D disp;
    uniform float _rot;
    uniform float dispFactor;
    uniform float effectFactor;

    void main() {
      vec2 uv = vUv;
      vec4 disp = texture2D(disp, uv);
      vec2 distortedPosition = vec2(uv.x + dispFactor * (disp.r*effectFactor), uv.y);
      vec2 distortedPosition2 = vec2(uv.x - (1.0 - dispFactor) * (disp.r*effectFactor), uv.y);
      vec4 _texture = texture2D(texture1, distortedPosition);
      vec4 _texture02 = texture2D(texture2, distortedPosition2);
      vec4 finalTexture = mix(_texture, _texture02, dispFactor);
      gl_FragColor = finalTexture;
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }`
);

extend({ FadeImagesMaterial });
