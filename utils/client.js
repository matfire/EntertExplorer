import axios from 'axios'


const KEY = "2005b3a7fc676c3bd69383469a281eff"

const MOVIE_EXTRA = encodeURIComponent("videos,images,reviews,recommendations,similar,credits")

const api = axios.create({baseURL:"https://api.themoviedb.org/3"})

let language = "en-US"

const getPopular =  async(page = 1) => {
	const res = await api.get(`/movie/popular?api_key=${KEY}&language=${language}&page=${page}`)
	if (res.status < 400 && res.data.results.length > 0) {
		return res.data.results
	}
}

const getDetails = async(id) => {
	const res = await api.get(`/movie/${id}?api_key=${KEY}&language=${language}&append_to_response=${MOVIE_EXTRA}`)
	if (res.status < 400) {
		return res.data
	}
}

const getImage = (path, size) => {
	return `https://image.tmdb.org/t/p/${size}${path}`
}

export {getPopular, getImage, getDetails}