
// allData=[]


// const url = 'https://imdb188.p.rapidapi.com/api/v1/getWeekTop10';
// const options = {
//     method: 'GET',
//     headers: {
//         'x-rapidapi-key': 'badd91c5eemsh13f57c6054329c0p1d73fejsn7769a144a392',
//         'x-rapidapi-host': 'imdb188.p.rapidapi.com'
//     }
// };

// // Function to fetch and display Top 10 movies of the week
// async function fetchTop10Movies() {
//     try {
//         const response = await fetch(url, options);
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const result = await response.json();
//         console.log("Full API Response:", result); // Log to check structure

//         // Check if result.data exists and is an array
//         if (!result.data || !Array.isArray(result.data)) {
//             throw new Error("Unexpected API response format: 'data' is missing or not an array.");
//         }

//         const movies = result.data;
//         console.log("Top 10 Movies Data:", movies);

//         const container = document.getElementById('top10-results');
//         container.innerHTML = ''; // Clear any previous results

//         movies.forEach(movie => {
//             const movieCard = createMovieCard(movie);
//             container.appendChild(movieCard);
//         });
//     } catch (error) {
//         console.error('Error fetching top 10 movies:', error);
//     }
// }

// // Function to create a movie card
// function createMovieCard(movie) {
//     const card = document.createElement('div');
//     card.classList.add('movie-card');

//     // Poster Image
//     const img = document.createElement('img');
//     img.src = movie?.primaryImage?.imageUrl || 'https://via.placeholder.com/150';
//     img.alt = `${movie?.titleText?.text || 'Movie'} Poster`;
//     card.appendChild(img);

//     // Title
//     const title = document.createElement('h3');
//     title.textContent = movie?.titleText?.text || "N/A";
//     card.appendChild(title);

//     // Rating
//     const rating = document.createElement('p');
//     rating.innerHTML = `Rating: ${movie?.ratingsSummary?.aggregateRating || 'N/A'} <span style="color: gold;">&#9733;</span>`;
//     card.appendChild(rating);

//     // Add click functionality to show details on click
//     card.addEventListener("click", () => {
//         addToStorage(movie);
//         window.location.href = "top_card.html"; // Navigate to details page
//     });

//     return card;
// }

// // Function to store selected movie in localStorage
// function addToStorage(item) {
//     localStorage.setItem("selectedItem", JSON.stringify(item));
// }

// // Call the fetch function when the page loads
// fetchTop10Movies();


// // fan fav


// const url1 = 'https://imdb188.p.rapidapi.com/api/v1/getFanFavorites?country=US';
// const options1 = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': 'badd91c5eemsh13f57c6054329c0p1d73fejsn7769a144a392',
// 		'x-rapidapi-host': 'imdb188.p.rapidapi.com'
// 	}
// };




// // Function to fetch and display Fan Favorites
// // Function to fetch and display Fan Favorites
// const container_fan = document.getElementById('fan-favorites-results');

// async function fetchFanFavorites() {
//     try {
//         const response = await fetch(url1, options1);
//         if (!response.ok) {
//             throw new Error('Failed to fetch data');
//         }
//         const result = await response.json();
//         const res = result.data?.list;
        
//         if (!Array.isArray(res)) {
//             console.error('Invalid data format');
//             return;
//         }

//         console.log("Fan Favorites Response Data:", res);
//         container_fan.innerHTML = ''; // Clear previous results

//         res.forEach(movie_fan => {
//             const movieCard_fan = createFanFavoriteCard(movie_fan);
//             container_fan.appendChild(movieCard_fan);
//         });
//     } catch (error) {
//         console.error('Error fetching fan favorites:', error);
//     }
// }

// // Function to create a movie card for Fan Favorites
// function createFanFavoriteCard(movie_fan) {
//     const card_fan = document.createElement('div');
//     card_fan.classList.add('movie-card');

