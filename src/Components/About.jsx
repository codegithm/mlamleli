import React from "react";
import { Stack, Typography } from "@mui/material";
import Banner from "./Banner";

const responsiveAboutCont = {
  marginTop: { lg: "104px", sm: "0px", xs: "0px", md: "104px" },
  display: "flex",
  height: "auto",
  paddingBottom: "2rem",
  paddingTop: { lg: "2rem", sm: "0", md: "0px", xs: "0px" },
};
function About() {
  return (
    <Stack direction={"column"} sx={responsiveAboutCont}>
      <Banner
        header='OUR STORY'
        bannerColor={window.innerWidth > 600 ? "#8f6818" : "#910024"}
      />
      <Stack
        sx={{
          paddingTop: "30px",
        }}
      >
        <Typography
          variant='p'
          sx={{
            maxWidth: "400px",
            paddingLeft: "20px",
            paddingRight: "20px",
            paddingBottom: "10px",
          }}
        >
          Mlamleli's Funeral Parlour is a second generation family owned Funeral
          Parlour and authorized financial services provider FSP No:45961
        </Typography>
        <Typography
          variant='p'
          sx={{
            maxWidth: "400px",
            paddingLeft: "20px",
            paddingRight: "20px",
            paddingBottom: "10px",
          }}
        >
          Founded in 1984 we have been serving our communities with dignity for
          over 38 years providing 360 degree solutions to funeral services.
        </Typography>
      </Stack>
    </Stack>
  );
}

export default About;
