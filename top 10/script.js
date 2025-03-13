const url = 'https://imdb188.p.rapidapi.com/api/v1/getWeekTop10';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'a06792ee76mshf55e49e4b1b9448p1c459fjsn3a029a0889fa',
		'x-rapidapi-host': 'imdb188.p.rapidapi.com'
	}
};

// Function to fetch and display Top 10 movies of the week
async function fetchTop10Movies() {
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        const res = result.data;
        console.log("Top 10 Movies Response Data:", res); // Log the full response to inspect

        const container = document.getElementById('top10-results');
        container.innerHTML = ''; // Clear any previous results

        res.forEach(movie => {
            const movieCard = createMovieCard(movie);
            container.appendChild(movieCard);
        });
    } catch (error) {
        console.error('Error fetching top 10 movies:', error);
    }
}

// Function to create a movie card
function createMovieCard(movie) {
    const card = document.createElement('div');
    card.classList.add('movie-card');

    // Poster Image
    const img = document.createElement('img');
    img.src = movie.primaryImage.imageUrl || 'https://via.placeholder.com/150'; // Default image if no poster
    img.alt = `${movie.title || 'Movie'} Poster`;
    // img.style.width="150px"
    card.appendChild(img);

    // Title
    const title = document.createElement('h3');
    title.textContent = movie.titleText.text;
    card.appendChild(title);

    // Rating
    const rating = document.createElement('p');
rating.innerHTML = `Rating: ${movie.ratingsSummary.aggregateRating || 'N/A'} <span style="color: gold;">&#9733;</span>`;
card.appendChild(rating);

    // Add click functionality to show details on click
    card.addEventListener("click", () => {
        addToCart(movie);
        window.location.href="top_card.html"
    })

    return card;
}
// Call the fetch function when the page loads
fetchTop10Movies();

function addToCart(item) {
    localStorage.setItem("items", JSON.stringify(item))
    let data = JSON.parse(localStorage.getItem("items"))
    // data.push(item)
    // alert("item is added to cart")
    
}