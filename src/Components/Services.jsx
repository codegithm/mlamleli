import React from "react";
import { Box, Stack } from "@mui/material";
import Banner from "./Banner";

const responsiveServicesCont = {
  marginTop: { lg: "104px", sm: "0px", xs: "0px", md: "104px" },
  display: "flex",
  height: "auto",
  minHeight: "100vh",
  paddingBottom: "2rem",
  paddingTop: { lg: "2rem", sm: "0", md: "0px", xs: "0px" },
};
function Services() {
  let width = window.innerWidth;
  return (
    <Stack direction={"column"} sx={responsiveServicesCont}>
      <Banner
        header='OUR PLANS'
        bannerColor={
          window.matchMedia("(orientation: potrait)").matches || width >= 900
            ? "#10100a"
            : "#910024"
        }
      />
    </Stack>
  );
}

export default Services;
