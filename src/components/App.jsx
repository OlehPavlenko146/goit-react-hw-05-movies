import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Layout } from './Layout/Layout';
import { Movies } from '../pages/Movies/Movies';
import { MovieDetails } from '../pages/MovieDetails/MovieDetails';
// import { Cast } from '../components/Cast/Cast';
// import { Reviews } from '../components/Reviews/Reviews';
import { GlobalStyle } from './GlobalStyles';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
        </Route>
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />} />

        {/* <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<div>Not found</div>} />  */}
      </Routes>
      <GlobalStyle />
    </div>
  );
};
