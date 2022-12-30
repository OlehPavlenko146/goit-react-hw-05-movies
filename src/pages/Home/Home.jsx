import { getTrendingMovies } from '../../services/api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HomeTitle, ListWrap, ListItem } from './Home.styled';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      try {
        const trendingMovies = await getTrendingMovies();
        if (trendingMovies.length > 0) {
          setTrendingMovies(
            trendingMovies.map(trendingMovie => ({
              id: trendingMovie.id,
              title: trendingMovie.original_title,
              name: trendingMovie.name,
            }))
          );
        }
      } catch (error) {
        console.log(error.message);
      }
    }
    getMovies();
  }, []);

  return (
    <main>
      <HomeTitle>Trending Movies</HomeTitle>
      <ListWrap>
        {trendingMovies?.map(trendingMovie => (
          <ListItem key={trendingMovie.id}>
            <Link to={`/movies/${trendingMovie.id}`}>
              {trendingMovie.title || trendingMovie.name}
            </Link>
          </ListItem>
        ))}
      </ListWrap>
    </main>
  );
};

export default Home;
