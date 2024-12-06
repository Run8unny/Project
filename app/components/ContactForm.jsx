export default function ContactForm() {
	const formStyle =
		'border-2 rounded-full h-80 w-80 m-4 text-center p-10 placeholder-gray-800';
	return (
		<form
			className='h-full w-full flex flex-wrap justify-center items-center m-4 text-black'
			// onSubmit={(e) => e.preventDefault()}
		>
			<label className='sr-only' htmlFor='name'>
				Name
			</label>
			<input
				id='name'
				name='userName'
				className={formStyle}
				type='text'
				placeholder='[ name ]'
				required
			/>

			<label className='sr-only' htmlFor='email'>
				Email
			</label>
			<input
				id='email'
				name='userEmail'
				className={formStyle}
				type='email'
				placeholder='[ e-mail ]'
				required
			/>

			<label className='sr-only' htmlFor='message'>
				Message
			</label>
			<textarea
				id='message'
				name='message'
				className='border-2 rounded-full h-80 w-80 m-4 resize-none text-center pt-[140px] p-10 placeholder-gray-800'
				placeholder='[ message ]'
				required
			></textarea>

			<button
				className='border-2 border-solid border-white rounded-full h-80 w-80 text-white text-2xl mx-4'
				type='submit'
				aria-label='Send your message'
			>
				Send →
			</button>
		</form>
	);
}
