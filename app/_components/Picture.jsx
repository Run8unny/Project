import Image from 'next/image';

export default function Picture({ width, height, src, alt }) {
	return <Image width={width} height={height} src={src} alt={alt}></Image>;
}
