import Link from 'next/link';
export default function ContactButton() {
	return (
		<div className='w-full custom-font cursor-pointer text-left text-[5rem] flex items-start'>
			<Link href='/contact'>
				<span className='[line-break:anywhere] w-full'>
					<p className='m-0'>con</p>
					<p className='m-0'>tact</p>
				</span>
			</Link>
		</div>
	);
}
