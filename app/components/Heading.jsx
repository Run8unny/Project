const Heading = ({ children }) => {
	return (
		<h1
			className={`w-full relative custom-font font-bold uppercase inline-block text-balance text-orange-700 text-center text-[11rem] xl:text-[9.8rem] lg:text-[8.5rem] mq1225:text-[7.5rem] mq1050:text-[6rem] mq850:text-[4.5rem] mq650:text-[3.8rem] text_shadow`}
		>
			{children}
		</h1>
	);
};
export default Heading;
