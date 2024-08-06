export default function ContactForm() {
	return (
		<form className='h-full w-full flex flex-wrap justify-center items-center m-4'>
			<input className='border-2 rounded-full h-60 w-60 m-4' type='text' />
			<input className='border-2 rounded-full h-60 w-60 m-4' type='text' />
			<textarea
				className='border-2 rounded-full h-60 w-60 m-4 resize-none'
				name=''
				id=''
			></textarea>
			<button
				className='border-2 border-solid border-white rounded-full h-60 w-60 text-white text-2xl mx-20'
				type='submit'
			>
				Send →
			</button>
		</form>
	);
}
