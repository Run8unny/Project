import Image from 'next/image';

export default function LogoIcon({ width, height }) {
	return (
		<Image
			className={`m-0 p-0`}
			width={width}
			height={height}
			src='/icons/Polygon2.svg'
			alt='logo icon'
		></Image>
	);
}
