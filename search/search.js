// const url = 'https://imdb188.p.rapidapi.com/api/v1/getFanFavorites?country=US';
// const options = {
//     method: 'GET',
//     headers: {
//         'x-rapidapi-key': 'bd9f3e692cmsh8cdc10e725584afp1a7edajsnbe58f88db7e5',
//         'x-rapidapi-host': 'imdb188.p.rapidapi.com'
//     }
// };

// // Store all movies data globally
// let allData = [];
// const container = document.getElementById('fan-favorites-results');

// // Function to fetch and display Fan Favorites
// async function fetchFanFavorites() {
//     try {
//         const response = await fetch(url, options);
//         if (!response.ok) {
//             throw new Error('Failed to fetch data');
//         }

//         const result = await response.json();
//         const res = result.data?.list;
//         console.log(res);
//         allData = res; // Save the fetched movies in a global variable
//         console.log("Fan Favorites Response Data:", res);

//         // Display all movies after fetching
//         displayMovies(allData);
//     } catch (error) {
//         console.error('Error fetching fan favorites:', error);
//     }
// }

// // Function to create a movie card for Fan Favorites
// function createFanFavoriteCard(movie) {
//     const card = document.createElement('div');
//     card.classList.add('movie-card');

//     // Poster Image
//     const img = document.createElement('img');
//     img.src = movie.primaryImage?.imageUrl || 'https://via.placeholder.com/150'; // Default image if no poster
//     img.alt = `${movie.titleText?.text || 'Movie'} Poster`;
//     img.style.width = "150px";
//     card.appendChild(img);

//     // Title
//     const title = document.createElement('h3');
//     title.textContent = movie.titleText?.text || 'N/A';
//     card.appendChild(title);

//     // Rating
//     const rating = document.createElement('p');
//     rating.innerHTML = `Rating: ${movie.ratingsSummary?.aggregateRating || 'N/A'} <span style="color: gold;">&#9733;</span>`;
//     card.appendChild(rating);

//     // Add click functionality to show details on click
//     card.addEventListener("click", () => {
//         addToCart(movie);
//         window.location.href = "search_card.html";
//     });

//     return card;
// }

// // Function to display movie cards
// function displayMovies(movies) {
//     container.innerHTML = ''; // Clear any previous results
//     movies.forEach(movie => {
//         const movieCard = createFanFavoriteCard(movie);
//         container.appendChild(movieCard);
//     });
// }

// // Function to search and filter movies based on user input
// function search() {
//     const inputTag = document.getElementById("find").value.trim().toLowerCase();

//     // Filter the movies based on the titleText property (movie title)
//     const filterData = allData.filter(movie => 
//         movie.titleText?.text.toLowerCase().includes(inputTag)
//     );

//     console.log("Filtered Data:", filterData);

//     // Display filtered results
//     displayMovies(filterData);
// }

// // Function to add movie to the cart (store in localStorage)
// function addToCart(item) {
//     // localStorage.setItem("items", JSON.stringify(item));
//     localStorage.setItem("items", JSON.stringify(item))
//     let data = JSON.parse(localStorage.getItem("items"))
// }

// // Fetch fan favorites when the page loads
// fetchFanFavorites();


const url = 'https://imdb188.p.rapidapi.com/api/v1/getFanFavorites?country=US';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '846d8cdc15mshf99992c8afa0716p16495ajsn70e20230ff09',
		'x-rapidapi-host': 'imdb188.p.rapidapi.com'
	}
};
// Store all movies data globally
let allData = [];
const container = document.getElementById('fan-favorites-results');

// Function to fetch and display Fan Favorites
async function fetchFanFavorites() {
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const result = await response.json();
        const res = result.data?.list;
        console.log("Fetched Movies:", res);
        
        if (res) {
            allData = res; // Save the fetched movies in a global variable
            displayMovies(allData); // Display all movies initially
        } else {
            console.error("No movies data found");
        }
    } catch (error) {
        console.error('Error fetching fan favorites:', error);
    }
}

// Function to create a movie card for Fan Favorites
function createFanFavoriteCard(movie) {
    const card = document.createElement('div');
    card.classList.add('movie-card');

    // Poster Image
    const img = document.createElement('img');
    img.src = movie.primaryImage?.imageUrl || 'https://via.placeholder.com/150'; // Default image if no poster
    img.alt = `${movie.titleText?.text || 'Movie'} Poster`;
    img.style.width = "150px";
    card.appendChild(img);

    // Title
    const title = document.createElement('h3');
    title.textContent = movie.titleText?.text || 'N/A';
    card.appendChild(title);

    // Rating
    const rating = document.createElement('p');
    rating.innerHTML = `Rating: ${movie.ratingsSummary?.aggregateRating || 'N/A'} <span style="color: gold;">&#9733;</span>`;
    card.appendChild(rating);

    // Add click functionality to show details on click
    card.addEventListener("click", () => {
        addToCart(movie);
        window.location.href = "search_card.html";
    });

    return card;
}

// Function to display movie cards
function displayMovies(movies) {
    container.innerHTML = ''; // Clear any previous results
    movies.forEach(movie => {
        const movieCard = createFanFavoriteCard(movie);
        container.appendChild(movieCard);
    });
}

// Function to search and filter movies based on user input
function search() {
    const inputTag = document.getElementById("find").value.trim().toLowerCase();

    // If input is empty, show all movies
    if (inputTag === '') {
        displayMovies(allData);
        return;
    }

    // Filter the movies based on whether the title contains the search input
    const filterData = allData.filter(movie => {
        const movieTitle = movie.titleText?.text.toLowerCase() || ''; // Ensure title is available
        return movieTitle.includes(inputTag); // Check if title contains the input text
    });

    console.log("Filtered Data:", filterData);

    // If no movies match, show a message or keep the original list
    if (filterData.length === 0) {
        container.innerHTML = "<p>No results found</p>";
    } else {
        displayMovies(filterData);
    }
}

// Function to add movie to the cart (store in localStorage)
function addToCart(item) {
    localStorage.setItem("items", JSON.stringify(item));
}

// Fetch fan favorites when the page loads
fetchFanFavorites();
