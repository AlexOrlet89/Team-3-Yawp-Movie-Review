export function renderMovie(movie) {
    const containerDiv = document.createElement('div');
    containerDiv.classList.add('movie');
    
    const titleP = document.createElement('p');
    titleP.textContent = movie.title;
    titleP.classList.add('movie-title');

    const img = document.createElement('img');
    img.src = `/assets/${movie.image}.jpg`;
    img.classList.add('movie-image');

    const a = document.createElement('a');
    a.href = `./movies-page/?id=${movie.id}`;

    containerDiv.append(titleP, img);
    a.append(containerDiv);

    return a;
}