import { renderMovie } from '../render-utils.js';

const test = QUnit.test;

test('renderMovie should create a div with a class of movie and render the title, image and anchor tag to click', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<a href="/review-page/?id=1"><div class="movie"><p class="movie-title">Episode IV - A New Hope</p><img src="/assets/movie1.jpg" class="movie-image"></div></a>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const movie1 = {
        id: '1',
        title: 'Episode IV - A New Hope',
        image: 'movie1',
    };

    const actual = renderMovie(movie1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
