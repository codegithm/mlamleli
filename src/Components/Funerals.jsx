import React from "react";
import { Stack } from "@mui/material";
import Banner from "./Banner";
import FuneralItem from "./FuneralItem";

const widthBox = window.innerWidth;
const responsiveFuneralCont = {
  marginTop: { lg: "104px", sm: "0px", xs: "0px", md: "104px" },
  display: "flex",
  minHeight: `${
    widthBox > 900 ? "calc(100vh - 304px)" : "calc(100vh - 310px)"
  }`,
  height: "auto",
  paddingBottom: "2rem",
  paddingTop: { lg: "2rem", sm: "0", md: "0px", xs: "0px" },
};
const funerals = {
  flexDirection: { lg: "row", sm: "column", xs: "column", md: "row" },
  paddingTop: "30px",
  justifyContent: "center",
  alignItems: "center",
};
function Funerals() {
  let width = window.innerWidth;
  return (
    <Stack direction={"column"} sx={responsiveFuneralCont}>
      <Banner
        header='OUR FUNERALS'
        bannerColor={
          window.matchMedia("(orientation: potrait)").matches || width >= 900
            ? "#423b3d"
            : "#910024"
        }
      />
      <Stack sx={funerals}>
        <FuneralItem
          name='David Temba Gwabeni'
          address='Manxeba Village'
          date='14 April 2022'
          items={[
            "/david1.jpg",
            "/david2.jpg",
            "/david3.jpg",
            "/david4.jpg",
            "/david5.jpg",
          ]}
        />
        <FuneralItem
          name='The Mehlomakulu Funeral'
          address='Phelandaba Forthoek'
          date='26 March 2022'
          items={[
            "/mehlo1.jpg",
            "/mehlo2.jpg",
            "/mehlo3.jpg",
            "/mehlo4.jpg",
            "/mehlo5.jpg",
          ]}
        />
      </Stack>
    </Stack>
  );
}

export default Funerals;
