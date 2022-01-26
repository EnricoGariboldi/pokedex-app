import "./PokemonSpecs.css";
import React from "react";
import { Grid } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import LinearProgressWithLabel from "./Components/ProgressBar/ProgressBar";

const PokemonSpecs = () => {
  let navigate = useNavigate();
  const location = useLocation();

  console.log(location);

  const redirect = () => {
    navigate("/", { state: null });
  };

  return (
    <div className="PokemonSpecs">
      <div className="PokemonSpecs-backToPokedex">
        <Stack direction="row" justifyContent="center">
          <Button
            sx={{ display: "flex", justifyContent: "center" }}
            size="large"
            variant="contained"
            onClick={redirect}
          >
            Return to Pokedex
          </Button>
        </Stack>
      </div>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={6}>
          <div className="PokemonSpecs-poke-container">
            <div className="PokemonSpecs-img-container">
              <img alt="pokemon" src={location.state.img} />
            </div>
            <div className="PokemonSpecs-poke-name">{location.state.name}</div>
          </div>

          <br></br>

          <Grid item xs={12} sm={12} md={12}>
            <div className="PokemonSpecs-specs-bar">
              <div className="PokemonSpecs-specs-title">Stats:</div>
              <div className="PokemonsSpecs-specs-attributes">
                Hp / Attack / Defense / Special Attack / Special Defense / Speed
              </div>
              <div className="PokemonSpecs-specs-data">
                {location.state.stats.map((element) => {
                  return (
                    <div>
                      <LinearProgressWithLabel progress={element} />
                    </div>
                  );
                })}
              </div>
            </div>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <div className="PokemonSpecs-specs-container">
            <div className="PokemonSpecs-specs-section">
              <div className="PokemonSpecs-specs-title">Height:</div>
              <div className="PokemonSpecs-specs-data">
                {location.state.height}
              </div>
            </div>

            <div className="PokemonSpecs-specs-section">
              <div className="PokemonSpecs-specs-title">Weight:</div>
              <div className="PokemonSpecs-specs-data">
                {location.state.weight}
              </div>
            </div>

            <div className="PokemonSpecs-specs-section">
              <div className="PokemonSpecs-specs-title">Category:</div>
              <div className="PokemonSpecs-specs-data">
                {location.state.types.map((element) => {
                  return <div>{element}</div>;
                })}
              </div>
            </div>

            <div className="PokemonSpecs-specs-section">
              <div className="PokemonSpecs-specs-title">Abilities:</div>
              <div className="PokemonSpecs-specs-data">
                {location.state.abilities.map((element) => {
                  return <div>{element}</div>;
                })}
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default PokemonSpecs;
