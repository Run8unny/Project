const Heading = ({ children }) => {
	return (
		<h1
			className={`w-full relative custom-font uppercase inline-block text-orange-500 text-center text-[10.2rem] xl:text-[9.2rem] lg:text-[8.2rem] mq1225:text-[7.2rem] mq1050:text-[6.2rem] mq850:text-[5.5rem] mq450:text-[4.8rem]`}
		>
			{children}
		</h1>
	);
};
export default Heading;
