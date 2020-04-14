import Plyr from 'react-plyr';

const VideoComponent = ({id, key, name, site}) => {
	return (
	<div>
		<Plyr
			type={site.toLowerCase()}
			videoId={key} />
	</div>
	)
}

export default VideoComponent