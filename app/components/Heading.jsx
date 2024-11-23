const Heading = ({ children }) => {
	return (
		<h1 className='w-full relative custom-font text-[8.35rem] mq750:text-[7.35rem] uppercase inline-block text-orange-500 text-center h-[10rem] mt-7'>
			{children}
		</h1>
	);
};
export default Heading;
