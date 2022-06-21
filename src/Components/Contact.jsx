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
                  fontSize: "24px",
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
                  width: "100%",
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
                    <Stack
                      direction='row'
                      sx={{
                        alignItems: "center",
                      }}
                    >
                      <Typography variant='h6' sx={{ fontSize: "14px" }}>
                        Tel:
                      </Typography>{" "}
                      <Typography variant='p'> 051 611 0013</Typography>
                    </Stack>
                    <Stack
                      direction='column'
                      sx={{
                        alignItems: "flex-start",
                      }}
                    >
                      <Typography
                        variant='h6'
                        sx={{ fontSize: "14px", fontWeight: 500 }}
                      >
                        Email:
                      </Typography>{" "}
                      <Typography variant='p'>
                        {" "}
                        {" info@mlamlelifunerals.co.za"}
                      </Typography>
                    </Stack>
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
                    {/* <Typography variant='p'>27 Main Street</Typography>
                    <Typography variant='p'>Sterkspruit</Typography>
                    <Typography variant='p'>Eastern Cape</Typography>
                    <Typography variant='p'>9762</Typography> */}
                    <Stack
                      direction='row'
                      sx={{
                        alignItems: "center",
                      }}
                    >
                      <Typography variant='h6' sx={{ fontSize: "14px" }}>
                        Tel:
                      </Typography>{" "}
                      <Typography variant='p'> 082 487 0823</Typography>
                    </Stack>
                    <Stack
                      direction='column'
                      sx={{
                        alignItems: "flex-start",
                      }}
                    >
                      <Typography
                        variant='h6'
                        sx={{ fontSize: "14px", fontWeight: 500 }}
                      >
                        Email:
                      </Typography>{" "}
                      <Typography variant='p'>
                        {" "}
                        {" info@mlamlelifunerals.co.za"}
                      </Typography>
                    </Stack>
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
                    <Stack
                      direction='row'
                      sx={{
                        alignItems: "center",
                      }}
                    >
                      <Typography variant='h6' sx={{ fontSize: "14px" }}>
                        Tel:
                      </Typography>{" "}
                      <Typography variant='p'> 051 023 0266</Typography>
                    </Stack>
                    <Stack
                      direction='column'
                      sx={{
                        alignItems: "flex-start",
                      }}
                    >
                      <Typography
                        variant='h6'
                        sx={{ fontSize: "14px", fontWeight: 500 }}
                      >
                        Email:
                      </Typography>{" "}
                      <Typography variant='p'>
                        {" "}
                        {" info@mlamlelifunerals.co.za"}
                      </Typography>
                    </Stack>
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
                    <Stack
                      direction='row'
                      sx={{
                        alignItems: "center",
                      }}
                    >
                      <Typography variant='h6' sx={{ fontSize: "14px" }}>
                        Tel:
                      </Typography>{" "}
                      <Typography variant='p'> 051 023 0679</Typography>
                    </Stack>
                    <Stack
                      direction='column'
                      sx={{
                        alignItems: "flex-start",
                      }}
                    >
                      <Typography
                        variant='h6'
                        sx={{ fontSize: "14px", fontWeight: 500 }}
                      >
                        Email:
                      </Typography>{" "}
                      <Typography variant='p'>
                        {" "}
                        {" info@mlamlelifunerals.co.za"}
                      </Typography>
                    </Stack>
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
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Typography
                  variant='h5'
                  component='h2'
                  sx={{
                    fontSize: "24px",
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
                    maxWidth: "776px",
                    width: "100%",
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
                      <Stack
                        direction='row'
                        sx={{
                          alignItems: "center",
                        }}
                      >
                        <Typography variant='h6' sx={{ fontSize: "14px" }}>
                          Tel:
                        </Typography>{" "}
                        <Typography variant='p'> 051 023 0265</Typography>
                      </Stack>
                      <Stack
                        direction='column'
                        sx={{
                          alignItems: "flex-start",
                        }}
                      >
                        <Typography
                          variant='h6'
                          sx={{ fontSize: "14px", fontWeight: 500 }}
                        >
                          Email:
                        </Typography>{" "}
                        <Typography variant='p'>
                          {" "}
                          {" info@mlamlelifunerals.co.za"}
                        </Typography>
                      </Stack>
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
                      <Stack
                        direction='row'
                        sx={{
                          alignItems: "center",
                        }}
                      >
                        <Typography variant='h6' sx={{ fontSize: "14px" }}>
                          Tel:
                        </Typography>{" "}
                        <Typography variant='p'> 076 667 0685</Typography>
                      </Stack>
                      <Stack
                        direction='column'
                        sx={{
                          alignItems: "flex-start",
                        }}
                      >
                        <Typography
                          variant='h6'
                          sx={{ fontSize: "14px", fontWeight: 500 }}
                        >
                          Email:
                        </Typography>{" "}
                        <Typography variant='p'>
                          {" "}
                          {" info@mlamlelifunerals.co.za"}
                        </Typography>
                      </Stack>
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
                      {/* <Typography variant='p'>27 Main Street</Typography>
                      <Typography variant='p'>Sterkspruit</Typography>
                      <Typography variant='p'>Eastern Cape</Typography>
                      <Typography variant='p'>9762</Typography> */}
                      <Stack
                        direction='row'
                        sx={{
                          alignItems: "center",
                        }}
                      >
                        <Typography variant='h6' sx={{ fontSize: "14px" }}>
                          Tel:
                        </Typography>{" "}
                        <Typography variant='p'> 083 738 8804</Typography>
                      </Stack>
                      <Stack
                        direction='column'
                        sx={{
                          alignItems: "flex-start",
                        }}
                      >
                        <Typography
                          variant='h6'
                          sx={{ fontSize: "14px", fontWeight: 500 }}
                        >
                          Email:
                        </Typography>{" "}
                        <Typography variant='p'>
                          {" "}
                          {" info@mlamlelifunerals.co.za"}
                        </Typography>
                      </Stack>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
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
