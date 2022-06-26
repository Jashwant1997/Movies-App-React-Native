import axios from 'axios'

//data API url
const APIurl = 'https://api.themoviedb.org/3';

//data API key
const APIkey = 'api_key=750ec35a0e73465e3af6da9bb36c6dd3';

//to get popular movies
export const getPopularMovies = async () => {
    const res = await axios.get(
        `${APIurl}/movie/popular?${APIkey}`
    );
    return res.data.results;
}

//to get upcoming movies
export const getUpcomingMovies = async () => {
    const res = await axios.get(
        `${APIurl}/movie/upcoming?${APIkey}`
    );
    return res.data.results;
}

//to get popular TV Shows
export const getPopularTv = async () => {
    const res = await axios.get(
      `${APIurl}/tv/popular?${APIkey}`
      );
    return res.data.results;
  }
  
//to get family movies
export const getFamilyMovies = async () => {
    const res = await axios.get(
        `${APIurl}/discover/movie?${APIkey}&with_genres=10751`
    );
    return res.data.results;
}

//to get documentaries
export const getDocumentaries = async () => {
    const res = await axios.get(
        `${APIurl}/discover/movie?${APIkey}&with_genres=99`
    );
    return res.data.results;
}

//to get movie detail
export const getMovieDetail = async (id) => {
    const res = await axios.get(
        `${APIurl}/movie/${id}?${APIkey}`
    );
    return res.data;
}

//to search Movie & Tv
export const searchMovieTv = async (query, type) => {
    const res = await axios.get(
        `${APIurl}/search/${type}?${APIkey}&query=${query}`
    );
    return res.data.results;
}