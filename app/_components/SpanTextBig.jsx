const SpanTextBig = ({ children }) => {
	return (
		<div className='flex flex-row items-start justify-start py-0 pl-[11px] pr-3'>
			<span className='[text-decoration:none] self-stretch relative text-[20px] text-center'>
				{children}
			</span>
		</div>
	);
};

export default SpanTextBig;
