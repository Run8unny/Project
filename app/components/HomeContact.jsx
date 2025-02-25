import Circle from './Circle';
import Link from 'next/link';
import MailMeButton from './MailMeButton';
import CallMeButton from './CallMeButton';

export default function HomeContact() {
	return (
		<div className='w-full h-[60rem] md:h-[50rem] flex flex-col justify-center items-center gap-8 md:gap-6 px-4 bg-transparent mq750:p-3 xs400:p-0 xs400:m-0 bg-dot-zinc-950/[0.25]'>
			<div className='w-full grid grid-rows-3 md:grid-rows-3 grid-cols-5 md:grid-cols-4 relative overflow-hidden box-border leading-normal mq850:m-5 mq850:p-12 xs400:p-0 xs400:m-0 xs400:w-full xs400:gap-2 xs400:h-[35rem] mq850:h-[55rem] mq650:h-[45rem] mq1225:h-[55rem] '>
				<div className='row-start-1 row-end-2 col-start-1 col-end-8 flex items-start justify-start mq1225:justify-center text-[8.35rem] xs400:p-4 xs400:m-0 xs400:w-full'>
					<h1 className='px-4 font-bold text-center text-2xl xl:text-[20rem] lg:text-[20rem] mq1225:text-[17rem] mq1050:text-[17rem] mq850:text-[13rem] mq650:text-[11rem] xs400:text-2xl xs400:px-2'>
						GET
					</h1>
				</div>
				<div className='row-start-2 row-end-3 col-start-1 col-end-2 flex justify-start items-center justify-self-center mq650:hidden'>
					<CallMeButton />
				</div>

				<div className='row-start-2 row-end-3 col-start-2 col-end-5 md:col-end-4 flex justify-center items-center hover:animate-bounce '>
					<Circle>
						<Link
							href='/contact'
							className='flex text-sm text-white font-cotham justify-center items-center p-15 xs400:text-xs'
						>{`let's talk`}</Link>
					</Circle>
				</div>
				<div className='row-start-2 row-end-3 col-start-5 col-end-6 flex justify-end items-center justify-self-center mq650:hidden'>
					<MailMeButton />
				</div>
				<div className='row-start-3 row-end-4 col-start-1 col-end-8 flex items-center justify-end mq1225:justify-center text-[8.35rem] xs400:items-center xs400:p-4 xs400:m-0 xs400:w-full'>
					<h1 className='px-4 font-bold text-center text-2xl xl:text-[20rem] lg:text-[20rem] mq1225:text-[17rem] mq1050:text-[17rem] mq850:text-[14rem] mq650:text-[11rem] xs400:text-xl xs400:px-2 tracking-widest'>
						<span className='text-base'>in</span>TOUCH
					</h1>
				</div>
			</div>
		</div>
	);
}
