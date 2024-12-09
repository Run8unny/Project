export default function Heading({ children }) {
	return (
		<div className='flex flex-row justify-center items-center gap-4 md:gap-10 px-4 py-5 mb-1 bg-transparent mq750:p-3 xs400:p-0 xs400:m-0'>
			<h1
				className={`custom-font font-bold uppercase inline-block text-orange-700 text-center text-[11rem] xl:text-[9.8rem] lg:text-[8.5rem] mq1225:text-[8rem] mq1050:text-[7.5rem] mq850:text-[5.5rem] mq650:text-[3rem] xs400:text-[2.8rem] text_shadow xs400:p-0 xs400:m-3`}
			>
				{children}
			</h1>
		</div>
	);
}
