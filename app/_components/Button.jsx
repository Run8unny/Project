export default function Button({ children, color }) {
	return (
		<button
			className={`border-2 text-slate-50 border-${color} m-2 p-4 rounded-full`}
		>
			{children}
		</button>
	);
}
