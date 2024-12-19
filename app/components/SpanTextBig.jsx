export default function SpanTextBig({ children }) {
	return (
		<div className='flex flex-row items-start justify-start py-0 pl-[11px] pr-3 outline'>
			<span className='[text-decoration:none] self-stretch relative text-xs text-center'>
				{children}
			</span>
		</div>
	);
}
