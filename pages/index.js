import { getPopular } from "../utils/client"
import MovieCard from "../components/MovieCard"

const index = ({trending}) => {
	return (
		<div className="container mx-auto mt-8 mb-4">
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{trending.map((item) => <MovieCard key={item.id} posterPath={item.poster_path} id={item.id}  />)}
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