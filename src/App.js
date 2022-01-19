import './App.css';
import React, { useEffect, useState } from 'react';
import AdaptableGrid from './Components/AdaptableGrid/AdaptableGrid'
import SearchBar from './Components/SearchBar/SearchBar'

function App() {

  const [pokemonList, setPokemonList] = useState([]);
  let filteredPokemons = []
  let search = ''

useEffect(() => {
     fetchPokeRequest()

}, [])

const fetchPokeRequest = async () => {
  const fetchPoke = await fetch('https://pokeapi.co/api/v2/pokemon?limit=500')
   const response = fetchPoke && await fetchPoke.json();
   setPokemonList(response)
}

const handleChange = (e) => {
search = e.target.value
  filterPokemons(search)
  
}

const filterPokemons = (search) => {

 filteredPokemons = pokemonList.results.filter(pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase()));
  // prendo correttamente la lista dei pokemon filtrati
}

  return (
    <div className="App">
      {console.log(pokemonList)}
      
      <div className='App-title'>Pokemon Database</div>
      <SearchBar handleChange={handleChange}/>
      <AdaptableGrid pokemons={pokemonList} searchValue={search}/>
    </div>
  );
};

export default App;
