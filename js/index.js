let peliculasPopulares = "https://api.themoviedb.org/3/movie/popular?api_key=80c0fd84bfbb77d90fa1ae39a0f643d4&language=en-US&page=1"

fetch(peliculasPopulares)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data);
        let infoPeliculas = data.results
        let ofertas = document.querySelector('.pelis-mas-vistas')
        let todasLasPeliculas = []

        for (let i=0; i<5; i++) {
            console.log(infoPeliculas[i]);
            todasLasPeliculas += `<article class="item">
            <a href="./peliculas.html"> <img src = "https://image.tmdb.org/t/p/w500${infoPeliculas[i].poster_path}"  class="imgpop" alt="${infoPeliculas[i].title}"> </a>
            <a href="./peliculas.html">  <h3  class="nombres">  ${infoPeliculas[i].original_title}   </h3> </a>
            </article>`
            
        }
        ofertas.innerHTML = todasLasPeliculas
    })

    let SeriesPopulares = "https://api.themoviedb.org/3/tv/popular?api_key=80c0fd84bfbb77d90fa1ae39a0f643d4&language=en-US&page=1"

    fetch(SeriesPopulares)
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            console.log(data);
            let infoSeries = data.results
            let ofertas = document.querySelector('.series-mas-vistas')
            let todasLasSeries = []
    
            for (let i=0; i<5; i++) {
                console.log(infoSeries[i]);
                todasLasSeries += `<article class="item">
                <img src = "https://image.tmdb.org/t/p/w500${infoSeries[i].poster_path}"  class="imgpop" alt="${infoSeries[i].title}">
                
                </article>`
                
            }
            ofertas.innerHTML = todasLasSeries
        })
    
        let LoMasVisto = "https://api.themoviedb.org/3/movie/top_rated?api_key=80c0fd84bfbb77d90fa1ae39a0f643d4&language=en-US&page=1"

        fetch(LoMasVisto)
            .then(function(res){
                return res.json();
            })
            .then(function(data){
                console.log(data);
                let infoLoMasVisto = data.results
                let ofertas = document.querySelector('.lo-mas-visto')
                let TodoLoMasVisto = []
        
                for (let i=0; i<5; i++) {
                    console.log(infoLoMasVisto[i]);
                    TodoLoMasVisto += `<article class="item">
                    <img src = "https://image.tmdb.org/t/p/w500${infoLoMasVisto[i].poster_path}"  class="imgpop" alt="${infoLoMasVisto[i].title}">
                    
                    </article>`
                    
                }
                ofertas.innerHTML = TodoLoMasVisto
            })    


    
