import { getMovieByName } from 'services/api';
import { SearchBar } from 'components/Searchbar/Searchbar';
import { Loader } from 'components/Loader/Loader';
import { useState, useEffect } from 'react';
import { useSearchParams, useLocation, Link } from 'react-router-dom';

export const Movies = () => {
  const location = useLocation();
  const [movies, setMovies] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const movie = searchParams.get('query') ?? '';

  const changeQuery = query => {
    const searchMovie = query !== '' ? { query } : {};
    setSearchParams(searchMovie);
  };

  useEffect(() => {
    if (movie === '') {
      return;
    }
    async function searchMovie() {
      try {
        setIsLoading(true);
        const movies = await getMovieByName(movie);
        if (movies.length > 0) {
          setMovies(
            movies.map(movie => ({
              id: movie.id,
              title: movie.original_title,
              name: movie.title,
              overview: movie.overview,
              release: movie.release_date,
            }))
          );
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error.message);
        setIsLoading(false);
      }
    }

    searchMovie();
  }, [movie]);

  return (
    <>
      <div>
        <SearchBar onSubmit={changeQuery} />

        {movies.length > 0 && (
          <ul>
            {movies?.map(movie => (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                  {movie.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      {isLoading && <Loader />}
    </>
  );
};
