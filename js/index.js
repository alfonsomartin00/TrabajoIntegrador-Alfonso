let pelis = "https://api.themoviedb.org/3/movie/popular?api_key=80c0fd84bfbb77d90fa1ae39a0f643d4&language=en-US&page=1"

fetch(pelis)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data);
        let infoPeliculas = data.results
        let ofertas = document.querySelector('pelis-mas-vistas')
        let todasLasPeliculas = []

        for (let i=0; i<5; i++) {
            console.log(infoPeliculas[i]);
            todasLasPeliculas += `<article class = "item">
            <img src= "https://image.tmdb.org/t/p/w500${infoPeliculas[i].poster_path}" alt="${infoPeliculas[i].title}">
            
            </article>`
            
        }
        ofertas.innerHTML = todasLasPeliculas
    })
    
