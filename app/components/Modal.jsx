export default function Modal() {
	return ReactDOM.createPortal(
		<div className='fixed bg-black opacity-50 z-50 w-full h-full flex items-center justify-center top-0'>
			<div className='border-2 rounded-full h-80 w-80 m-4 text-center p-10 custom-font'>
				<h2>
					I’ve got your message! Thank you for contacting with me. I’ll reply
					soon.
				</h2>
			</div>
		</div>,
		document.body
	);
}
