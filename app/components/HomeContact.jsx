import Circle from './Circle';
import Link from 'next/link';
import MailMeButton from './MailMeButton';
import CallMeButton from './CallMeButton';

export default function HomeContact() {
	return (
		<div className='w-full h-screen grid grid-rows-3 md:grid-rows-3 grid-cols-7 md:h-svh relative overflow-hidden box-border leading-normal tracking-normal text-center text-[1rem] mq850:m-5 mq850:p-12 outline'>
			<div className='row-start-1 row-end-2 col-start-1 col-end-8 flex items-start justify-center h-44 text-[8.35rem] outline'>
				<h1 className='px-4 custom-font text-center text-[10rem] text-purple-300 xl:text-[8.8rem] lg:text-[7.5rem] mq1225:text-[6.5rem] mq1050:text-[5rem] mq850:text-[4.5rem] mq650:text-[3.8rem] outline'>
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
						className='flex text-[2rem] justify-center custom-font items-center p-2'
					>{`let's talk`}</Link>
				</Circle>
			</div>
			<div className='row-start-2 row-end-3 col-start-7 col-end-8 flex justify-center items-end justify-self-center mq850:hidden'>
				<MailMeButton />
			</div>
		</div>
	);
}