//     // Poster Image
//     const img = document.createElement('img');
//     img.src = movie_fan.primaryImage?.imageUrl || 'https://via.placeholder.com/150'; // Default image
//     img.alt = `${movie_fan.titleText?.text || 'Movie'} Poster`;
//     card_fan.appendChild(img);

//     // Title
//     const title = document.createElement('h3');
//     title.textContent = movie_fan.titleText?.text || 'N/A';
//     card_fan.appendChild(title);

//     // Rating
//     const rating = document.createElement('p');
//     rating.innerHTML = `Rating: ${movie_fan.ratingsSummary?.aggregateRating || 'N/A'} <span style="color: gold;">&#9733;</span>`;
//     card_fan.appendChild(rating);

//     // Click functionality to store only the clicked movie and navigate to navigate.html
//     card_fan.addEventListener("click", () => {
//         localStorage.setItem("selectedItem", JSON.stringify(movie_fan)); // Store only clicked movie
//         window.location.href = "navigate.html"; // Navigate to details page
//     });

//     return card_fan;
// }

// // Call the fetch function when the page loads
// fetchFanFavorites();








// // explore stream

// const apiUrl = 'https://imdb188.p.rapidapi.com/api/v1/getWhatsStreaming?country=US';
// const requestOptions = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': 'badd91c5eemsh13f57c6054329c0p1d73fejsn7769a144a392',
// 		'x-rapidapi-host': 'imdb188.p.rapidapi.com'
// 	}
// };








// let isLoaded = true;

// async function fetchStreamingProviders() {
//     try {
//         const response = await fetch(apiUrl, requestOptions);
//         const data = await response.json();
//         const providers = data.data;
//         allData.push(providers)

//         console.log("Streaming Providers Data:", providers);

//         const providerListContainer = document.getElementById('stream-provider-list');
//         providerListContainer.innerHTML = ''; 

//         providers.forEach(provider => {
//             const providerDiv = document.createElement('div');
//             providerDiv.classList.add('provider-item');

//             const providerHeading = document.createElement('h2');
//             providerHeading.textContent = provider.providerName;
//             providerHeading.style.fontSize = "25px";
//             providerDiv.appendChild(providerHeading);

//             providerListContainer.appendChild(providerDiv);

//             providerHeading.onclick = function() {
//                 displayProviderMovies(provider);  
//             };
//         });
//     } catch (error) {
//         console.log('Error fetching streaming providers:', error);
//     }
// }

// function displayProviderMovies(provider) {
//     const movieCardContainer = document.getElementById('movie-card-container');
//     movieCardContainer.innerHTML = ''; 
//     localStorage.setItem('currentProviderMovies', JSON.stringify(provider.edges));

//     provider.edges.forEach(movie => {
//         const card = document.createElement('div');
//         card.classList.add('movie-card');

//         const movieImg = document.createElement('img');
//         movieImg.src = movie.title.primaryImage?.imageUrl || 'https://via.placeholder.com/150';
//         movieImg.alt = `${movie.titleText?.text || 'Movie'} Poster`;
//         // movieImg.style.width = "150px";
//         card.appendChild(movieImg);

//         const movieTitle = document.createElement('h3');
//         movieTitle.textContent = movie?.title?.titleText?.text || 'Unknown Title';
//         card.appendChild(movieTitle);

//         const movieRating = document.createElement('p');
//         const ratingValue = movie?.title?.ratingsSummary?.aggregateRating || 'N/A';
//         movieRating.innerHTML = `Rating: ${ratingValue} <span>&#9733;</span>`;
//         card.appendChild(movieRating);

//         // const releaseYear = document.createElement('p');
//         // releaseYear.textContent = `Year: ${movie?.title?.releaseYear?.year || 'Unknown'}`;
//         // card.appendChild(releaseYear);

//         movieCardContainer.appendChild(card);
        
//         card.addEventListener("click", () => {
//             window.location.href = "explore_card.html";
//             saveSelectedMovie(movie);
//         });

//         return card;
//     });
// }

// fetchStreamingProviders();

