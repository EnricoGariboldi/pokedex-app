import React from "react";
import Grid from "@mui/material/Grid";
import "./AdaptableGrid.css"


const AdaptableGrid = (pokemons) => {

/*
    {console.log(pokemonList)}
  <Grid container spacing={3}>
  <div id="insHere">
    <Grid item xs={12} sm ={4} md={3}>
    <div className="AdaptableGrid-card-container">
    <div className="AdaptableGrid-img-container">
    <img alt='pokemon' src=""/>
    </div>
      <div className="AdaptableGrid-poke-name">
        ...
        </div>
      </div>
    </Grid>
</div>
  </Grid>
  */

const renderGrid = () => {

  console.log(pokemons)

  
  for (let index = 0; index < pokemons.pokemons.length; index++) {
    
    return(
      <Grid container spacing={3}>
      <div id="insHere">
        <Grid item xs={12} sm ={4} md={3}>
        <div className="AdaptableGrid-card-container">
        <div className="AdaptableGrid-img-container">
        <img alt='pokemon' src={pokemons.pokemons[index].sprites.front_default}/>
        </div>
          <div className="AdaptableGrid-poke-name">
              {pokemons.pokemons[index].name}
            </div>
          </div>
        </Grid>
    </div>
      </Grid>
    )
    
  }
  
}



return (

  <div id="adaptGrid" className="AdaptableGrid">
     {renderGrid()} 
</div>


)
}

export default AdaptableGrid;