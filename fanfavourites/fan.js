// const url = 'https://imdb188.p.rapidapi.com/api/v1/getFanFavorites?country=US';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': 'bd9f3e692cmsh8cdc10e725584afp1a7edajsnbe58f88db7e5',
// 		'x-rapidapi-host': 'imdb188.p.rapidapi.com'
// 	}
// };

// // Function to fetch and display Fan Favorites
// const container = document.getElementById('fan-favorites-results');
// async function fetchFanFavorites() {
//     try {
//         const response = await fetch(url, options);
//         if (!response.ok) {
//             throw new Error('Failed to fetch data');
//         }
//         const result = await response.json();
//         const res = result.data?.list;
//         console.log(res)
//         if (!Array.isArray(res)) {
//             console.error('Invalid data format');
//             return;
//         }

//         console.log("Fan Favorites Response Data:", res);
//         container.innerHTML = ''; // Clear any previous results
//         res.forEach(movie => {
//             const movieCard = createFanFavoriteCard(movie);
//             container.appendChild(movieCard);
//         });
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
//     // card.onclick = () => {
//     //     // Pass movie ID to the movie-details page
//     //     window.location.href = `movie-details.html?id=${movie.id}`;
//     // };
//     card.addEventListener("click", () => {
//         addToCart(movie);
//         window.location.href="movie-details.html"
//     })

//     return card;

// }

// // Call the fetch function when the page loads
// fetchFanFavorites();

// function addToCart(item) {
//     localStorage.setItem("items", JSON.stringify(item))
//     let data = JSON.parse(localStorage.getItem("items"))
//     // data.push(item)
//     // alert("item is added to cart")
    
// }

const url = 'https://imdb188.p.rapidapi.com/api/v1/getFanFavorites?country=US';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'ef9bb173a7msh94c835abaf5c638p10ff81jsna9c18d22447e',
		'x-rapidapi-host': 'imdb188.p.rapidapi.com'
	}
};



// Function to fetch and display Fan Favorites
const container_fan = document.getElementById('fan-favorites-results');
async function fetchFanFavorites() {
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        const res = result.data?.list;
        console.log(res)
        if (!Array.isArray(res)) {
            console.error('Invalid data format');
            return;
        }

        console.log("Fan Favorites Response Data:", res);
        container_fan.innerHTML = ''; // Clear any previous results
        res.forEach(movie_fan => {
            const movieCard_fan = createFanFavoriteCard(movie_fan);
            container_fan.appendChild(movieCard_fan);
        });
    } catch (error) {
        console.error('Error fetching fan favorites:', error);
    }
}

// Function to create a movie card for Fan Favorites
function createFanFavoriteCard(movie_fan) {
    const card_fan = document.createElement('div');
    card_fan.classList.add('movie-card');

    // Poster Image
    const img = document.createElement('img');
    img.src = movie_fan.primaryImage?.imageUrl || 'https://via.placeholder.com/150'; // Default image if no poster
    img.alt = `${movie_fan.titleText?.text || 'Movie'} Poster`;
    img.style.width = "150px";
    card_fan.appendChild(img);

    // Title
    const title = document.createElement('h3');
    title.textContent = movie_fan.titleText?.text || 'N/A';
    card_fan.appendChild(title);

    // Rating
    const rating = document.createElement('p');
    rating.innerHTML = `Rating: ${movie_fan.ratingsSummary?.aggregateRating || 'N/A'} <span style="color: gold;">&#9733;</span>`;
    card_fan.appendChild(rating);

    // Add click functionality to move the card to the side and show details
    card_fan.addEventListener("click", () => {
        card_fan.classList.toggle("moved"); // Toggle the 'moved' class to trigger the slide effect
        addToCart(movie_fan); // Save movie data to local storage
        window.location.href = "movie-details.html"; // Redirect to details page
    });

    return card_fan;
}

// Call the fetch function when the page loads
fetchFanFavorites();

// Function to store the selected movie in local storage
function addToCart(item_fan) {
    localStorage.setItem("items_fan", JSON.stringify(item_fan));
    let data = JSON.parse(localStorage.getItem("items_fan"));
}
