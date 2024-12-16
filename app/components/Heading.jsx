export default function Heading({ children }) {
	return (
		<div className='flex flex-row justify-center items-center gap-4 md:gap-10 px-4 py-5 mb-1 bg-transparent mq750:p-3 xs400:p-0 xs400:m-0'>
			<h1
				className={`font-black font-cotham uppercase inline-block text-orange-600 text-center text-2xl leading-none xl:text-[13rem] lg:text-[11rem] mq1225:text-[11rem] mq1050:text-[10rem] mq850:text-[10rem] mq650:text-[10rem] xs400:text-[8rem] xs400:p-0 xs400:m-3`}
			>
				{children}
			</h1>
		</div>
	);
}
