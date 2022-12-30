import { getMovieDetails, getPoster, getDate } from '../../services/api';
import { useState, useEffect } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import {
  MovieDetailsWrap,
  GoBackLink,
  MainMovieInfo,
  TitleMovie,
  Overview,
  CastAndReviewWrap,
  CastLink,
  ReviewsLink,
} from './MovieDetails.styled';

const MovieDetails = () => {
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

  const { title, posterPath, releaseDate, genres, overview, voteAverage } =
    movieInfo;

  return (
    <MovieDetailsWrap>
      <GoBackLink to={backLink}>Back</GoBackLink>

      <MainMovieInfo>
        <img src={getPoster(posterPath)} alt={title} width="250" />

        <div>
          <TitleMovie>
            Title: {title}
            <span> ({getDate(releaseDate)})</span>
          </TitleMovie>
          <Overview>Overview: {overview}</Overview>
          <p>User Score: {Math.round(voteAverage * 10)}% </p>
          {genres ? (
            <p>Genre: {genres.map(genre => genre.name).join(', ')}</p>
          ) : (
            <p>Genre is undefined</p>
          )}
        </div>
      </MainMovieInfo>

      <CastAndReviewWrap>
        <CastLink to={'cast'} state={{ from: backLink }}>
          <p>Cast</p>
        </CastLink>
        <ReviewsLink to={'reviews'} state={{ from: backLink }}>
          <p>Reviews</p>
        </ReviewsLink>
      </CastAndReviewWrap>
      <Outlet />
    </MovieDetailsWrap>
  );
};

export default MovieDetails;
