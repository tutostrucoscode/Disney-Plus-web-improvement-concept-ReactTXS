import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "0cc6128a10700524b54b1de31c360859";
const movieByGenreBaseURL=`${movieBaseUrl}/discover/movie?api_key=${api_key}`;

const getTrendingVideo = axios.get(movieBaseUrl + "/trending/all/day?api_key=" + api_key);
const getMovieByGenreId = (id:any) => axios.get(movieByGenreBaseURL+"&with_genres="+id)


export default {getTrendingVideo,getMovieByGenreId};