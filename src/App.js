import './App.css';
import React, { useEffect, useState } from 'react';
import AdaptableGrid from './Components/AdaptableGrid/AdaptableGrid'

function App() {

  const [pokemonList, setPokemonList] = useState([])

useEffect(() => {
     fetchPokeRequest()
  

}, [])

const fetchPokeRequest = async () => {
  const fetchPoke = await fetch('https://pokeapi.co/api/v2/pokemon?limit=25')
   const response = fetchPoke && await fetchPoke.json();
  let mergeSpecs = []
    for (let index = 0; index < response.results.length; index++) {
  const fetchDetails = await fetch(`${response.results[index].url}`)
   const resp = fetchDetails && await fetchDetails.json();
    mergeSpecs.push(resp)
}
  setPokemonList(mergeSpecs)
}

  return (
    <div className="App">
      <div className='App-title'>Pokemon Database</div>
      <AdaptableGrid pokemons={pokemonList}/>
    </div>
  );
};

export default App;
