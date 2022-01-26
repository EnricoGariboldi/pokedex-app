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
        {pokemons.pokemons
          ? pokemons.pokemons.map((element) => {
              return (
                <Grid item xs={12} sm={4} md={3} key={element.name}>
                  <div
                    className="AdaptableGrid-card-container"
                    onClick={async () => {
                      let navState = null;

                      navState = await navigateToPokemon(element);

                      navigate("/PokemonSpecs", {
                        state: navState,
                      });
                    }}
                  >
                    <div className="AdaptableGrid-img-container">
                      <img alt="pokemon" loading="lazy" src={`https://img.pokemondb.net/artwork/large/${element.name}.jpg`} />
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
