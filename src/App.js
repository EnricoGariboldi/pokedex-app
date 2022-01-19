import './App.css';
import React, { useEffect, useState } from 'react';
import AdaptableGrid from './Components/AdaptableGrid/AdaptableGrid'
import SearchBar from './Components/SearchBar/SearchBar'

function App() {
  const [initialPokeList, setInitialPokeList] = useState([])
   const [pokemonList, setPokemonList] = useState([]);
  let filteredPokemons = []
  let search = ''

useEffect(() => {
     fetchPokeRequest()
    
}, [])

const fetchPokeRequest = async () => {
  const fetchPoke = await fetch('https://pokeapi.co/api/v2/pokemon?limit=500')
   const response = fetchPoke && await fetchPoke.json();
   setInitialPokeList(response.results)
  
}

const handleChange = (e) => {
search = e.target.value
  filterPokemons(search)
  
}

const filterPokemons = (search) => {

 filteredPokemons = initialPokeList.filter(pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase()));
setPokemonList(filteredPokemons)
}

  return (
    <div className="App">
      
      <div className='App-title'>Pokemon Database</div>
      <SearchBar handleChange={handleChange} />

      {pokemonList.length ? (<AdaptableGrid pokemons={pokemonList} />) : (<AdaptableGrid pokemons={initialPokeList} />)}
      
    </div>
  );
};

export default App;
