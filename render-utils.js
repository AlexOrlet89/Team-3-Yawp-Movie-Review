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
    a.href = `./review-page/?id=${movie.id}`;

    containerDiv.append(titleP, img);
    a.append(containerDiv);

    return a;
}

export function renderMovieDetail(movie) {
    const sectionDetail = document.createElement('section');
    sectionDetail.classList.add('detail-section');

    const h1 = document.createElement('h1');
    h1.classList.add('title');
    h1.textContent = movie.title;

    const img = document.createElement('img');
    img.classList.add('movie-image');
    img.src = `/assets/${movie.image}.jpg`;

    const detailsContainer = document.createElement('div');
    detailsContainer.classList.add('details-container');
    const p1 = document.createElement('p');
    p1.textContent = `(${movie.year}) Directed by ${movie.director}`;

    const p2 = document.createElement('p');
    p2.textContent = movie.description;

    detailsContainer.append(p1, p2);
    sectionDetail.append(h1, img, detailsContainer);
    return sectionDetail;
}