// function saveSelectedMovie(selectedMovie) {
//     localStorage.setItem("selectedMovie", JSON.stringify(selectedMovie));
// }

// function loadMoviesFromStorage() {
//     const savedMovies = JSON.parse(localStorage.getItem('currentProviderMovies'));
//     if (isLoaded && savedMovies) {
//         displayProviderMovies({ edges: savedMovies });
//     } else {
//         fetchStreamingProviders();
//     }
// }

// loadMoviesFromStorage();


// // born

// const url3 = 'https://imdb188.p.rapidapi.com/api/v1/getBornOn?month=01&day=01';
// const options3 = {
//     method: 'GET',
//     headers: {
//         'x-rapidapi-key': 'badd91c5eemsh13f57c6054329c0p1d73fejsn7769a144a392',
//         'x-rapidapi-host': 'imdb188.p.rapidapi.com'
//     }
// };

// let Cardscontainer = document.getElementById("Cardscontainer");

// // Function to fetch and display the data
// async function GetBorn() {
//     try {
//         const response = await fetch(url3, options3);
//         const result = await response.json();

//         if (result?.data?.list) {
//             let dataList = result.data.list;

//             Cardscontainer.style.display = "flex";
//             Cardscontainer.style.gap = "5px";

//             dataList.forEach(person => {
//                 let Borncard = createBornCard(person);
//                 Cardscontainer.appendChild(Borncard);
//             });
//         } else {
//             console.error("Unexpected data format:", result);
//             Cardscontainer.innerHTML = "<p>No data available for the requested date.</p>";
//         }
//     } catch (error) {
//         console.error("Error fetching data:", error);
//         Cardscontainer.innerHTML = "<p>Failed to load data. Please try again later.</p>";
//     }
// }

// // Function to create a card element
// function createBornCard(person) {
//     let card = document.createElement("div");
//     card.classList.add('Borncard');

//     let image = document.createElement("img");
//     image.src = person.primaryImage?.imageUrl || 'fallback-image-url.jpg';
//     card.appendChild(image);

//     let name = document.createElement("h3");
//     name.textContent = person.birthName?.text || "No Name Available";
//     card.appendChild(name);

//     let profession = document.createElement("p");
//     profession.textContent = person.primaryProfessions?.map(x => x.category.text).join(", ") || "Unknown Profession";
//     card.appendChild(profession);

//     card.addEventListener("click", () => {
//         localStorage.setItem("selectedPerson", JSON.stringify(person));
//         window.location.href = "born_card.html";
//     });

//     return card;
// }

// GetBorn();


// function addToCart(item) {
//     localStorage.setItem("items", JSON.stringify(item));
//     let data = JSON.parse(localStorage.getItem("items"));
//     // data.push(item)
//     // alert("item is added to cart")
// }


// console.log("all movies data ",allData)




// // Function to search movies
// // ✅ Declare isSearching at the top
// let isSearching = false;

// function search() {
//     const inputTag = document.getElementById('search').value.trim().toLowerCase();
//     const allMovies = allData.flat(); 
    
//     // If the search input is empty, reset the display
//     if (inputTag === '') {
//         isSearching = false;
//         displayMovieSections();
//         return;
//     }

//     // Set the search state to true
//     isSearching = true;

//     // Filter the movies based on the search input
//     const filteredMovies = allMovies.filter((movie) => {
//         if (movie?.titleText?.text) {
//             return movie.titleText.text.toLowerCase().includes(inputTag);
//         } else {
//             return Array.isArray(movie) && movie.some(item => item?.nameText?.toLowerCase().includes(inputTag));
//         }
//     });

//     const searchResultsContainer = document.getElementById('search-results');
//     searchResultsContainer.innerHTML = ''; // Clear previous search results

//     if (filteredMovies.length === 0) {
//         searchResultsContainer.innerHTML = '<p>No movies found matching your search.</p>';
//         return;
//     }

//     let uniqueMovies = [];

