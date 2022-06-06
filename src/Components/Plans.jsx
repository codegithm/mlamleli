import React from "react";
import { Box, Stack } from "@mui/material";
import Banner from "./Banner";
import Plan from "./Plan";

const widthBox = window.innerWidth;
const responsivePlansCont = {
  marginTop: { lg: "104px", sm: "0px", xs: "0px", md: "104px" },
  display: "flex",
  minHeight: `${
    widthBox > 900 ? "calc(100vh - 304px)" : "calc(100vh - 330px)"
  }`,
  justifyContent: "center",
  alignItems: "center",
  with: "100vw",
  height: "auto",
  paddingBottom: "2rem",
  paddingTop: { lg: "2rem", sm: "0", md: "0px", xs: "0px" },
};
const secPlans = {
  display: { lg: "flex", sm: "column", md: "flex", xs: "column" },
  justifyContent: "center",
  alignItems: "center",
};
const firstPlans = {
  display: { lg: "flex", sm: "column", md: "flex", xs: "column" },
  justifyContent: "center",
  alignItems: "center",
};
function Plans() {
  window.scrollTo(0, 0);
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
      <Box sx={firstPlans}>
        <Plan
          plan='Plan 1'
          details='1+5 Casket Service Plan'
          covered='18-64 R12 000 Cover'
          premium='R195 pm'
          backColor={width < 900 ? "#910024" : "#f2d02f"}
        />
        <Plan
          plan='Plan 2'
          details='1+5 Casket Service Plan'
          covered='18-64 R12 000 Cover'
          premium='R260 pm'
          backColor={width < 900 ? "#910024" : "#f2d02f"}
        />
        <Plan
          plan='Plan 3'
          details='Plan A 3 Tier Coffin Plan'
          covered='18-64 R10 000 Cover'
          premium='R195 pm'
          backColor={width < 900 ? "#910024" : "#f2d02f"}
        />
      </Box>
      <Box direction='row' sx={secPlans}>
        <Plan
          plan='Plan 4'
          details='Plan C Family Casket Plan'
          covered='18-64 R20 000 Cover'
          premium='R170 pm'
          backColor={width < 900 ? "#910024" : "#f2d02f"}
        />
        <Plan
          plan='Plan 5'
          details='Plan B Family Casket Plan'
          covered='18-64 R10 000 Cover'
          premium='R195 pm'
          backColor={width < 900 ? "#910024" : "#f2d02f"}
        />
      </Box>
    </Stack>
  );
}

export default Plans;
