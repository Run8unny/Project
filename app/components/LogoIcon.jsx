import Image from 'next/image';

export default function LogoIcon({ width = 20, height = 25 }) {
	return (
		<Image
			className='m-0 p-0'
			width={width}
			height={height}
			src='/assets/home/Polygon2.png'
			alt='logo icon'
		/>
	);
}
