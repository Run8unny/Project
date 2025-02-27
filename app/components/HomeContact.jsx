import Link from 'next/link';

export default function HomeContact() {
	return (
		<div className='w-full h-[22rem] md:h-[20rem] pt-0 pb-10 flex flex-col justify-center items-center gap-8 md:gap-6 bg-transparent cursor-pointer px-16'>
			<div className='w-full flex flex-col justify-center items-center text-[15rem]'>
				<Link href='/contact'>CONTACT</Link>
			</div>
		</div>
	);
}
