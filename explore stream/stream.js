const apiUrl = 'https://imdb188.p.rapidapi.com/api/v1/getWhatsStreaming?country=US';
const requestOptions = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '093e554c47mshde5c1d8c23a4882p18de62jsn2d9d305617a7',
		'x-rapidapi-host': 'imdb188.p.rapidapi.com'
	}
};

let isLoaded = true;

async function fetchStreamingProviders() {
    try {
        const response = await fetch(apiUrl, requestOptions);
        const data = await response.json();
        const providers = data.data;

        console.log("Streaming Providers Data:", providers);

        const providerListContainer = document.getElementById('stream-provider-list');
        providerListContainer.innerHTML = ''; 

        providers.forEach(provider => {
            const providerDiv = document.createElement('div');
            providerDiv.classList.add('provider-item');

            const providerHeading = document.createElement('h2');
            providerHeading.textContent = provider.providerName;
            providerHeading.style.fontSize = "25px";
            providerDiv.appendChild(providerHeading);

            providerListContainer.appendChild(providerDiv);

            providerHeading.onclick = function() {
                displayProviderMovies(provider);  
            };
        });
    } catch (error) {
        console.log('Error fetching streaming providers:', error);
    }
}

function displayProviderMovies(provider) {
    const movieCardContainer = document.getElementById('movie-card-container');
    movieCardContainer.innerHTML = ''; 
    localStorage.setItem('currentProviderMovies', JSON.stringify(provider.edges));

    provider.edges.forEach(movie => {
        const card = document.createElement('div');
        card.classList.add('movie-card');

        const movieImg = document.createElement('img');
        movieImg.src = movie.title.primaryImage?.imageUrl || 'https://via.placeholder.com/150';
        movieImg.alt = `${movie.titleText?.text || 'Movie'} Poster`;
        movieImg.style.width = "150px";
        card.appendChild(movieImg);

        const movieTitle = document.createElement('h3');
        movieTitle.textContent = movie?.title?.titleText?.text || 'Unknown Title';
        card.appendChild(movieTitle);

        const movieRating = document.createElement('p');
        const ratingValue = movie?.title?.ratingsSummary?.aggregateRating || 'N/A';
        movieRating.innerHTML = `Rating: ${ratingValue} <span>&#9733;</span>`;
        card.appendChild(movieRating);

        const releaseYear = document.createElement('p');
        releaseYear.textContent = `Year: ${movie?.releaseYear?.year || 'Unknown'}`;
        card.appendChild(releaseYear);

        movieCardContainer.appendChild(card);
        
        card.addEventListener("click", () => {
            window.location.href = "explore_card.html";
            saveSelectedMovie(movie);
        });

        return card;
    });
}

fetchStreamingProviders();

function saveSelectedMovie(selectedMovie) {
    localStorage.setItem("selectedMovie", JSON.stringify(selectedMovie));
}

function loadMoviesFromStorage() {
    const savedMovies = JSON.parse(localStorage.getItem('currentProviderMovies'));
    if (isLoaded && savedMovies) {
        displayProviderMovies({ edges: savedMovies });
    } else {
        fetchStreamingProviders();
    }
}

loadMoviesFromStorage();