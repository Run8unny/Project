export default function Button({ children, color }) {
	return (
		<button
			className={`border-2 border-${color} text-${color} m-2 p-4 rounded-full`}
		>
			{children}
		</button>
	);
}
