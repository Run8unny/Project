import Circle from './Circle';
import Link from 'next/link';
import MailMeButton from './MailMeButton';
import CallMeButton from './CallMeButton';

export default function HomeContact() {
	return (
		<div className='flex flex-col justify-center items-center gap-4 md:gap-10 px-4 py-5 mb-1 bg-transparent mq750:p-3 xs400:p-0 xs400:m-0'>
			<div className='w-full h-screen grid grid-rows-3 md:grid-rows-3 grid-cols-7 md:h-svh relative overflow-hidden box-border leading-normal tracking-normal text-center text-[1rem] mq850:m-5 mq850:p-12 outline xs400:p-0 xs400:m-0 xs400:w-fit xs400:gap-2 xs400:h-[35rem]'>
				<div className='row-start-1 row-end-2 col-start-1 col-end-8 flex items-start justify-center h-44 text-[8.35rem] outline xs400:items-center xs400:p-0 xs400:m-0 xs400:w-fit'>
					<h1 className='px-4 custom-font text-center text-[10rem] text_shadow xl:text-[8.8rem] lg:text-[7.5rem] mq1225:text-[6.5rem] mq1050:text-[5rem] mq850:text-[4.5rem] mq650:text-[3.8rem] outline xs400:text-[3rem] xs400:px-2'>
						GET IN TOUCH
					</h1>
				</div>
				<div className='row-start-2 row-end-3 col-start-1 col-end-2 flex justify-center items-end justify-self-center mq850:hidden'>
					<CallMeButton />
				</div>

				<div className='text-[1.25rem] mt-52 mb-8 row-start-2 row-end-3 col-start-2 col-end-7 flex flex-initial justify-center items-center'>
					<Circle>
						<Link
							href='/contact'
							className='flex text-[2rem] justify-center custom-font items-center p-2 xs400:text-[1.3rem]'
						>{`let's talk`}</Link>
					</Circle>
				</div>
				<div className='row-start-2 row-end-3 col-start-7 col-end-8 flex justify-center items-end justify-self-center mq850:hidden'>
					<MailMeButton />
				</div>
			</div>
		</div>
	);
}
