
import main_header_template from './components/main/header/main_header_template';

import { getMovie, getSearchingMovie, getTrendingMovies } from './js/API/api';

// Test!  for delete !!!!!

const fetchTrendingMovies = async () => {
  const { data } = await getTrendingMovies();
  // console.log(data);
};

const fetchMovie = async id => {
  const { data } = await getMovie(id);
  // console.log(data);
};

const fetchSearchingMovie = async search => {
  const { data } = await getSearchingMovie(search);
  // console.log(data);
};

fetchTrendingMovies();
fetchMovie(675353);
fetchSearchingMovie(`Harry Potter and the Philosopher's Stone`);

// _______________________________________________________________________________


document
  .querySelector('.container')
  .insertAdjacentHTML('afterbegin', main_header_template());

