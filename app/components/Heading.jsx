export default function Heading({ children }) {
	return (
		<div className='flex flex-row justify-center items-center gap-4 md:gap-8 px-4 py-5 mb-1 bg-transparent mq750:p-3 xs400:p-0 xs400:m-0'>
			<h1
				className={`font-outward inline-block self-center text-center text-[35rem] leading-none xl:text-[30rem] lg:text-[27rem] mq850:text-[26rem] xs400:p-0 xs400:m-3`}
			>
				{children}
			</h1>
		</div>
	);
}
