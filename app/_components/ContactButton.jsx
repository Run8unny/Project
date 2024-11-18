import Link from 'next/link';
export default function ContactButton() {
	return (
		<div className='w-full cursor-pointer text-left text-[7rem] font-be-vietnam-pro font-extrabold flex items-start'>
			<Link href='/contact'>
				<span className='[line-break:anywhere] w-full'>
					<p className='m-0'>cont</p>
					<p className='m-0'>act</p>
				</span>
			</Link>
		</div>
	);
}
