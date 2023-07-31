import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import axios from 'axios';
import TableComponent from './Table'
import ButtonAppBar from './bar';




function App() {

  const [search, setSearch] = useState('')
  const [movies, setMovies] = useState([])
  const [favorites, setFavorites] = useState([])
  const [hover, setHover] = useState(false)

// will only log the movies state variable once its actually been updated 
useEffect(()=>{
  console.log(movies)}, [movies]
)

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTkxYTg4MWQ3YzVjZTI0NzgwNzg3YmE1ZWI0M2Y3OSIsInN1YiI6IjY0YWM3NjRlZTI0YjkzMDBjNmIwMTA2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Gq5ARUVkSIpBRVBDwXxPAV6UhJFzuB2_lW8cgkWpci8'
  }
};


function searchMovie(){

  //this fetch function is an asycn call 
  fetch(`https://api.themoviedb.org/3/search/movie?query=${search}`, options)
  .then(response => response.json())
  .then(response => {

    //have it set so that we only get movies with valid posters 
    const filteredMovies = response.results.filter(r => r.poster_path!==null)
    setMovies(filteredMovies)
    //if i log the movies state immediately after i set it, it wont show the latest version of the state variable 
  })
  .catch(err => console.error(err));
}



  return (
    <div className="App">
      <ButtonAppBar></ButtonAppBar>

 
      <div className='search'>
        <input type='text' onBlur = {(e)=>{setSearch(e.target.value)}}></input>
        <button onClick={searchMovie}>search</button>
      </div>

      <TableComponent data={movies}></TableComponent>

    </div>
  );
}

export default App;
