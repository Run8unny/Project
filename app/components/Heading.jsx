const Heading = ({ children }) => {
	return (
		<h1 className='w-full relative custom-font text-[8.7rem] mq1225:text-[6.5rem] mq1050:text-[6rem] mq850:text-[5.5rem] mq450:text-[4.8rem] uppercase inline-block text-orange-500 text-center h-[11rem] outline'>
			{children}
		</h1>
	);
};
export default Heading;
