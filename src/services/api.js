import axios from 'axios';

const API_KEY = 'fa9433e46ed4abfaeb75bcf31f473feb';
const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';
axios.defaults.baseURL = `https://api.themoviedb.org/3/`;
axios.defaults.params = { api_key: API_KEY };

export const getTrendingMovies = async () => {
  try {
    const response = await axios.get(`trending/all/day`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Sorry, something happened wrong');
    return [];
  }
};

export const getMovieByName = async query => {
  try {
    const response = await axios.get(`/search/movie`, {
      params: {
        api_key: API_KEY,
        query,
        page: 1,
        include_adult: false,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Sorry, something happened wrong');
    return [];
  }
};

export const getMovieDetails = async movieId => {
  try {
    const { data } = await axios.get(`/movie/${movieId}`, {
      params: {
        api_key: API_KEY,
      },
    });
    const {
      title,
      poster_path: posterPath,
      release_date: releaseDate,
      genres,
      overview,
      vote_average: voteAverage,
    } = data;
    return { title, posterPath, releaseDate, genres, overview, voteAverage };
  } catch (error) {
    console.error('Sorry, something happened wrong');
    return [];
  }
};

export function getPoster(posterPath) {
  if (posterPath) return `${BASE_IMG_URL}/${posterPath}`;
  return 'https://via.placeholder.com/250x375/c4a9c4/969696.jpg';
}

export function getDate(date) {
  if (date) {
    const year = date.split('-')[0];
    return year;
  }
}

export const getCast = async movieId => {
  try {
    const { data } = await axios.get(`/movie/${movieId}/credits`, {
      params: {
        api_key: API_KEY,
      },
    });

    return data.cast;
  } catch (error) {
    console.error('Sorry, something happened wrong');
    return [];
  }
};

export const getMovieReview = async movieId => {
  try {
    const { data } = await axios.get(`/movie/${movieId}/reviews`, {
      params: {
        api_key: API_KEY,
      },
    });

    return data.results;
  } catch (error) {
    console.error('Sorry, something happened wrong');
    return [];
  }
};
