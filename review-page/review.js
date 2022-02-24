import { getMovieAndReviews, getMovies } from '../fetch-utils.js';
import { renderMovieDetail, renderReview } from '../render-utils.js';

const main = document.querySelector('main');
const reviewsSection = document.querySelector('#user-reviews');

window.addEventListener('load', async () => {

    const params = new URLSearchParams(window.location.search);
    // const movies = await getMovies();
    console.log(params);
    const movie = await getMovieAndReviews(params.get('id'));
    console.log(movie.reviews);

    // main.innerHTML = '';
    const detailSection = renderMovieDetail(movie);
    main.prepend(detailSection);
    
    for (let review of movie.reviews) {
        const reviewEl = renderReview(review);
        console.log(review, reviewEl);
        reviewsSection.append(reviewEl);
    }



});