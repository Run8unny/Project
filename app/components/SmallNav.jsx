export default function SmallNav({ children }) {
	return (
		<ul className='flex gap-2 justify-between items-center text-lg px-10 mx-auto mt-5'>
			{children}
		</ul>
	);
}
