import React from "react";
import { Stack, Typography, TextField, Paper, Button } from "@mui/material";
import Banner from "./Banner";

const responsiveSignInCont = {
  marginTop: { lg: "104px", sm: "0px", xs: "0px", md: "104px" },
  display: "flex",
  height: "auto",
  paddingBottom: "2rem",
  paddingTop: { lg: "2rem", sm: "0", md: "0px", xs: "0px" },
};

const responsivePaper = {
  minWidth: 245,
  width: "auto",

  height: "auto",
  maxWidth: "329.83px",
  maxHeight: 480,
  borderRadius: 7,
  display: "flex",
  flexDirection: "column",
  padding: "2rem 2rem",
  marginTop: "2rem",
  marginRight: "10px",
  marginLeft: { lg: "20px", sm: "10px", md: "10px", xs: "10px" },
};

function SignIn() {
  return (
    <Stack direction={"column"} sx={responsiveSignInCont}>
      <Banner header='MEMBER LOGIN' />
      <Paper elevation={4} sx={responsivePaper}>
        <Typography
          variant='h6'
          component='h1'
          textAlign={"center"}
          sx={{
            color: "#910024",
          }}
        >
          Only Mlameli Registered members have access to this portal
        </Typography>
        <TextField
          id='username'
          label='Userame'
          variant='standard'
          sx={{
            marginTop: "17px",
          }}
          color='primary'
        />
        <TextField
          id='password'
          label='Password'
          variant='standard'
          sx={{
            marginTop: "17px",
          }}
          color='primary'
        />

        <Button
          variant='contained'
          href='#'
          sx={{
            marginTop: "17px",
            backgroundColor: "primary",
          }}
        >
          SIGN IN
        </Button>
      </Paper>
    </Stack>
  );
}

export default SignIn;
