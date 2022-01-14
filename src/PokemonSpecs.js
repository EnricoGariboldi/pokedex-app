import "./PokemonSpecs.css";
import React from "react";
import { Grid } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import { Stack } from "@mui/material";

const PokemonSpecs = () => {

  let navigate = useNavigate();
  const location = useLocation();

  const redirect = () => {
    navigate('/', {image: null});
}

  return (
    <div className="PokemonSpecs">

    {console.log(location.state)}

    <div className="PokemonSpecs-backToPokedex">
      <Stack direction="row"  justifyContent="center">
      <Button sx={{ display: "flex", justifyContent: "center" }} size="large" variant="contained" onClick={redirect}>
         Return to Pokedex
        </Button>
        </Stack>
        </div>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} md={4}>
        <div className="AdaptableGrid-img-container">
                        <img alt="pokemon" src={location.state[0]} />
                      </div>
                      <div>{location.state[1]}</div>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
            altezza,peso, tipo e abilità
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
            griglia con stats
            </Grid>
      </Grid>
    </div>
  );
};
export default PokemonSpecs;
