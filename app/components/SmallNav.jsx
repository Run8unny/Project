export default function SmallNav({ children }) {
	return (
		<ul className='w-full flex gap-2 justify-between items-center text-lg px-10 xs400:px-2 xs400:mx-0 mt-5'>
			{children}
		</ul>
	);
}
