import { checkAuth, logout, getMovies } from '../fetch-utils.js';
import { renderMovie } from '../render-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');
const moviesContainer = document.getElementById('movies-list');

logoutButton.addEventListener('click', () => {
    logout();
});

window.addEventListener('load', async () => {
    displayMovies();
    
});

async function displayMovies() {
    const movies = await getMovies();
    moviesContainer.textContent = '';
    for (let movie of movies) {
        const a = renderMovie(movie);
        moviesContainer.append(a);
    }
}