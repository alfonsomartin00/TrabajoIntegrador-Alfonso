let queryString = location.search

let qsObject = new URLSearchParams(queryString)

let id = qsObject.get("id")

let peliculas = `https://api.themoviedb.org/3/movie/${id}?popular?api_key=80c0fd84bfbb77d90fa1ae39a0f643d4&language=en-US`


        
    
    

