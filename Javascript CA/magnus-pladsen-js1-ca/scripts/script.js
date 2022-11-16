import { fetchTopRatedGames } from "./fetching";

const movieContainer = document.querySelector(".movie-container");

const displayMovies = async () => {
    fetchTopRatedGames().then((data) => {
        console.log(data);
    })
}

displayMovies();