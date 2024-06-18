import Image from 'next/image';

export default function ImageLogo() {
	return (
		<Image
			className='bg-white rounded-full m-1 p-0'
			width={30}
			height={30}
			src='/icons/Icosahedron.png'
			alt='logo icon'
		></Image>
	);
}
