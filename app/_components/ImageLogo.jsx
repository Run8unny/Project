import Image from 'next/image';

export default function ImageLogo() {
	return (
		<Image
			width={40}
			height={35}
			src='/icons/Icosahedron.png'
			alt='logo icon'
		></Image>
	);
}