//     // Ensure no duplicates in search results
//     filteredMovies.forEach((movie) => {
//         if (!uniqueMovies.some(existingMovie => existingMovie.titleText.text === movie.titleText.text)) {
//             uniqueMovies.push(movie);
//         }
//     });

//     localStorage.clear(); // Clear localStorage before showing search results

//     hideAllMovieContainers(); // Hide the default sections

//     // Show the unique filtered movies
//     uniqueMovies.forEach(movie => {
//         const movieCard = createMovieCard(movie);
//         searchResultsContainer.appendChild(movieCard);
//     });
// }

// // Function to hide all default movie containers and headings during search
// function hideAllMovieContainers() {
//     const containersToHide = [
//         'top10-results', 
//         'fan-favorites-results', 
//         'stream-provider-list', 
//         'Cardscontainer',
//         'Top10',
//         'Fan_Favourites',
//         'Explore',
//         'Born_Details'
//     ];

//     // Hide all movie sections and their headings
//     containersToHide.forEach(containerId => {
//         const container = document.getElementById(containerId);
//         if (container) {
//             container.style.display = 'none';
//         }
//     });

//     // Show only the search results
//     document.getElementById('search-results').style.display = 'block';
// }

// // Function to reset and display all movie sections with headings again
// function displayMovieSections() {
//     if (isSearching) return; // Do not display sections if searching

//     // Show the default sections and headings again
//     document.getElementById('top10-results').style.display = 'block';
//     document.getElementById('fan-favorites-results').style.display = 'block';
//     document.getElementById('stream-provider-list').style.display = 'block';
//     document.getElementById('Cardscontainer').style.display = 'flex';
//     document.getElementById('search-results').style.display = 'none'; // Hide search results when not searching

//     // Show the headings for the sections
//     document.getElementById("Top10").style.display = "block";
//     document.getElementById("Fan_Favourites").style.display = "block";
//     document.getElementById("Explore").style.display = "block";
//     document.getElementById("Born_Details").style.display = "block";
// }

// // Call the initializePage to reset the display when the page loads
// function initializePage() {
//     displayMovieSections(); // Display all sections by default
// }

// initializePage();



// ================= GLOBAL VARIABLES =================

// Global array to hold movies from different sources for search
let allData = [];

// Variable to track whether a search is active
let isSearching = false;

// ================= TOP 10 MOVIES =================

const top10Url = 'https://imdb188.p.rapidapi.com/api/v1/getWeekTop10';
const top10Options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'YOUR_API_KEY',
        'x-rapidapi-host': 'imdb188.p.rapidapi.com'
    }
};

async function fetchTop10Movies() {
    try {
        const response = await fetch(top10Url, top10Options);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        console.log("Full API Response (Top 10):", result);

        if (!result.data || !Array.isArray(result.data)) {
            throw new Error("Unexpected API response format: 'data' is missing or not an array.");
        }

        const movies = result.data;
        console.log("Top 10 Movies Data:", movies);

        // Add Top 10 movies to the global array
        allData.push(movies);

        const container = document.getElementById('top10-results');
        container.innerHTML = '';

        movies.forEach(movie => {
            const movieCard = createMovieCard(movie);
            container.appendChild(movieCard);
        });
    } catch (error) {
        console.error('Error fetching top 10 movies:', error);
    }
}

// ================= FAN FAVORITES =================

const fanFavoritesUrl = 'https://imdb188.p.rapidapi.com/api/v1/getFanFavorites?country=US';
const fanFavoritesOptions = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'YOUR_API_KEY',
        'x-rapidapi-host': 'imdb188.p.rapidapi.com'
    }
};

const containerFan = document.getElementById('fan-favorites-results');

