import PropTypes from 'prop-types';

const Homefooter = ({ className = '', children }) => {
	return (
		<ul className='flex gap-7 justify-center items-center text-lg'>
			<li>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='48'
					height='48'
					viewBox='0 0 61 61'
					fill='none'
				>
					<path
						d='M31.6473 60.8065C15.0851 61.2645 1.28745 48.2095 0.829385 31.6473C0.37132 15.0851 13.4263 1.28746 29.9885 0.8294C46.5507 0.371335 60.3484 13.4263 60.8065 29.9885C61.2645 46.5507 48.2095 60.3484 31.6473 60.8065Z'
						fill='url(#paint0_linear_18_236)'
					/>
					<defs>
						<linearGradient
							id='paint0_linear_18_236'
							x1='0.818155'
							y1='0.818687'
							x2='2.47696'
							y2='60.7958'
							gradientUnits='userSpaceOnUse'
						>
							<stop stop-color='#F791ED' />
							<stop offset='1' stop-color='#91558B' />
						</linearGradient>
					</defs>
				</svg>
			</li>
			<li>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='46'
					height='33'
					viewBox='0 0 46 46'
					fill='none'
				>
					<path
						d='M22.4999 45.9452C10.0736 45.915 0.0244772 35.8169 0.0546872 23.3905C0.0848971 10.9642 10.183 0.91509 22.6093 0.9453C35.0357 0.97551 45.0848 11.0736 45.0546 23.4999C45.0243 35.9263 34.9263 45.9754 22.4999 45.9452Z'
						fill='url(#paint0_linear_18_224)'
					/>
					<defs>
						<linearGradient
							id='paint0_linear_18_224'
							x1='45.0546'
							y1='23.4999'
							x2='0.0546872'
							y2='23.3905'
							gradientUnits='userSpaceOnUse'
						>
							<stop stop-color='#1A652F' />
							<stop offset='1' stop-color='#34CB5E' />
						</linearGradient>
					</defs>
				</svg>
			</li>
			<li>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='98'
					height='43'
					viewBox='0 0 98 54'
					fill='none'
				>
					<path
						d='M26.2618 3.91925C38.6882 3.8745 48.798 13.9117 48.8427 26.3381C48.8875 38.7644 38.8503 48.8742 26.4239 48.919C13.9976 48.9637 3.88779 38.9265 3.84303 26.5001C3.79828 14.0738 13.8355 3.96401 26.2618 3.91925Z'
						fill='url(#paint0_linear_18_219)'
					/>
					<path
						d='M71.4999 3.91925C83.9262 3.8745 94.036 13.9117 94.0808 26.3381C94.1255 38.7644 84.0883 48.8742 71.662 48.919C59.2356 48.9637 49.1258 38.9265 49.0811 26.5001C49.0363 14.0738 59.0736 3.96401 71.4999 3.91925Z'
						fill='url(#paint1_linear_18_219)'
					/>
					<defs>
						<linearGradient
							id='paint0_linear_18_219'
							x1='3.84303'
							y1='26.5001'
							x2='48.8427'
							y2='26.3381'
							gradientUnits='userSpaceOnUse'
						>
							<stop stop-color='#1A652F' />
							<stop offset='1' stop-color='#34CB5E' />
						</linearGradient>
						<linearGradient
							id='paint1_linear_18_219'
							x1='49.0811'
							y1='26.5001'
							x2='94.0808'
							y2='26.3381'
							gradientUnits='userSpaceOnUse'
						>
							<stop stop-color='#1A652F' />
							<stop offset='1' stop-color='#34CB5E' />
						</linearGradient>
					</defs>
				</svg>
			</li>
			<li>
				<div>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='46'
						height='33'
						viewBox='0 0 46 46'
						fill='none'
					>
						<path
							d='M45.2985 23.1031C45.1314 35.5284 34.9233 45.4656 22.498 45.2985C10.0727 45.1314 0.135493 34.9232 0.302603 22.498C0.469714 10.0727 10.6779 0.13547 23.1032 0.30258C35.5284 0.469691 45.4656 10.6778 45.2985 23.1031Z'
							fill='url(#paint0_linear_18_223)'
						/>
						<defs>
							<linearGradient
								id='paint0_linear_18_223'
								x1='-37.7937'
								y1='0.30258'
								x2='-38.3988'
								y2='45.2985'
								gradientUnits='userSpaceOnUse'
							>
								<stop stop-color='#1A652F' />
								<stop offset='1' stop-color='#34CB5E' />
							</linearGradient>
						</defs>
					</svg>
				</div>
			</li>
			<li>{children}</li>

			<li>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='148'
					height='43'
					viewBox='0 0 148 63'
					fill='none'
				>
					<path
						d='M26.2618 8.91925C38.6882 8.8745 48.798 18.9117 48.8427 31.3381C48.8875 43.7644 38.8503 53.8742 26.4239 53.919C13.9976 53.9637 3.88779 43.9265 3.84303 31.5001C3.79828 19.0738 13.8355 8.96401 26.2618 8.91925Z'
						fill='#FFB0F7'
					/>
					<path
						d='M71.4999 8.91925C83.9262 8.8745 94.036 18.9117 94.0808 31.3381C94.1255 43.7644 84.0883 53.8742 71.662 53.919C59.2356 53.9637 49.1258 43.9265 49.0811 31.5001C49.0363 19.0738 59.0736 8.96401 71.4999 8.91925Z'
						fill='#F791ED'
					/>
					<path
						d='M116.5 8.91925C128.926 8.8745 139.036 18.9117 139.081 31.3381C139.126 43.7644 129.088 53.8742 116.662 53.919C104.236 53.9637 94.1258 43.9265 94.0811 31.5001C94.0363 19.0738 104.074 8.96401 116.5 8.91925Z'
						fill='#E97FDE'
					/>
				</svg>
			</li>
			<li>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='148'
					height='43'
					viewBox='0 0 148 63'
					fill='none'
				>
					<path
						d='M26.2618 8.91925C38.6882 8.8745 48.798 18.9117 48.8427 31.3381C48.8875 43.7644 38.8503 53.8742 26.4239 53.919C13.9976 53.9637 3.88779 43.9265 3.84303 31.5001C3.79828 19.0738 13.8355 8.96401 26.2618 8.91925Z'
						fill='#12BD42'
					/>
					<path
						d='M71.4999 8.91925C83.9262 8.8745 94.036 18.9117 94.0808 31.3381C94.1255 43.7644 84.0883 53.8742 71.662 53.919C59.2356 53.9637 49.1258 43.9265 49.0811 31.5001C49.0363 19.0738 59.0736 8.96401 71.4999 8.91925Z'
						fill='#12BD42'
					/>
					<path
						d='M116.5 8.91925C128.926 8.8745 139.036 18.9117 139.081 31.3381C139.126 43.7644 129.088 53.8742 116.662 53.919C104.236 53.9637 94.1258 43.9265 94.0811 31.5001C94.0363 19.0738 104.074 8.96401 116.5 8.91925Z'
						fill='#0FA93A'
					/>
				</svg>
			</li>
		</ul>
	);
};

Homefooter.propTypes = {
	className: PropTypes.string,
};

export default Homefooter;
