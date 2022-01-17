import React from "react";
import Grid from "@mui/material/Grid";
import "./AdaptableGrid.css";
import { useNavigate } from "react-router-dom";
import navigateToPokemon from "../../Services/navigateToPokemon";

const AdaptableGrid = (pokemons) => {
  const navigate = useNavigate();

  return (
    <div id="adaptGrid" className="AdaptableGrid">
      <Grid container spacing={3}>
        {console.log(pokemons.pokemons)}

        {pokemons.pokemons.length
          ? pokemons.pokemons.map((element) => {
              return (
                <Grid item xs={12} sm={4} md={3} key={element.id}>
                  <div
                    className="AdaptableGrid-card-container"
                    onClick={() => {
                      let navState = null;

                      navState = navigateToPokemon(element);

                      navigate("/PokemonSpecs", {
                        state: navState,
                      });
                    }}
                  >
                    <div className="AdaptableGrid-img-container">
                      <img alt="pokemon" src={element.sprites.front_default} />
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
