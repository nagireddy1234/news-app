import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Grid } from "@mui/material";

const Spinner = () => (
  <Grid
    width='100%'
    container
    alignItems='center'
    justifyContent='center'
    height='100vh'
    position='fixed'
    zIndex={99}
  >
    <CircularProgress />
  </Grid>
);

export default Spinner;
