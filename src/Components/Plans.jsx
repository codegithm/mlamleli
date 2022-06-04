import React from "react";
import { Box, Stack } from "@mui/material";
import Banner from "./Banner";

const widthBox = window.innerWidth;
const responsivePlansCont = {
  marginTop: { lg: "104px", sm: "0px", xs: "0px", md: "104px" },
  display: "flex",
  minHeight: `${
    widthBox > 900 ? "calc(100vh - 304px)" : "calc(100vh - 310px)"
  }`,
  height: "auto",
  paddingBottom: "2rem",
  paddingTop: { lg: "2rem", sm: "0", md: "0px", xs: "0px" },
};
function Plans() {
  let width = window.innerWidth;
  return (
    <Stack direction={"column"} sx={responsivePlansCont}>
      <Banner
        header='OUR PLANS'
        bannerColor={
          window.matchMedia("(orientation: potrait)").matches || width >= 900
            ? "#f2d02f"
            : "#910024"
        }
      />
    </Stack>
  );
}

export default Plans;
