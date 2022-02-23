import { getMovieAndReviews, getMovies } from '../fetch-utils.js';
import { renderMovieDetail } from '../render-utils.js';

const main = document.querySelector('main');

window.addEventListener('load', async () => {

    const params = new URLSearchParams(window.location.search);
    // const movies = await getMovies();
    console.log(params);
    const movie = await getMovieAndReviews(params.get('id'));
    console.log(movie);

    main.innerHTML = '';
    const detailSection = renderMovieDetail(movie);
    main.append(detailSection);

});