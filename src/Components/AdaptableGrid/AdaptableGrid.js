import React from "react";
import Grid from "@mui/material/Grid";
import "./AdaptableGrid.css";
import { useNavigate } from 'react-router-dom';

const AdaptableGrid = (pokemons) => {

  let navigate = useNavigate();
  let typeArray = [];
  let abilitiesArray = []

  console.log(pokemons)

  const defineAbilities = (element) => {
    element.abilities.map( getAbilities => {
      abilitiesArray.push(getAbilities.ability.name)
    } )
    return abilitiesArray
  }

  const defineType = (element) => {
    element.types.map( getType => {
      typeArray.push(getType.type.name)
    } )
    return typeArray
  }


  return (
    <div id="adaptGrid" className="AdaptableGrid">
      <Grid container spacing={3}>
        {pokemons.pokemons.length
          ? pokemons.pokemons.map((element) => {
            

              return (
                <Grid item xs={12}  sm={4} md={3} key={element.id}>

                    <div className="AdaptableGrid-card-container"  onClick={ () => {

                      defineType(element)
                      defineAbilities(element)

                      navigate('/PokemonSpecs', {state: [
                        element.sprites.front_default,
                        element.name,
                        element.height,
                        element.weight,
                        typeArray,
                        abilitiesArray
                      ] });
                    }
                      }>
                      <div className="AdaptableGrid-img-container">
                        <img
                          alt="pokemon"
                          src={element.sprites.front_default}
                        />
                      </div>
                      <div className="AdaptableGrid-poke-name">
                        {element.name}
                      </div>
                    </div>
                  
                </Grid>
              );
            })
          : null}
      </Grid>
    </div>
  );
};

export default AdaptableGrid;
