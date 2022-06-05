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
        }}
      >
        <Typography
          variant='h5'
          component='h2'
          sx={{
            fontSize: "20px",
            fontWeight: 500,
          }}
        >
          We offer:
        </Typography>
        <List dense={false}>
          <ListItem
            sx={{
              paddingTop: "0px",
              paddingBottom: "0px",
              fontSize: "7px",
            }}
          >
            <ListItemText primary='Mortuary Storage services ' />
          </ListItem>
          <ListItem
            sx={{
              paddingTop: "0px",
              paddingBottom: "0px",
              fontSize: "10px",
            }}
          >
            <ListItemText primary='Repatriation' />
          </ListItem>
          <ListItem
            sx={{
              paddingTop: "0px",
              paddingBottom: "0px",
              fontSize: "10px",
            }}
          >
            <ListItemText primary='Burial services' />
          </ListItem>
          <ListItem
            sx={{
              paddingTop: "0px",
              paddingBottom: "0px",
              fontSize: "10px",
            }}
          >
            <ListItemText primary='Cremations' />
          </ListItem>
          <ListItem
            sx={{
              paddingTop: "0px",
              paddingBottom: "0px",
              fontSize: "10px",
            }}
          >
            <ListItemText primary='Financial services' />
          </ListItem>
          <ListItem
            sx={{
              paddingTop: "0px",
              paddingBottom: "0px",
              fontSize: "10px",
            }}
          >
            <ListItemText primary='Tombstone Installations' />
          </ListItem>
          <ListItem
            sx={{
              paddingTop: "0px",
              paddingBottom: "0px",
              fontSize: "10px",
            }}
          >
            <ListItemText primary='Exhumations' />
          </ListItem>
          <ListItem
            sx={{
              paddingTop: "0px",
              paddingBottom: "0px",
              fontSize: "10px",
            }}
          >
            <ListItemText primary='Equipment Hire' />
          </ListItem>
        </List>
      </Box>
    </Stack>
  );
}

export default Services;
