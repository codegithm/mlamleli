import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
  Stack,
} from "@mui/material";
import Back from "../assets/back.png";

function SignUp() {
  const [plan, setPlan] = useState("Select a plan");

  const handleChange = (event) => {
    setPlan(event.target.value);
  };
  const widthBox = window.innerWidth;
  const responsiveSignup = {
    marginTop: { lg: "104px", sm: "0px", xs: "0px", md: "104px" },
    display: "flex",
    height: "auto",
    minHeight: `${
      widthBox > 900 ? "calc(100vh - 304px)" : "calc(100vh - 310px)"
    }`,
    paddingBottom: "2rem",
    backgroundImage: `url(${Back})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    flexDirection: { lg: "row", sm: "column", xs: "column", md: "row" },
    paddingTop: { lg: "2rem", sm: "40", md: "43px", xs: "40px" },
  };

  const responsivePaper = {
    minWidth: 245,
    width: "auto",
    minHeight: 400,
    height: "auto",
    maxWidth: "329.83px",
    maxHeight: 480,
    borderRadius: 7,
    display: "flex",
    flexDirection: "column",
    padding: "2rem 2rem",
    marginTop: "2rem",
    marginRight: { lg: "80px", sm: "10px", md: "10px", xs: "10px" },
    marginLeft: { sm: "10px", md: "10px", xs: "10px" },
  };

  const resposniveHeader = {
    fontSize: { lg: "2.5rem", sm: "33px", md: "2.5rem", xs: "25px" },
    fontWeight: 600,
    marginLeft: "2rem",
  };
  const headerCont = {
    marginBottom: { lg: "0px", sm: "20px", md: "20px", xs: "20px" },
  };
  return (
    <Box sx={responsiveSignup}>
      <Box
        flex={1}
        sx={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Stack direction={"column"} sx={headerCont}>
          <Typography variant='h1' color='primary' sx={resposniveHeader}>
            Welcome to{" "}
          </Typography>
          <Typography variant='h1' color='primary' sx={resposniveHeader}>
            Mlamleli's Funeral Parlours
          </Typography>
        </Stack>
        <Box
          sx={{
            backgroundColor: "#8f6818",
            color: "#fff",
            padding: "1rem 1rem 1rem 1rem",
            fontWeight: "bold",
            paddingLeft: "2rem",
            fontSize: "1.3rem",
          }}
        >
          <Typography variant='h5'>
            Inkonzo Ethuthuzelayo Yabangcwabi
          </Typography>
        </Box>
      </Box>
      <Box
        flex={1}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Paper elevation={4} sx={responsivePaper}>
          <Typography variant='h6' component='h1' textAlign={"center"}>
            To Sign you up we will need a few details from you
          </Typography>
          <TextField
            id='name'
            label='Name'
            variant='standard'
            sx={{
              marginTop: "17px",
            }}
            color='primary'
          />
          <TextField
            id='email'
            label='Email'
            variant='standard'
            sx={{
              marginTop: "17px",
            }}
            color='primary'
          />

          <TextField
            id='number'
            label='Number'
            variant='standard'
            type='number'
            InputLabelProps={{
              shrink: true,
            }}
            sx={{
              marginTop: "17px",
            }}
            color='primary'
          />
          <FormControl variant='standard' sx={{ marginTop: "17px" }}>
            <InputLabel id='demo-simple-select-standard-label'>
              Select a plan
            </InputLabel>
            <Select
              labelId='demo-simple-select-standard-label'
              id='demo-simple-select-standard'
              value={plan}
              onChange={handleChange}
              label='Select a plan'
              color='primary'
            >
              <MenuItem value={"1+5 Casket Funeral Plan"}>
                1+5 Casket Funeral Plan
              </MenuItem>
              <MenuItem value={"1+9 Casket Funeral Plan"}>
                1+9 Casket Funeral Plan
              </MenuItem>
              <MenuItem value={"Plan A 3 Tier Coffin Funeral Plan"}>
                Plan A 3 Tier Coffin Funeral Plan
              </MenuItem>
              <MenuItem value={"Plan B Family Casket Funeral Plan"}>
                Plan B Family Casket Funeral Plan
              </MenuItem>
              <MenuItem value={"Plan C Family Casket Funeral Plan"}>
                Plan C Family Casket Funeral Plan
              </MenuItem>
            </Select>
          </FormControl>

          <Button
            variant='contained'
            href='#'
            sx={{
              marginTop: "17px",
              backgroundColor: "primary",
            }}
          >
            SIGN UP
          </Button>
        </Paper>
      </Box>
    </Box>
  );
}

export default SignUp;
