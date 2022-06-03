import React from "react";
import {
  Box,
  Stack,
  Typography,
  ListItemText,
  List,
  ListItem,
} from "@mui/material";
import Banner from "./Banner";

const responsiveContactCont = {
  marginTop: { lg: "104px", sm: "0px", xs: "0px", md: "104px" },
  display: "flex",
  height: "auto",
  paddingBottom: "2rem",
  paddingTop: { lg: "2rem", sm: "0", md: "0px", xs: "0px" },
};
function Contact() {
  return (
    <Stack direction={"column"} sx={responsiveContactCont}>
      <Banner header='CONTACT US' bannerColor='#910024' />
      <Box
        sx={{
          paddingTop: "30px",
        }}
      >
        <Typography
          variant='h4'
          component='h1'
          sx={{
            fontSize: "17px",
            fontWeight: 500,
            textAlign: "center",
            color: "#910024",
          }}
        >
          We are located in the Eastern Cape and Free State Provinces in South
          Africa
        </Typography>
        <Stack
          direction={"row"}
          sx={{
            paddingTop: "20px",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              paddingLeft: "20px",
              paddingRight: "20px",
            }}
          >
            <Typography
              variant='h5'
              component='h2'
              sx={{
                fontSize: "14px",
                fontWeight: 500,
              }}
            >
              Eastern Cape Branches
            </Typography>
            <List dense={false}>
              <ListItem
                sx={{
                  paddingTop: "0px",
                  paddingBottom: "0px",
                  fontSize: "7px",
                }}
              >
                <ListItemText primary='Sterkspruit' />
              </ListItem>
              <ListItem
                sx={{
                  paddingTop: "0px",
                  paddingBottom: "0px",
                  fontSize: "10px",
                }}
              >
                <ListItemText primary='Barkly East' />
              </ListItem>
              <ListItem
                sx={{
                  paddingTop: "0px",
                  paddingBottom: "0px",
                  fontSize: "10px",
                }}
              >
                <ListItemText primary='Burgersdorp' />
              </ListItem>
              <ListItem
                sx={{
                  paddingTop: "0px",
                  paddingBottom: "0px",
                  fontSize: "10px",
                }}
              >
                <ListItemText primary='Venterstad' />
              </ListItem>
            </List>
          </Box>
          <Box>
            <Typography
              variant='h5'
              component='h2'
              sx={{
                fontSize: "14px",
                fontWeight: 500,
              }}
            >
              Free State Branches
            </Typography>
            <List dense={false}>
              <ListItem
                sx={{
                  paddingTop: "0px",
                  paddingBottom: "0px",
                  fontSize: "7px",
                }}
              >
                <ListItemText primary='Bethulie' />
              </ListItem>
              <ListItem
                sx={{
                  paddingTop: "0px",
                  paddingBottom: "0px",
                  fontSize: "10px",
                }}
              >
                <ListItemText primary='Springfontein' />
              </ListItem>
              <ListItem
                sx={{
                  paddingTop: "0px",
                  paddingBottom: "0px",
                  fontSize: "10px",
                }}
              >
                <ListItemText primary='Rouxville' />
              </ListItem>
            </List>
          </Box>
        </Stack>
        <Box>
          <Typography
            variant='h4'
            component='h1'
            sx={{
              fontSize: "17px",
              fontWeight: 500,
              textAlign: "center",
              color: "#910024",
            }}
          >
            MLAMLELI BRANCH OFFICE CONTCT DETAILS
          </Typography>
          <Stack
            direction={"row"}
            sx={{
              justifyContent: "center",
            }}
          >
            <List dense={false}>
              <ListItem
                sx={{
                  paddingTop: "0px",
                  paddingBottom: "0px",
                  fontSize: "7px",
                }}
              >
                <ListItemText primary='BURGERSDORP' />
              </ListItem>
              <ListItem
                sx={{
                  paddingTop: "0px",
                  paddingBottom: "0px",
                  fontSize: "10px",
                }}
              >
                <ListItemText primary='BETHULILE' />
              </ListItem>
              <ListItem
                sx={{
                  paddingTop: "0px",
                  paddingBottom: "0px",
                  fontSize: "10px",
                }}
              >
                <ListItemText primary='VENTERSTAD' />
              </ListItem>
              <ListItem
                sx={{
                  paddingTop: "0px",
                  paddingBottom: "0px",
                  fontSize: "10px",
                }}
              >
                <ListItemText primary='STERKSPRUIT' />
              </ListItem>
              <ListItem
                sx={{
                  paddingTop: "0px",
                  paddingBottom: "0px",
                  fontSize: "10px",
                }}
              >
                <ListItemText primary='SPRINGFONTEIN' />
              </ListItem>
            </List>
            <List dense={false}>
              <ListItem
                sx={{
                  paddingTop: "0px",
                  paddingBottom: "0px",
                  fontSize: "7px",
                }}
              >
                <ListItemText primary='051 023 0679' />
              </ListItem>
              <ListItem
                sx={{
                  paddingTop: "0px",
                  paddingBottom: "0px",
                  fontSize: "10px",
                }}
              >
                <ListItemText primary='051 023 0265' />
              </ListItem>
              <ListItem
                sx={{
                  paddingTop: "0px",
                  paddingBottom: "0px",
                  fontSize: "10px",
                }}
              >
                <ListItemText primary='051 023 0266' />
              </ListItem>
              <ListItem
                sx={{
                  paddingTop: "0px",
                  paddingBottom: "0px",
                  fontSize: "10px",
                }}
              >
                <ListItemText primary='051 611 0013' />
              </ListItem>
              <ListItem
                sx={{
                  paddingTop: "0px",
                  paddingBottom: "0px",
                  fontSize: "10px",
                }}
              >
                <ListItemText primary='076 667 0685' />
              </ListItem>
            </List>
          </Stack>
        </Box>
      </Box>
    </Stack>
  );
}

export default Contact;
