const API_KEY = '79f8fbd8fcc00407bb3d9d4c2e7945a2'
const DOMAIN = 'https://api.themoviedb.org/3'
const IMAGE_BASE_PATH = 'https://image.tmdb.org/t/p/original'

const button = document.querySelector('button')
const titleInput = document.querySelector('input')
const list = document.querySelector('.movie-list')

button.addEventListener('click', async () => {
  let search = titleInput.value
  // console.log('clicked!')
  let response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=79f8fbd8fcc00407bb3d9d4c2e7945a2`
  )
  console.log(response)
  let movieList = response.data.results
  const renderList = (arr) => {
    console.log(renderList)
    arr.forEach((movie) => {
      let movies = document.createElement('div')
      movies.innerHTML = `<img src=https://image.tmdb.org/t/p/original${movie.poster_path}>`
      list.append(movies)
    })
  }
  renderList(movieList)
})
