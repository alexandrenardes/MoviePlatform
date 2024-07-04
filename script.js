// Substitua 'SEU_BEARER_TOKEN' pelo seu token de acesso
const bearerToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYjM4OGY3ZjZmOWQ1NmE4YzJjOGY5YzM1NjZhMjZmMSIsIm5iZiI6MTcyMDA1MTM3OS40MTU5MjIsInN1YiI6IjYwMTA1MzczMGYxZTU4MDAzZWFhOGVlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TRdBDVNMBzINQLq8pqqP-WBoZ9HZzctP0Lah_YvomXY';

// Função para carregar os filmes mais populares
function loadPopularMovies() {
    // Selecionar o elemento main
    var main = document.querySelector('main.center');

    // Verificar se o elemento main existe
    if (main) {
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
    fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
    .then(response => response.json())
    .then(data => {
        // Verificar se há resultados
        if (data.results && data.results.length > 0) {
            // Pegar o primeiro filme da lista (mais popular)
            const movie = data.results[0];

            // Construir a URL da imagem do filme
            const imageUrl = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;

            // Inserir a imagem no HTML
            main.innerHTML+= `
                <div class="banner-principal" style="background-image:url('${imageUrl}')"></div>
            `;
        } else {
            console.error('Nenhum filme encontrado.');
        }
    })
    .catch(err => console.error('Erro ao buscar os filmes:', err));
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