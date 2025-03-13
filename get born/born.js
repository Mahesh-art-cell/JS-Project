// const url = 'https://imdb188.p.rapidapi.com/api/v1/getBornOn?month=01&day=01';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': '4cc4ddcdadmsh8ac994bf0678d23p11a4eajsn43ebf3b4f0bb',
// 		'x-rapidapi-host': 'imdb188.p.rapidapi.com'
// 	}
// };
// let Cardscontainer = document.getElementById("Cardscontainer");

// let dataList = [];
// // let currentIndex = -1; // Default index

// // Function to fetch and display the data
// async function GetBorn() {
//     const response = await fetch(url, options);
//     const result = await response.json();
//     dataList = result.data.list;
//     console.log(dataList);

//     // Retrieve index from local storage if it exists
//     const savedIndex = localStorage.getItem('currentIndex');


//     // If there's no index, just show the list
//         Cardscontainer.style.display = "flex";
//         Cardscontainer.style.gap = "5px";
//         dataList.forEach(x => {
//             let Borncard = creategetborn(x);
//             Cardscontainer.appendChild(Borncard);
//         });
// }

// // Function to create a card element
// function creategetborn(x1) {
//     let card = document.createElement("div");
//     card.classList.add('Borncard');

//     // Safely get the image URL, fall back to a placeholder if not available
//     let image = document.createElement("img");
//     image.src = x1.primaryImage?.imageUrl || 'fallback-image-url.jpg';
//     card.appendChild(image);

//     // Safely get the birth name, fall back to a default if not available
//     let name = document.createElement("h3");
//     name.textContent = x1.birthName?.text || "No Name Available"; 
//     card.appendChild(name);

//     // Safely get the profession or display "Unknown Profession" if not available
//     let profession = document.createElement("p");
//     profession.textContent = x1.birthDateComponents?.displayableProperty?.value?.plainText || "Unknown Profession";
//     card.appendChild(profession);

//     card.addEventListener("click", () => {
//         addToCart(x1);
//         window.location.href="born_card.html"
//     })

//     return card;
// }
// GetBorn();

// function addToCart(item) {
//     localStorage.setItem("items", JSON.stringify(item))
//     let data = JSON.parse(localStorage.getItem("items"))
//     // data.push(item)
//     // alert("item is added to cart")
    
// }


const url = 'https://imdb188.p.rapidapi.com/api/v1/getBornOn?month=01&day=01';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '0c13c4691amsh2945f06276a224ep169342jsn653172f4d4a6',
		'x-rapidapi-host': 'imdb188.p.rapidapi.com'
	}
};


let Cardscontainer = document.getElementById("Cardscontainer");
let dataList = [];

// Function to fetch and display the data
async function GetBorn() {
    try {
        const response = await fetch(url, options);
        const result = await response.json();

        // Check if the response contains the data and the list property
        if (result && result.data && Array.isArray(result.data.list)) {
            dataList = result.data.list;
            console.log(dataList);

            // Retrieve index from local storage if it exists
            const savedIndex = localStorage.getItem('currentIndex');

            // If there's no index, just show the list
            Cardscontainer.style.display = "flex";
            Cardscontainer.style.gap = "5px";
            dataList.forEach(x => {
                let Borncard = creategetborn(x);
                Cardscontainer.appendChild(Borncard);
            });
        } else {
            console.error("Data list not found or response format is unexpected:", result);
            Cardscontainer.innerHTML = "<p>No data available for the requested date.</p>";
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        Cardscontainer.innerHTML = "<p>Failed to load data. Please try again later.</p>";
    }
}

// Function to create a card element
function creategetborn(x1) {
    let card = document.createElement("div");
    card.classList.add('Borncard');

    // Safely get the image URL, fall back to a placeholder if not available
    let image = document.createElement("img");
    image.src = x1.primaryImage?.imageUrl || 'fallback-image-url.jpg';
    card.appendChild(image);

    // Safely get the birth name, fall back to a default if not available
    let name = document.createElement("h3");
    name.textContent = x1.birthName?.text || "No Name Available"; 
    card.appendChild(name);

    // Safely get the profession or display "Unknown Profession" if not available
    let profession = document.createElement("p");
    profession.textContent = x1.birthDateComponents?.displayableProperty?.value?.plainText || "Unknown Profession";
    card.appendChild(profession);

    card.addEventListener("click", () => {
        addToCart(x1);
        window.location.href = "born_card.html";
    });

    return card;
}

GetBorn();

function addToCart(item) {
    localStorage.setItem("items", JSON.stringify(item));
    let data = JSON.parse(localStorage.getItem("items"));
    // data.push(item)
    // alert("item is added to cart")
}
