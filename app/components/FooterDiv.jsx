export default function FooterDiv({ children }) {
	return (
		<div className='overflow-hidden shrink-0 flex flex-col flex-initial items-start justify-start gap-[3px] xs400:w-fit xs400:p-0 xs400:m-0 xs400:gap-2'>
			{children}
		</div>
	);
}
