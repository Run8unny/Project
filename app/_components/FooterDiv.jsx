export default function FooterDiv({ children }) {
	return (
		<div className='overflow-hidden shrink-0 flex flex-col flex-initial items-start justify-start gap-[3px]'>
			{children}
		</div>
	);
}
