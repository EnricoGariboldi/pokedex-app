import './App.css';
import React, { useCallback, useEffect, useState } from 'react';
import AdaptableGrid from './Components/AdaptableGrid/AdaptableGrid'
import { useAsyncLoader } from './Hooks/useAsyncLoader';
import {render} from 'react-dom';

function App() {

  const [pokemonList, setPokemonList] = useState([])
  

useEffect(() => {
fetchPokeRequest()


}, [])

const fetchPokeRequest = async () => {
  const fetchPoke = await fetch('https://pokeapi.co/api/v2/pokemon?limit=5')
   const response = fetchPoke && await fetchPoke.json();
    let mergeSpecs = []
     for (let index = 0; index < response.results.length; index++) {
    const fetchPokeData = await fetch(`${response.results[index].url}`);
    const specs = fetchPokeData && await fetchPokeData.json();
    mergeSpecs.push(specs)
}
  setPokemonList(mergeSpecs)
}



/*
const fetchPokeRequest = async () => {
  const fetchPoke = await fetch('https://pokeapi.co/api/v2/pokemon?limit=5')
   const response = fetchPoke && await fetchPoke.json();
   let mergeSpecs = [];
  response.results.forEach(async (element) => {
    const fetchPokeData = await fetch(`${element.url}`);
    const specs = fetchPokeData && await fetchPokeData.json();
    mergeSpecs.push(specs)
  })
  prova = mergeSpecs;
}
*/

/*
  const fetchPokeRequest = () => {
    return fetch('https://pokeapi.co/api/v2/pokemon?limit=5').then( (response) => {
      return response.json();
    }).then( (response2) => {
      let mergeSpecs = [];
      return response2.results.forEach((element) => {
        fetch(`${element.url}`).then((response3) => {
          return response3.json()
        }).then((response4) => {
          mergeSpecs.push(response4)
        })
        return mergeSpecs
      }).then((data) => {return data})
    })
  }

  const customHook = useAsyncLoader(
    useCallback(
      () => {
        return fetchPokeRequest()
      },
      [],
    )
  )
*/
  // const delay = ms => new Promise(res => setTimeout(res, ms));


  return (
    <div className="App">
      {console.log(pokemonList)}
      <div className='App-title'>Pokemon Database</div>
       {pokemonList.length? (<AdaptableGrid pokeList={pokemonList}/>) : ("Nessun Pokemon")}
       {console.log(pokemonList)}
    </div>
  );
};

export default App;
