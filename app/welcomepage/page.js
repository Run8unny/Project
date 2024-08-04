import Link from 'next/link';
import SecondCursor from '../_components/SecondCursor';
import Circle from '../_components/Circle';

export default function Page() {
	return (
		<div className='w-full h-screen grid grid-rows-3 md:grid-rows-3 grid-cols-5 md:grid-cols-3 relative overflow-hidden box-border leading-normal tracking-normal text-left text-[1rem] font-be-vietnam-pro p-[30px]'>
			<div className='row-start-1 row-end-2 col-start-2 col-end-5 flex items-start justify-center'>
				<span>[ WELCOME ]</span>
			</div>
			<div className='row-start-2 row-end-3 col-start-1 col-end-2 flex flex-initial justify-start items-center w-[100px]'>
				<span>[ ŻANETA]</span>
			</div>

			<div className='text-[1.25rem] row-start-2 row-end-3 col-start-2 col-end-5 flex justify-center items-center'>
				<Circle>
					<Link
						href='/'
						className='flex justify-center items-center'
					>{`ENTER`}</Link>
				</Circle>
			</div>

			<div className='row-start-2 row-end-3 col-start-5 col-end-6 flex justify-end items-center w-[125px] justify-self-end'>
				<span>[ WARDASZKA ]</span>
			</div>
			<div className='row-start-3 row-end-4 col-start-2 col-end-5 flex items-end justify-center'>
				<span>[ TO MY SPACE ]</span>
			</div>
			<SecondCursor />
		</div>
	);
}
