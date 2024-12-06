'use client';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm('service_zbxdob6', 'template_gs7sgr4', form.current, {
				publicKey: 'S15El92hTdxIZyS_N',
			})
			.then(
				() => {
					console.log('SUCCESS!');
				},
				(error) => {
					console.log('FAILED...', error.text);
				}
			);
	};

	const formStyle =
		'border-2 rounded-full h-80 w-80 m-4 text-center p-10 placeholder-gray-800 focus:outline-orange-600';
	return (
		<form
			ref={form}
			className='h-full w-full flex flex-wrap justify-center items-center m-4 text-black'
			onSubmit={sendEmail}
		>
			<label className='sr-only' htmlFor='name'>
				Name
			</label>
			<input
				id='name'
				name='name'
				className={formStyle}
				type='text'
				placeholder='[ name ]'
				minLength={2}
				required
			/>

			<label className='sr-only' htmlFor='email'>
				Email
			</label>
			<input
				id='email'
				name='email'
				className={formStyle}
				type='email'
				placeholder='[ e-mail ]'
				required
				minLength={5}
			/>

			<label className='sr-only' htmlFor='message'>
				Message
			</label>
			<textarea
				id='message'
				name='message'
				className='border-2 rounded-full h-80 w-80 m-4 resize-none text-center pt-[140px] p-10 placeholder-gray-800 focus:outline-orange-600'
				placeholder='[ message ]'
				required
			></textarea>

			<button
				className='border-2 border-solid cursor-pointer border-white rounded-full h-80 w-80 text-white text-2xl mx-4 hover:bg-orange-600 hover:border-0'
				type='submit'
				value='send'
				aria-label='Send your message'
			>
				Send →
			</button>
		</form>
	);
}
