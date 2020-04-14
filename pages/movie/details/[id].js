import { useRouter } from 'next/router'
import { getDetails, getImage } from '../../../utils/client'
import GenreSpan from '../../../components/GenreSpan'
import VideoComponent from '../../../components/VideoComponent'

const MovieDetail = ({ movie }) => {

	const router = useRouter()

	return (
		<div className="bg-fixed bg-no-repeat bg-cover bg-center" style={{backgroundImage: `url(${getImage(movie.backdrop_path, "original")})`}}>
			<div className="w-full absolute z-0 bg-black opacity-50 bg-fixed bg-no-repeat bg-cover bg-center" style={{}}></div>
			<div className="flex flex-col movie-details">
				<div className="pt-6 flex pb-4 pl-6 pr-6 z-10">
					<img src={getImage(movie.poster_path, "w780")} className="h-auto w-1/5" />
					<div className="ml-3 flex flex-col">
						<span className="text-xl">{movie.title}</span>
						<div className="flex flex-row mt-3">
							<span className="mr-5">{movie.release_date}</span>
							{movie.genres.map((i) => <div key={i.id} className="ml-2 mr-2 cursor-pointer">
								<GenreSpan  id={i.id} name={i.name} />
							</div>)}
						</div>
						{movie.summary}
					</div>
				</div>
				<div className="flex flex-col z-10">
					<h3 className="self-center text-xl">Media</h3>
				</div>
			</div>
		</div>
	)
}

MovieDetail.getInitialProps = async (context) => {
	const { id } = context.query
	const movie = await getDetails(id)
	return { movie }
}

export default MovieDetail