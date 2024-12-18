export default function SmallNav({ children }) {
	return (
		<div className='flex justify-center items-center'>
			<ul className='w-1/2 flex justify-center items-center text-lg px-10 xs400:px-2 xs400:mx-0 mt-5'>
				{children}
			</ul>
		</div>
	);
}
