import React from "react";
import {
  Box,
  Stack,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Banner from "./Banner";
import Service from "./Service";

const widthBox = window.innerWidth;
const responsiveServicesCont = {
  marginTop: { lg: "104px", sm: "0px", xs: "0px", md: "104px" },
  display: "flex",
  height: "auto",
  minHeight: `${
    widthBox > 900 ? "calc(100vh - 304px)" : "calc(100vh - 330px)"
  }`,
  paddingBottom: "2rem",
  paddingTop: { lg: "2rem", sm: "0", md: "0px", xs: "0px" },
};
function Services() {
  let width = window.innerWidth;
  return (
    <Stack direction={"column"} sx={responsiveServicesCont}>
      <Banner
        header='OUR SERVICES'
        bannerColor={
          window.matchMedia("(orientation: potrait)").matches || width >= 900
            ? "#10100a"
            : "#910024"
        }
      />

      <Box
        sx={{
          paddingLeft: "20px",
          paddingRight: "20px",
          paddingTop: "20px",
          minHeight: "400px",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant='h5'
          component='h2'
          sx={{
            fontSize: "20px",
            fontWeight: 500,
            color: "#910024",
            padding: "15px",
            border: "solid 3px",
            borderRadius: "15px",
            backgroundColor: "#f2d02f",
          }}
        >
          We offer
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "30px",
          }}
        >
          <Service name='Mortuary Storage services' />
          <Service name='Repatriation' />
          <Service name='Burial services' />
          <Service name='Cremations' />
          <Service name='Financial services' />
          <Service name='Tombstone Installations' />
          <Service name='Exhumations' />
          <Service name='Equipment Hire' />
        </Box>
      </Box>
    </Stack>
  );
}

export default Services;
