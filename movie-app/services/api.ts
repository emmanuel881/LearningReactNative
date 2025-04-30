export const TMDB_CONFIG = {
    BASE_URI: "https://api.themoviedb.org/3",
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
    }
}


export const fetchMovies = async ({ query }: { query: string }) => {
    const endpoint = query
        ? `${TMDB_CONFIG.BASE_URI}/search/movie?query=${encodeURIComponent(query)}` :
        `${TMDB_CONFIG.BASE_URI}/discover/movie?sort_by=popularity.desc`

    const response = await fetch(endpoint, {
        method: "GET",
        headers: TMDB_CONFIG.headers
    })

    if (!response.ok) {
        throw new Error("failed to fetch movies", response.statusText)
    }

    const data = await response.json()

    return data.results
}











// const url = 'https://api.themoviedb.org/3/keyword/keyword_id/movies?include_adult=false&language=en-US&page=1';
// const options = {
//     method: 'GET',
//     headers: {
//         accept: 'application/json',
//         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODBmZjA0NjhkYWFhMDAxMjQwZjc3YzMxMDNhMmI4OSIsIm5iZiI6MTc0NTgyMTM5NS42MTksInN1YiI6IjY4MGYxZWQzYTkwYWNhZjZlZWVhYzBiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zWcX94CBVaJogmjsS5m8dRL1yLgfscoGyAadP35LW7M'
//     }
// };

// fetch(url, options)
//     .then(res => res.json())
//     .then(json => console.log(json))
//     .catch(err => console.error(err));