async function fetchFanFavorites() {
    try {
        const response = await fetch(fanFavoritesUrl, fanFavoritesOptions);
        if (!response.ok) {
            throw new Error('Failed to fetch fan favorites data');
        }
        const result = await response.json();
        const fanData = result.data?.list;
        
        if (!Array.isArray(fanData)) {
            console.error('Invalid data format for fan favorites');
            return;
        }

        console.log("Fan Favorites Response Data:", fanData);
        
        // Add Fan Favorites movies to the global array
        allData.push(fanData);

        containerFan.innerHTML = '';

        fanData.forEach(movieFan => {
            const movieCardFan = createFanFavoriteCard(movieFan);
            containerFan.appendChild(movieCardFan);
        });
    } catch (error) {
        console.error('Error fetching fan favorites:', error);
    }
}

// ================= STREAMING PROVIDERS =================

const streamingUrl = 'https://imdb188.p.rapidapi.com/api/v1/getWhatsStreaming?country=US';
const streamingOptions = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'YOUR_API_KEY',
        'x-rapidapi-host': 'imdb188.p.rapidapi.com'
    }
};

async function fetchStreamingProviders() {
    try {
        const response = await fetch(streamingUrl, streamingOptions);
        const data = await response.json();
        const providers = data.data;
        
        // Add streaming providers movies to the global array
        allData.push(providers);

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
        console.error('Error fetching streaming providers:', error);
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
        card.appendChild(movieImg);

        const movieTitle = document.createElement('h3');
        movieTitle.textContent = movie?.title?.titleText?.text || 'Unknown Title';
        card.appendChild(movieTitle);

        const movieRating = document.createElement('p');
        const ratingValue = movie?.title?.ratingsSummary?.aggregateRating || 'N/A';
        movieRating.innerHTML = `Rating: ${ratingValue} <span>&#9733;</span>`;
        card.appendChild(movieRating);

        movieCardContainer.appendChild(card);
        
        card.addEventListener("click", () => {
            window.location.href = "explore_card.html";
            saveSelectedMovie(movie);
        });
    });
}

function saveSelectedMovie(selectedMovie) {
    localStorage.setItem("selectedMovie", JSON.stringify(selectedMovie));
}

function loadMoviesFromStorage() {
    const savedMovies = JSON.parse(localStorage.getItem('currentProviderMovies'));
    if (savedMovies) {
        displayProviderMovies({ edges: savedMovies });
    } else {
        fetchStreamingProviders();
    }
}

loadMoviesFromStorage();

// ================= BORN DETAILS =================

const bornUrl = 'https://imdb188.p.rapidapi.com/api/v1/getBornOn?month=01&day=01';
const bornOptions = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'YOUR_API_KEY',
        'x-rapidapi-host': 'imdb188.p.rapidapi.com'
    }
};

const cardsContainer = document.getElementById("Cardscontainer");

async function GetBorn() {
    try {
        const response = await fetch(bornUrl, bornOptions);
        const result = await response.json();

        if (result?.data?.list) {
            let dataList = result.data.list;

            // Display settings for the born details container
            cardsContainer.style.display = "flex";
            cardsContainer.style.gap = "5px";

            dataList.forEach(person => {
                let bornCard = createBornCard(person);
                cardsContainer.appendChild(bornCard);
            });
        } else {
            console.error("Unexpected born details data format:", result);
            cardsContainer.innerHTML = "<p>No data available for the requested date.</p>";
        }
    } catch (error) {
        console.error("Error fetching born details:", error);
        cardsContainer.innerHTML = "<p>Failed to load data. Please try again later.</p>";
    }
}

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

GetBorn();

// ================= MOVIE CARD CREATION =================

function createMovieCard(movie) {
    const card = document.createElement('div');
    card.classList.add('movie-card');

    // Poster Image
    const img = document.createElement('img');
    img.src = movie?.primaryImage?.imageUrl || 'https://via.placeholder.com/150';
    img.alt = `${movie?.titleText?.text || 'Movie'} Poster`;
    card.appendChild(img);

    // Title
    const title = document.createElement('h3');
    title.textContent = movie?.titleText?.text || "N/A";
    card.appendChild(title);

    // Rating
    const rating = document.createElement('p');
    rating.innerHTML = `Rating: ${movie?.ratingsSummary?.aggregateRating || 'N/A'} <span style="color: gold;">&#9733;</span>`;
    card.appendChild(rating);

    // Click functionality to show details on click
    card.addEventListener("click", () => {
        addToStorage(movie);
        window.location.href = "top_card.html"; // Navigate to details page
    });

    return card;
}

