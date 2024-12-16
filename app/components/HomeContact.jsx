import Circle from './Circle';
import Link from 'next/link';
import MailMeButton from './MailMeButton';
import CallMeButton from './CallMeButton';
// import GridComponent from './GridComponent';

export default function HomeContact() {
	return (
		<div className='w-full h-screen flex flex-col justify-center items-center gap-4 md:gap-4 px-4 bg-transparent mq750:p-3 xs400:p-0 xs400:m-0'>
			<div className=' grid grid-rows-3 md:grid-rows-3 grid-cols-5 md:h-svh relative overflow-hidden box-border leading-normal tracking-normal text-center text-[1rem] mq850:m-5 mq850:p-12 xs400:p-0 xs400:m-0 xs400:w-fit xs400:gap-2 xs400:h-[35rem] mq850:h-[55rem] mq650:h-[45rem] mq1225:h-[55rem] '>
				<div className='row-start-1 row-end-2 col-start-1 col-end-8 flex items-start justify-center text-[8.35rem] xs400:items-center xs400:p-0 xs400:m-0 xs400:w-full'>
					<h1 className='px-4 text-center text-[22rem] xl:text-[18rem] lg:text-[17rem] mq1225:text-[15rem] mq1050:text-[12rem] mq850:text-[10rem] mq650:text-[8rem] xs400:text-[8rem] xs400:px-2'>
						GET IN
					</h1>
				</div>
				<div className='row-start-2 row-end-3 col-start-1 col-end-2 flex justify-center items-end justify-self-center mq650:hidden'>
					<CallMeButton />
				</div>

				<div className='text-[1.25rem] mt-52 mb-8 row-start-2 row-end-3 col-start-3 col-end-4 flex justify-center items-end'>
					<Circle>
						<Link
							href='/contact'
							className='flex text-[2rem] justify-center custom-font items-center p-2 xs400:text-[1.3rem]'
						>{`let's talk`}</Link>
					</Circle>
					{/* <GridComponent /> */}
				</div>
				<div className='row-start-2 row-end-3 col-start-5 col-end-6 flex justify-center items-end justify-self-center mq650:hidden'>
					<MailMeButton />
				</div>
				<div className='row-start-3 row-end-4 col-start-1 col-end-8 flex items-start justify-center text-[8.35rem] xs400:items-center xs400:p-0 xs400:m-0 xs400:w-full'>
					<h1 className='px-4 text-center text-[22rem] xl:text-[18rem] lg:text-[17rem] mq1225:text-[15rem] mq1050:text-[12rem] mq850:text-[10rem] mq650:text-[8rem] xs400:text-[8rem] xs400:px-2'>
						TOUCH
					</h1>
				</div>
			</div>
		</div>
	);
}
