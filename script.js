
// ✅ Global Data Storage for All Movies
let allData = [];
let isSearching = false;

// ✅ API URLs and Options
const url =  'https://imdb188.p.rapidapi.com/api/v1/getWeekTop10';
const url1 ='https://imdb188.p.rapidapi.com/api/v1/getFanFavorites?country=US';
const apiUrl =  'https://imdb188.p.rapidapi.com/api/v1/getWhatsStreaming?country=US';
const url3 =   'https://imdb188.p.rapidapi.com/api/v1/getBornOn?month=01&day=01';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '7788a6def2msh544c1564f124410p152b71jsndc3ad77daab5',
		'x-rapidapi-host': 'imdb188.p.rapidapi.com'
	}
};


// ✅ Fetch Top 10 Movies
async function fetchTop10Movies() {
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        const movies = result.data || [];
        console.log("Top 10 Movies Data:", movies);

        // ✅ Push to allData for search functionality
        allData.push(...movies);

        const container = document.getElementById('top10-results');
        container.innerHTML = ''; // Clear any previous results

        movies.forEach(movie => {
            const movieCard = createMovieCard(movie);
            container.appendChild(movieCard);
        });
    } catch (error) {
        console.error('Error fetching top 10 movies:', error);
    }
}

// ✅ Fetch Fan Favorites
async function fetchFanFavorites() {
    try {
        const response = await fetch(url1, options);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        const res = result.data?.list || [];
        
        console.log("Fan Favorites Response Data:", res);

        // ✅ Push to allData
        allData.push(...res);

        const container_fan = document.getElementById('fan-favorites-results');
        container_fan.innerHTML = ''; // Clear previous results

        res.forEach(movie_fan => {
            const movieCard_fan = createFanFavoriteCard(movie_fan);
            container_fan.appendChild(movieCard_fan);
        });
    } catch (error) {
        console.error('Error fetching fan favorites:', error);
    }
}

