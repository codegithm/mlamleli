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

const firstPlans = {
  display: "flex",
  flexDirection: { lg: "row", sm: "column", md: "row", xs: "column" },
  justifyContent: "center",
  alignItems: "center",
  width: "100vw",
  paddingTop: "30px",
  paddingLeft: { lg: "10px", sm: "0px", md: "10px", xs: "0px" },
  paddingRight: { lg: "10px", sm: "0px", md: "10px", xs: "0px" },
  flexWrap: { lg: "nowrap", sm: "nowrap", md: "wrap", xs: "nowrap" },
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
          covered='18-64 R12 500 Cover'
          premium='R195 pm'
          backColor='#910024'
        />
        <Plan
          plan='Plan 2'
          details='1+9 Casket Funeral Plan'
          covered='18-64 R12 000 Cover'
          premium='R260 pm'
          backColor='#910024'
        />
        <Plan
          plan='Plan 3'
          details='Plan A 3 Tier Coffin Funeral Plan'
          covered='18-64 R10 000 Cover'
          premium='R195 pm'
          backColor='#910024'
        />

        <Plan
          plan='Plan 4'
          details='Plan B Family Casket Funeral Plan'
          covered='18-64 R20 000 Cover'
          premium='R170 pm'
          backColor='#910024'
        />
        <Plan
          plan='Plan 5'
          details='Plan C Family Casket Funeral Plan'
          covered='18-64 R10 000 Cover'
          premium='R195 pm'
          backColor='#910024'
        />
      </Box>
    </Stack>
  );
}

export default Plans;
