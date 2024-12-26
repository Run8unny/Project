export default function Heading({ children }) {
	return (
		<div className='flex flex-row justify-center items-center bg-transparent xs400:p-0 xs400:m-0'>
			<h1
				className={`font-outward self-center text-center tracking-wider text-[32rem] leading-none xl:text-[30rem] lg:text-[26rem] mq1225:text-[25rem] mq1050:text-[20rem] mq850:text-[18rem] xs400:text-[17rem] xs400:p-0`}
			>
				{children}
			</h1>
		</div>
	);
}
