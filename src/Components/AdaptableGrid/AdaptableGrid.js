import React from "react";
import Grid from "@mui/material/Grid";
import "./AdaptableGrid.css"


const AdaptableGrid = (pokeList) => {

/*
    {console.log(pokemonList)}
  <Grid container spacing={3}>
  <div id="insHere">
    <Grid item xs={12} sm ={4} md={3}>
    <div className="AdaptableGrid-card-container">
    <div className="AdaptableGrid-img-container">
    <img alt='pokemon' src=/>
    </div>
      <div className="AdaptableGrid-poke-name">
        ...
        </div>
      </div>
    </Grid>
</div>
  </Grid>
  */

return (

  <div id="adaptGrid" className="AdaptableGrid">
    

    { 
      pokeList.map( element => {
        return(
        <Grid container spacing={3}>
        <div id="insHere">
          <Grid item xs={12} sm ={4} md={3}>
          <div className="AdaptableGrid-card-container">
          <div className="AdaptableGrid-img-container">
          <img alt='pokemon' src="https://img.pokemondb.net/artwork/large/bulbasaur.jpg "/>
          </div>
            <div className="AdaptableGrid-poke-name">

             {element.name}
              </div>
            </div>
          </Grid>
      </div>
        </Grid>
        )
      })
    
  }

  

</div>


)
}

export default AdaptableGrid;