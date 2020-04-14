import Router from 'next/router'

const GenreSpan = ({name, id}) => {
	return (
		<span onClick={() => {
			Router.push(`/movie/genre/${id}`)
		}}>{name}</span>
	)
}

export default GenreSpan