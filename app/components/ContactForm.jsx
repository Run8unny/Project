export default function ContactForm() {
	return (
		<form className='h-full w-full flex flex-wrap justify-center items-center m-4 text-black'>
			<input
				className='border-2 rounded-full h-60 w-60 m-4 text-center p-10  placeholder-gray-800'
				type='text'
				placeholder='[ name ]'
			/>
			<input
				className='border-2 rounded-full h-60 w-60 m-4 text-center p-10 placeholder-gray-800'
				type='text'
				placeholder='[ e-mail ]'
			/>

			<textarea
				className='border-2 rounded-full h-60 w-60 m-4 resize-none text-center pt-[105px] p-10 placeholder-gray-800'
				placeholder='[ message ]'
			></textarea>

			<button
				className='border-2 border-solid border-white rounded-full h-60 w-60 text-white text-2xl mx-11'
				type='submit'
			>
				Send →
			</button>
		</form>
	);
}
