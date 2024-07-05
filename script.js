// 'BEARER_TOKEN' token de acesso
const bearerToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYjM4OGY3ZjZmOWQ1NmE4YzJjOGY5YzM1NjZhMjZmMSIsIm5iZiI6MTcyMDA1MTM3OS40MTU5MjIsInN1YiI6IjYwMTA1MzczMGYxZTU4MDAzZWFhOGVlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TRdBDVNMBzINQLq8pqqP-WBoZ9HZzctP0Lah_YvomXY';

// carregar os filmes mais populares
function loadPopularMovies() {
    // Selecionar o elemento main
    var main = document.querySelector('.main .center');

    // Verificar se o elemento main existe
    if (!main) {
        console.error('Elemento main não encontrado!');
        return;
    }

    // Configurar opções de fetch com o Bearer Token
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${bearerToken}`
        }
    };

    // Realizar a consulta na API do TMDb para obter os filmes mais populares
    fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc', options)
    .then(response => response.json())
    .then(data=>{
        data.results.map((i,j)=>{
            if(j > 18)
                return;
            if(j == 0){
                main.innerHTML += `
                    <div class="banner-principal" style="background-image:url('https://image.tmdb.org/t/p/original`+i.backdrop_path+`')"></div>
                `;
            } else {
                if(j == 1){
                    main.innerHTML +=
                    ` <h2>Assista os melhores filmes</h2>
                    <div class="card-movie"><img src="https://image.tmdb.org/t/p/w500`+i.poster_path+`" /></div>`
                }else {
                    main.innerHTML +=
                    `
                    <div class="card-movie"><img src="https://image.tmdb.org/t/p/w500`+i.poster_path+`" /></div>`
                    
                }
            }
        })
    })
    .catch(err => console.error('Erro ao buscar os filmes populares:', err));
}

// Executar a função após o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', loadPopularMovies);





/*Disponibilizado pelo proprio IMDB para consultar a api e trazer todas as informações dos filmes

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYjM4OGY3ZjZmOWQ1NmE4YzJjOGY5YzM1NjZhMjZmMSIsIm5iZiI6MTcyMDA1MTM3OS40MTU5MjIsInN1YiI6IjYwMTA1MzczMGYxZTU4MDAzZWFhOGVlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TRdBDVNMBzINQLq8pqqP-WBoZ9HZzctP0Lah_YvomXY'
    }
  };
  
  fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
*/