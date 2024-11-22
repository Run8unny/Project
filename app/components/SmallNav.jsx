export default function SmallNav({ children }) {
	return (
		<div className='flex justify-between items-center w-full h-[100px] px-6 py-6 mb-1 bg-transparent'>
			{children}
		</div>
	);
}
