import './App.css';
import React, { useEffect, useState } from 'react';
import AdaptableGrid from './Components/AdaptableGrid/AdaptableGrid'
import SearchBar from './Components/SearchBar/SearchBar'

function App() {
  const [initialPokeList, setInitialPokeList] = useState([])
   const [pokemonList, setPokemonList] = useState([]);
  let filteredPokemons = []
  const [search, setSearch] = useState('')
  // let search = ''

useEffect(() => {
     fetchPokeRequest()
    
}, [])

const fetchPokeRequest = async () => {
  const fetchPoke = await fetch('https://pokeapi.co/api/v2/pokemon?limit=500')
   const response = fetchPoke && await fetchPoke.json();
   setInitialPokeList(response.results)
  
}

const handleChange = (e) => {
setSearch(e.target.value);
filteredPokemons = initialPokeList.filter(pokemon => pokemon.name.toLowerCase().includes(e.target.value.toLowerCase()));
setPokemonList(filteredPokemons)

  
}

const renderFilter = () => {

  if(search === '') {
    return <AdaptableGrid pokemons={initialPokeList}/>
  } else {
    return <AdaptableGrid pokemons={pokemonList} />
  }
}

  return (
    <div className="App">
      <div className='App-title'>Pokemon Database</div>
      <SearchBar handleChange={handleChange} />
      {renderFilter()}
    </div>
  );
};

export default App;
