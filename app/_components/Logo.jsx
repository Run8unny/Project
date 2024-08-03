import ImageLogo from './ImageLogo';
import Link from 'next/link';

export default function Logo() {
	return (
<<<<<<< Updated upstream
		<div className={arrayFont.className}>
			<Link href='/' className='flex items-center'>
				<span className='text-4xl'>zan</span>
				<ImageLogo />
=======
		<div className={`font-array pl-4`}>
			<Link href='/' className='flex flex-row'>
				<span className='text-[40px] hover:text-pink-400 self-center'>zan</span>
				<div>
					<LogoIcon width={27} height={30} />
				</div>
>>>>>>> Stashed changes
			</Link>
		</div>
	);
}
