import { getPopular } from "../utils/client"
import MovieCard from "../components/MovieCard"

const index = ({trending}) => {
	return (
		<div className="mx-auto mt-8 mb-4">
			<div className="mb-5 ">
				<h3 className="text-white text-3xl text-center">Trending Movies</h3>
			</div>
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 ml-2 mr-2">
				{trending.map((item) => <MovieCard key={item.id} posterPath={item.poster_path} id={item.id} rating={item.vote_average}  />)}
			</div>
		</div>
	)
}

index.getInitialProps = async() => {
	let trending = await getPopular()
	return ({
		trending
	})
}


export default index