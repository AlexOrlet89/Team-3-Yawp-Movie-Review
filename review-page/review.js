import { getMovieAndReviews, getMovies, createReview } from '../fetch-utils.js';
import { renderMovieDetail, renderReview } from '../render-utils.js';

const main = document.querySelector('main');
const reviewsSection = document.querySelector('#user-reviews');

const params = new URLSearchParams(window.location.search);
// const movies = await getMovies();
console.log(params);

window.addEventListener('load', async () => {
    
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

const form = document.getElementById('review-form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formInfo = new FormData(form);

    const review = {
        review: formInfo.get('review'),
        movie_id: params.get('id'),
    };
    await createReview(review);
    form.reset();

    location.reload();
});

