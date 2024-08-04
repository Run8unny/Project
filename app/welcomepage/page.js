import Link from 'next/link';
import SecondCursor from '../_components/SecondCursor';
import Circle from '../_components/Circle';

export default function Page() {
	return (
		<div className='w-full h-screen grid grid-rows-3 md:grid-rows-3 grid-cols-3 md:grid-cols-3 relative overflow-hidden box-border leading-normal tracking-normal text-left text-[1rem] font-be-vietnam-pro p-[30px]'>
			<div className='row-start-1 row-end-2 col-start-2 col-end-3 flex items-start justify-center'>
				<span>[ WELCOME ]</span>
			</div>
			<div className='row-start-2 row-end-3 col-start-1 col-end-2 flex justify-start items-center'>
				<span>[ ŻANETA]</span>
			</div>

			<div className='text-[1.25rem] row-start-2 row-end-3 col-start-2 col-end-3 flex justify-center items-center'>
				<Circle>
					<Link
						href='/'
						className='row-start-2 row-end-3 col-start-2 col-end-3'
					>{`HOLD TO ENTER`}</Link>
				</Circle>
			</div>

			<div className='row-start-2 row-end-3 col-start-3 col-end-4 flex justify-end items-center'>
				<span>[ WARDASZKA ]</span>
			</div>
			<div className='row-start-3 row-end-4 col-start-2 col-end-3 flex items-end justify-center'>
				<span>[ TO MY SPACE ]</span>
			</div>
			<SecondCursor />
		</div>
	);
}
