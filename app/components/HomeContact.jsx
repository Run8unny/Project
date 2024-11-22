import Button from './Button';
import Circle from './Circle';
import Link from 'next/link';

export default function HomeContact() {
	return (
		<div className='w-full h-screen grid grid-rows-3 md:grid-rows-3 grid-cols-7 md:grid-cols-7 relative overflow-hidden box-border leading-normal tracking-normal text-left text-[1rem] p-[70px]'>
			<div className='row-start-1 row-end-2 col-start-1 col-end-8 flex items-start justify-center text-[8rem]'>
				<h1 className='custom-font'>GET IN TOUCH</h1>
			</div>
			<div className='row-start-2 row-end-3 col-start-1 col-end-2 flex justify-center items-end justify-self-center'>
				<Button>call me</Button>
			</div>

			<div className='text-[1.25rem] mt-52 mb-8 row-start-2 row-end-3 col-start-2 col-end-7 flex flex-initial justify-center items-center'>
				<Circle>
					<Link
						href='/contact'
						className='flex justify-center items-center'
					>{`CONTACT`}</Link>
				</Circle>
			</div>

			<div className='row-start-2 row-end-3 col-start-7 col-end-8 flex justify-center items-end justify-self-center'>
				<Button>mail me</Button>
			</div>
		</div>
	);
}
