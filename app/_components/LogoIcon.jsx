import Image from 'next/image';

export default function LogoIcon({ width, height, color, src, alt }) {
	return (
		<Image
			className={`${color} rounded-full m-4 p-0`}
			width={width}
			height={height}
			src='/icons/Icosahedron.png'
			alt='logo icon'
		></Image>
	);
}
