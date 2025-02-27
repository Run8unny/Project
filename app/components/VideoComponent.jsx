export default function VideoComponent() {
	return (
		<div className='py-24'>
			<video width='100%' height='360' loop autoPlay muted>
				<source src='/assets/home/video.mp4' type='video/mp4' />
				Your browser does not support the video tag.
			</video>
		</div>
	);
}
