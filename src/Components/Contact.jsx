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
import Enquiry from "./Enquiry";
import LoadingModal from "./LoadingModal";
import Success from "./Success";
import Error from "./Error";

const widthBox = window.innerWidth;
const responsiveContactCont = {
  marginTop: { lg: "104px", sm: "0px", xs: "0px", md: "104px" },
  display: "flex",
  height: "auto",
  minHeight: `${
    widthBox > 900 ? "calc(100vh - 304px)" : "calc(100vh - 310px)"
  }`,
  paddingBottom: "2rem",
  paddingTop: { lg: "2rem", sm: "0", md: "0px", xs: "0px" },
};
const message = {
  marginLeft: { lg: "0px", sm: "10px", md: "0px", xs: "10px" },
  justifyContent: "center",
  alignItems: "center",
  marginTop: "40px",
};
const details = {
  paddingTop: "30px",
  display: "flex",
  flexDirection: { lg: "column", sm: "column", md: "column", xs: "column" },
  justifyContent: {
    lg: "space-around",
    sm: "center",
    md: "space-around",
    xs: "center",
  },
};
function Contact() {
  window.scrollTo(0, 0);
  return (
    <Stack direction={"column"} sx={responsiveContactCont}>
      <LoadingModal message='SENDING' />
      <Success message='SENT' />
      <Error message='FAILED' />
      <Banner header='CONTACT US' bannerColor='#910024' />
      <Box sx={details}>
        <Box>
          <Typography
            variant='h4'
            component='h1'
            sx={{
              fontSize: "18px",
              fontWeight: 500,
              textAlign: "center",
              color: "#910024",
            }}
          >
            We are located in the Eastern Cape and Free State Provinces in South
            Africa
          </Typography>
          <Stack
            direction={"column"}
            sx={{
              paddingTop: "20px",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                paddingLeft: "20px",
                paddingRight: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                variant='h5'
                component='h2'
                sx={{
                  fontSize: "17px",
                  fontWeight: 500,
                  textAlign: "center",
                  marginBotton: "10px",
                }}
              >
                Eastern Cape Branches
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  maxWidth: "900px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    fontSize: "15px",
                    margin: "10px",
                  }}
                >
                  <Typography variant='h6'>Sterkspruit</Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography variant='p'>27 Main Street</Typography>
                    <Typography variant='p'>Sterkspruit</Typography>
                    <Typography variant='p'>Eastern Cape</Typography>
                    <Typography variant='p'>9762</Typography>
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    fontSize: "15px",
                    margin: "10px",
                  }}
                >
                  <Typography variant='h6'>Barkly East</Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography variant='p'>27 Main Street</Typography>
                    <Typography variant='p'>Sterkspruit</Typography>
                    <Typography variant='p'>Eastern Cape</Typography>
                    <Typography variant='p'>9762</Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    fontSize: "15px",
                    margin: "10px",
                  }}
                >
                  <Typography variant='h6'>Venterstad</Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography variant='p'>27 Main Street</Typography>
                    <Typography variant='p'>Sterkspruit</Typography>
                    <Typography variant='p'>Eastern Cape</Typography>
                    <Typography variant='p'>9762</Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    fontSize: "15px",
                    margin: "10px",
                  }}
                >
                  <Typography variant='h6'>Burgersdorp</Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography variant='p'>
                      Cnr of Coligny & Bird Str
                    </Typography>
                    <Typography variant='p'>Burgersdorp</Typography>
                    <Typography variant='p'>Eastern Cape</Typography>
                    <Typography variant='p'>9744</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                paddingLeft: "20px",
                paddingRight: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant='h5'
                  component='h2'
                  sx={{
                    fontSize: "17px",
                    fontWeight: 500,
                    textAlign: "center",
                    marginBotton: "10px",
                  }}
                >
                  Free State Branches
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    maxWidth: "900px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      fontSize: "15px",
                      margin: "10px",
                    }}
                  >
                    <Typography variant='h6'>Bethulie</Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Typography variant='p'>22 Voortrekker Street</Typography>
                      <Typography variant='p'>Bethulile</Typography>
                      <Typography variant='p'>Free State</Typography>
                      <Typography variant='p'>9992</Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      fontSize: "15px",
                      margin: "10px",
                    }}
                  >
                    <Typography variant='h6'>Springfontein</Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Typography variant='p'>27 Main Street</Typography>
                      <Typography variant='p'>Sterkspruit</Typography>
                      <Typography variant='p'>Eastern Cape</Typography>
                      <Typography variant='p'>9762</Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      fontSize: "15px",
                      margin: "10px",
                    }}
                  >
                    <Typography variant='h6'>Rouxville</Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Typography variant='p'>27 Main Street</Typography>
                      <Typography variant='p'>Sterkspruit</Typography>
                      <Typography variant='p'>Eastern Cape</Typography>
                      <Typography variant='p'>9762</Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Stack>
        </Box>
        <Box
          sx={{
            marginTop: "15px",
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
            Mlamleli branch office contact details
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
      <Stack direction={"column"} sx={message}>
        <Typography
          variant='h6'
          component='h1'
          textAlign={"center"}
          sx={{
            color: "#910024",
          }}
        >
          Send us a massage
        </Typography>
        <Enquiry />
      </Stack>
    </Stack>
  );
}

export default Contact;
