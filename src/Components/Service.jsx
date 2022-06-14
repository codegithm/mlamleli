import React from "react";
import { Stack, Paper, Typography } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

const responsivePaper = {
  width: "191px",
  padding: "7px",
  paddingTop: "15px",
  paddingBottom: "15px",
  height: "auto",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "grey",
  marginBottom: "10px",
  color: "#910024",
  marginRight: { lg: "10px", sm: "0px", md: "10px", xs: "0px" },
};

function Service({ name }) {
  return (
    <Paper elevation={0} sx={responsivePaper}>
      <Stack
        direction='column'
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AccountBoxIcon />
        <Typography>{name}</Typography>
      </Stack>
    </Paper>
  );
}

export default Service;
