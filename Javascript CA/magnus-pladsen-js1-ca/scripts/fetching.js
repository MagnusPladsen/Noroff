const url = "https://api.themoviedb.org/3/movie/"
const apiKey = "7a0622079eb690b7d401c60fcb58a720"
const apiUrl = "?api_key=" + apiKey

const fetchTopRated = async () => {
    try {
    const response = await fetch(url + "top_rated" + apiUrl);
    const results = await response.json();
    console.log(results);
    return results;
    } catch (error) {
        console.log(error)
        //post error on page
    }

}