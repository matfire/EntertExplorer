import { useRouter } from 'next/router'
import { getDetails, getImage } from '../../../utils/client'
import GenreSpan from '../../../components/GenreSpan'
import VideoComponent from '../../../components/VideoComponent'
import ReviewContainer from '../../../components/ReviewContainer'

const MovieDetail = ({ movie }) => {

	const router = useRouter()

	return (
		<div>
			<div className="movie-details-background" style={{ background: `url(${getImage(movie.backdrop_path, "original")}) no-repeat center top fixed` }}>
				<div className="w-full h-full absolute z-0 bg-black opacity-50 bg-fixed bg-no-repeat bg-cover bg-center"></div>
			</div>
			<div className="flex flex-col movie-details mt-10">
				<div className="pt-6 flex pb-4 pl-6 pr-6 z-10">
					<img src={getImage(movie.poster_path, "w780")} className="w-full md:w-1/5" style={{ height: "100%" }} />
					<div className="ml-3 flex flex-col">
						<span className="text-xl">{movie.title}</span>
						<div className="flex flex-row mt-3">
							<span className="mr-5">{movie.release_date}</span>
							{movie.genres.map((i) => <div key={i.id} className="ml-2 mr-2 cursor-pointer">
								<GenreSpan id={i.id} name={i.name} />
							</div>)}
						</div>
						<div className="mt-2">
							{movie.overview}
						</div>
					</div>
				</div>
				<div className="flex flex-col z-10">
					<h3 className="self-center text-xl">Media</h3>
					<div className="mt-5 flex justify-between items-center ml-2 mr-2">

						{movie.videos.results.map((e, index) => index < 2 &&
							<div>
								<VideoComponent
									key={e.key} videoId={e.key} id={e.id} name={e.name} site={e.site}
								/>
							</div>
						)}
					</div>
					<div className="grid grid-cols-3 gap-4 self-center flex mt-5">

					</div>
					<div className="self-center mt-3">
						<button className="bg-blue-dark hover:bg-blue-lighter font-bold py-2 px-4 rounded" onClick={() => {
							router.push(`/extra/media/${router.query.id}`)
						}}>More</button>
					</div>
				</div>
				{
					movie.reviews.results.length > 0 && <div className="z-10 mt-8 flex flex-col">
					<h3 className="self-center text-xl">Reviews</h3>
					<div className="grid grid-cols-1 gap-4 self-center flex mt-5">
						{movie.reviews.results.map((r) =>
							<ReviewContainer review={r} key={r.id} />)}
					</div>
				</div>
				}
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