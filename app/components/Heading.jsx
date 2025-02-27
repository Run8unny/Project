export default function Heading({ children }) {
	return (
		<div className='flex flex-row justify-center items-center bg-transparent px-20'>
			{/* <h1 className={`font-extrabold self-center text-center text-[20rem]`}> */}
			{children}
			<div className='text-base text-white w-full mb-40'>
				<p>
					This website showcases my journey as a frontend developer, learning
					and mastering modern web technologies like React, React Three Fiber,
					and WebGL through various courses and hands-on projects.It serves as
					both a portfolio and an experimental space where I explore different
					approaches to building interactive and visually engaging web
					experiences. I work as part of V5V Studio, where V stands for
					Visualize, 5 represents the five essential steps of website creation,
					and the final V stands for Validate—ensuring that every project is
					both creatively and technically sound. By leveraging these
					technologies, we can go beyond traditional interfaces, creating
					immersive applications that enhance performance, improve user
					engagement, and push the boundaries of design. This project is not
					just about coding—it’s about discovering the creative potential of the
					web and demonstrating what’s possible when technology meets
					innovation.
				</p>
			</div>
			{/* </h1> */}
		</div>
	);
}