// ✅ Fetch Streaming Providers
async function fetchStreamingProviders() {
    try {
        const response = await fetch(apiUrl, options);
        const data = await response.json();
        const providers = data.data || [];
        console.log("Streaming Providers Data:", providers);

        providers.forEach(provider => {
            allData.push(...provider.edges.map(edge => edge.title)); // ✅ Add movies from providers
        });

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

// ✅ Fetch Born on This Day Data
async function GetBorn() {
    try {
        const response = await fetch(url3, options);
        const result = await response.json();
        const dataList = result?.data?.list || [];

        console.log("Born on This Day Data:", dataList);
        
        // ✅ Push to allData
        allData.push(...dataList);

        let Cardscontainer = document.getElementById("Cardscontainer");
        Cardscontainer.innerHTML = '';

        dataList.forEach(person => {
            let Borncard = createBornCard(person);
            Cardscontainer.appendChild(Borncard);
        });
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// ✅ Create Movie Card
function createMovieCard(movie) {
    const card = document.createElement('div');
    card.classList.add('movie-card');

    const img = document.createElement('img');
    img.src = movie?.primaryImage?.imageUrl || 'https://via.placeholder.com/150';
    img.alt = `${movie?.titleText?.text || 'Movie'} Poster`;
    card.appendChild(img);

    const title = document.createElement('h3');
    title.textContent = movie?.titleText?.text || "N/A";
    card.appendChild(title);

    const rating = document.createElement('p');
    rating.innerHTML = `Rating: ${movie?.ratingsSummary?.aggregateRating || 'N/A'} <span style="color: gold;">&#9733;</span>`;
    card.appendChild(rating);

    card.addEventListener("click", () => {
        addToStorage(movie);
        window.location.href = "top_card.html"; 
    });

    return card;
}

// ✅ Create Fan Favorite Card
function createFanFavoriteCard(movie_fan) {
    const card_fan = document.createElement('div');
    card_fan.classList.add('movie-card');

    const img = document.createElement('img');
    img.src = movie_fan.primaryImage?.imageUrl || 'https://via.placeholder.com/150';
    img.alt = `${movie_fan.titleText?.text || 'Movie'} Poster`;
    card_fan.appendChild(img);

    const title = document.createElement('h3');
    title.textContent = movie_fan.titleText?.text || 'N/A';
    card_fan.appendChild(title);

    const rating = document.createElement('p');
    rating.innerHTML = `Rating: ${movie_fan.ratingsSummary?.aggregateRating || 'N/A'} <span style="color: gold;">&#9733;</span>`;
    card_fan.appendChild(rating);

    card_fan.addEventListener("click", () => {
        localStorage.setItem("selectedItem", JSON.stringify(movie_fan));
        window.location.href = "navigate.html";
    });

    return card_fan;
}

// ✅ Create Born Card
function createBornCard(person) {
    let card = document.createElement("div");
    card.classList.add('Borncard');

    let image = document.createElement("img");
    image.src = person.primaryImage?.imageUrl || 'https://via.placeholder.com/150';
    card.appendChild(image);

    let name = document.createElement("h3");
    name.textContent = person.birthName?.text || "No Name Available";
    card.appendChild(name);

    let profession = document.createElement("p");
    profession.textContent = person.primaryProfessions?.map(x => x.category.text).join(", ") || "Unknown Profession";
    card.appendChild(profession);

    card.addEventListener("click", () => {
        localStorage.setItem("selectedPerson", JSON.stringify(person));
        window.location.href = "born_card.html";
    });

    return card;
}

// ✅ Add to Storage
function addToStorage(item) {
    localStorage.setItem("selectedItem", JSON.stringify(item));
}

// ✅ Display Movies from Selected Streaming Provider
function displayProviderMovies(provider) {
    const providerMovies = provider.edges.map(edge => edge.title) || [];

    const providerMoviesContainer = document.getElementById('stream-provider-list');
    providerMoviesContainer.innerHTML = ''; // Clear previous results

    if (providerMovies.length === 0) {
        providerMoviesContainer.innerHTML = '<p>No movies available from this provider.</p>';
        return;
    }

    providerMovies.forEach(movie => {
        const movieCard = createMovieCard(movie);
        providerMoviesContainer.appendChild(movieCard);
    });
}

// ✅ Search Functionality - Corrected
function search() {
    const inputTag = document.getElementById('search').value.trim().toLowerCase();

    if (inputTag === '') {
        isSearching = false;
        displayMovieSections();
        return;
    }

    const filteredMovies = allData.filter(movie => {
        if (movie?.titleText?.text) {
            return movie.titleText.text.toLowerCase().includes(inputTag);
        }
        return false;
    });

    const searchResultsContainer = document.getElementById('search-results');
    searchResultsContainer.innerHTML = '';

    if (filteredMovies.length === 0) {
        searchResultsContainer.innerHTML = '<p>No movies found matching your search.</p>';
        return;
    }

    let uniqueMovies = [];
    filteredMovies.forEach(movie => {
        if (!uniqueMovies.some(existingMovie => existingMovie.titleText?.text === movie.titleText?.text)) {
            uniqueMovies.push(movie);
        }
    });

    hideAllMovieContainers();
    uniqueMovies.forEach(movie => {
        const movieCard = createMovieCard(movie);
        searchResultsContainer.appendChild(movieCard);
    });

    isSearching = true;
}

// ✅ Hide All Sections on Search
function hideAllMovieContainers() {
    const containersToHide = [
        'top10-results', 
        'fan-favorites-results', 
        'stream-provider-list', 
        'Cardscontainer',
        'Top10',
        'Fan_Favourites',
        'Explore',
        'Born_Details'
    ];

    containersToHide.forEach(containerId => {
        const container = document.getElementById(containerId);
        if (container) {
            container.style.display = 'none';
        }
    });

    document.getElementById('search-results').style.display = 'block';
}

// ✅ Display All Sections When Search Clears
function displayMovieSections() {
    if (isSearching) return;

    document.getElementById('top10-results').style.display = 'block';
    document.getElementById('fan-favorites-results').style.display = 'block';
    document.getElementById('stream-provider-list').style.display = 'block';
    document.getElementById('Cardscontainer').style.display = 'flex';
    document.getElementById('search-results').style.display = 'none';

    document.getElementById("Top10").style.display = "block";
    document.getElementById("Fan_Favourites").style.display = "block";
    document.getElementById("Explore").style.display = "block";
    document.getElementById("Born_Details").style.display = "block";
}

// ✅ Initialize All Sections
async function initializePage() {
    await fetchTop10Movies();
    await fetchFanFavorites();
    await fetchStreamingProviders();
    await GetBorn();
    displayMovieSections();
}

// ✅ Call initializePage to Load Everything Correctly
initializePage();
