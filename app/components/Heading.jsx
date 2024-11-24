const Heading = ({ children }) => {
	return (
		<h1 className='w-full relative custom-font text-[8.4rem] mq1225:text-[7.2rem] mq1050:text-[6.8rem] mq750:text-[5.8rem] mq450:text-[4.8rem] uppercase inline-block text-orange-500 text-center h-[11rem] mt-1 outline'>
			{children}
		</h1>
	);
};
export default Heading;
