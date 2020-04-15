import Plyr from 'react-plyr';

const VideoComponent = ({id, videoId, name, site}) => {
	return (
	<div>
		<Plyr
			type={site.toLowerCase()}
			videoId={videoId} />
	</div>
	)
}

export default VideoComponent