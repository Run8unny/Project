import './_styles/Loading.css';
export default function Loading() {
	return (
		<div className='h-screen w-auto bg-black flex justify-center items-center'>
			<span className='loader'></span>
		</div>
	);
}
