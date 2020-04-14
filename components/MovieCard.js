import { getImage } from "../utils/client"
import Router from 'next/router'


const MovieCard = ({posterPath, id}) => {
	return (
		<div className="shadow-lg moviecard" onClick={() => {
			Router.push(`/movie/details/${id}`)
		}}>
			<img src={getImage(posterPath, "w780")}/>
		</div>
	)
}

export default MovieCard