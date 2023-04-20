import React from "react";
import { Grid, Box } from "@mui/material";

function Home() {
  const boxStyle = {
    width: "200px",
    height: "200px",
    backgroundColor: "pink",
    color: "black",
    border: "1px solid black",
    marginTop: "100px",
  };
  const boxContentStyle = { margin: "75px" };
  return (
    <>
      <Grid container>
        <Grid item xs={6} align="center">
          <a href="/client">
            <Box style={boxStyle}>
              <p style={boxContentStyle}>Client</p>
            </Box>
          </a>
        </Grid>
        <Grid item xs={6} align="center">
          <a href="/dashboard">
            <Box style={boxStyle}>
              <p style={boxContentStyle}>Dashboard</p>
            </Box>
          </a>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