function createFanFavoriteCard(movieFan) {
    const card = document.createElement('div');
    card.classList.add('movie-card');

    // Poster Image
    const img = document.createElement('img');
    img.src = movieFan.primaryImage?.imageUrl || 'https://via.placeholder.com/150';
    img.alt = `${movieFan.titleText?.text || 'Movie'} Poster`;
    card.appendChild(img);

    // Title
    const title = document.createElement('h3');
    title.textContent = movieFan.titleText?.text || 'N/A';
    card.appendChild(title);

    // Rating
    const rating = document.createElement('p');
    rating.innerHTML = `Rating: ${movieFan.ratingsSummary?.aggregateRating || 'N/A'} <span style="color: gold;">&#9733;</span>`;
    card.appendChild(rating);

    // Click functionality to store selected movie and navigate
    card.addEventListener("click", () => {
        localStorage.setItem("selectedItem", JSON.stringify(movieFan));
        window.location.href = "navigate.html";
    });

    return card;
}

function addToStorage(item) {
    localStorage.setItem("selectedItem", JSON.stringify(item));
}

// ================= SEARCH FUNCTIONALITY =================

function search() {
    const inputTag = document.getElementById('search').value.trim().toLowerCase();
    const allMovies = allData.flat();

    // If the search input is empty, reset the display
    if (inputTag === '') {
        isSearching = false;
        displayMovieSections();
        return;
    }

    // Set the search state to true
    isSearching = true;

    // Filter movies by title based on the search input
    const filteredMovies = allMovies.filter((movie) => {
        if (movie?.titleText?.text) {
            return movie.titleText.text.toLowerCase().includes(inputTag);
        } else {
            return Array.isArray(movie) && movie.some(item => item?.nameText?.toLowerCase().includes(inputTag));
        }
    });

    const searchResultsContainer = document.getElementById('search-results');
    searchResultsContainer.innerHTML = ''; // Clear previous search results

    if (filteredMovies.length === 0) {
        searchResultsContainer.innerHTML = '<p>No movies found matching your search.</p>';
        return;
    }

    let uniqueMovies = [];

    // Ensure no duplicates in search results based on title
    filteredMovies.forEach((movie) => {
        if (!uniqueMovies.some(existingMovie => existingMovie.titleText.text === movie.titleText.text)) {
            uniqueMovies.push(movie);
        }
    });

    localStorage.clear(); // Optionally clear localStorage before showing search results

    hideAllMovieContainers(); // Hide default sections

    // Display each unique filtered movie
    uniqueMovies.forEach(movie => {
        const movieCard = createMovieCard(movie);
        searchResultsContainer.appendChild(movieCard);
    });
}

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

    // Show only the search results container
    document.getElementById('search-results').style.display = 'block';
}

function displayMovieSections() {
    if (isSearching) return; // Do not display if currently searching

    document.getElementById('top10-results').style.display = 'block';
    document.getElementById('fan-favorites-results').style.display = 'block';
    document.getElementById('stream-provider-list').style.display = 'block';
    document.getElementById('Cardscontainer').style.display = 'flex';
    document.getElementById('search-results').style.display = 'none';

    // Display section headings
    document.getElementById("Top10").style.display = "block";
    document.getElementById("Fan_Favourites").style.display = "block";
    document.getElementById("Explore").style.display = "block";
    document.getElementById("Born_Details").style.display = "block";
}

function initializePage() {
    displayMovieSections();
}

initializePage();

// ================= INITIAL FETCH CALLS =================

// Call all fetch functions when the page loads
fetchTop10Movies();
fetchFanFavorites();
fetchStreamingProviders();
// GetBorn() has already been called above
