export default function ContactForm() {
	return (
		<form className='h-full w-full flex justify-center items-center'>
			<input className='border-2 rounded-full h-60 w-60 m-4' type='text' />
			<input className='border-2 rounded-full h-60 w-60 m-4' type='text' />
			<textarea
				className='border-2 rounded-full h-60 w-60 m-4'
				name=''
				id=''
			></textarea>
			<button
				className='border-2 rounded-full h-60 w-60 text-white text-2xl m-4'
				type='submit'
			>
				Send
			</button>
		</form>
	);
}
