import { getMovieDetails } from '../../services/api';
import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

export const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  useEffect(() => {
    async function movieDetails() {
      try {
        const movieInfo = await getMovieDetails(movieId);
        setMovieInfo(movieInfo);
      } catch (error) {
        console.log(error.message);
      }
    }
    movieDetails();
  }, [movieId]);

  function getDate(date) {
    if (date) {
      const year = date.split('-')[0];
      return year;
    }
  }

  const { title, posterPath, releaseDate, genres, overview, voteAverage } =
    movieInfo;

  return (
    <div>
      <Link to={backLink}>Go back</Link>

      <div>
        <p>
          Title: {title}
          <span>({getDate(releaseDate)})</span>
        </p>
        <img src={posterPath} alt={title} width="250" />
        <div>
          <p>Overview: {overview}</p>
          <p>User Score: {Math.round(voteAverage * 10)}% </p>
          {overview ? (
            <p>Genre: {genres.map(genre => genre.name).join(', ')}</p>
          ) : (
            <p>Genre is undefined</p>
          )}
        </div>
      </div>

      <div>
        <Link to={'cast'} state={{ from: backLink }}>
          <p>Cast</p>
        </Link>
        <Link to={'reviews'} state={{ from: backLink }}>
          <p>Reviews</p>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};
