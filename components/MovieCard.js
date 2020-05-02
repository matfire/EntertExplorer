import { getImage } from "../utils/client"
import Router from 'next/router'
import RatingCircle from "./RatingCircle"


const MovieCard = ({posterPath, id, rating}) => {
	return (
		<div className="shadow-lg relative cursor-pointer" onClick={() => {
			Router.push(`/movie/details/${id}`)
		}}>
			<div className="ml-2 mb-2 w-16 h-16 z-10 absolute bottom-0">
				<RatingCircle rating={rating} />
			</div>
			<div className="">
				<img src={getImage(posterPath, "w780")}/>
			</div>
		</div>
	)
}

export default MovieCard