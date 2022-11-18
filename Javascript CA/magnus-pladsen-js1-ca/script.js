import { fetchTopRatedGames } from "./scripts/fetching.js";


const movieContainer = document.querySelector(".movie-container");

const displayMovies = async () => {
    fetchTopRatedGames().then((data) => {
        console.log(data.results);
    })
}

fetchTopRatedGames();
