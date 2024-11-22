const SpanTextSmall = ({ children }) => {
	return (
		<div className='flex flex-row items-start justify-start py-0 pl-[11px] pr-3'>
			<span className='[text-decoration:none] relative text-[inherit] text-[13px] md:text-xl'>
				{children}
			</span>
		</div>
	);
};

export default SpanTextSmall;
