'use client';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
	const form = useRef();
	const [isSent, setIsSent] = useState(false);
	const [data, setData] = useState({
		name: '',
		email: '',
		message: '',
	});

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm('service_zbxdob6', 'template_gs7sgr4', form.current, {
				publicKey: 'S15El92hTdxIZyS_N',
			})
			.then(
				() => {
					console.log('SUCCESS!');
					setIsSent(true);
					setData({
						name: '',
						email: '',
						message: '',
					});
				},
				(error) => {
					console.log('FAILED...', error.text);
				}
			);
	};

	const formStyle =
		'border-2 rounded-full h-80 w-80 m-4 text-center p-10 placeholder-gray-800 focus:outline-pink-900';
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
				value={data.name}
				onChange={(e) => {
					setData({
						...data,
						name: e.target.value,
					});
				}}
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
				value={data.email}
				onChange={(e) => {
					setData({
						...data,
						email: e.target.value,
					});
				}}
				minLength={5}
			/>

			<label className='sr-only' htmlFor='message'>
				Message
			</label>
			<textarea
				id='message'
				name='message'
				className='border-2 rounded-full h-80 w-80 m-4 resize-none text-center pt-[140px] p-10 placeholder-gray-800 focus:outline-pink-900'
				placeholder='[ message ]'
				value={data.message}
				onChange={(e) => {
					setData({
						...data,
						message: e.target.value,
					});
				}}
				required
			></textarea>

			<button
				className='border-2 border-solid cursor-pointer border-white rounded-full h-80 w-80 text-white text-2xl mx-4 hover:bg-pink-900 hover:border-0'
				type='submit'
				value='send'
				aria-label='Send your message'
			>
				{isSent ? 'I’ve got your message! I’ll reply soon.' : 'Send →'}
			</button>
		</form>
	);
}
