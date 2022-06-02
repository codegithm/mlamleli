import { Box, Stack, Typography } from "@mui/material";
import React from "react";

function Footer() {
  const responsiveFooter = {
    display: { lg: "flex", md: "flex", sm: "none", xs: "none" },
  };
  const footerTitle = {
    fontSize: { lg: "40px", md: "28px", sm: "19px", xs: "17px" },
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        bottom: 0,
        color: "#fff",
      }}
    >
      <Stack direction='row' sx={responsiveFooter}>
        <Box
          flex={1}
          sx={{
            backgroundColor: "#f2d02f",
            height: 48,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant='h5'
            sx={{
              fontSize: "17px",
            }}
          >
            OUR PLANS
          </Typography>
        </Box>
        <Box
          flex={1}
          sx={{
            backgroundColor: "#8f6818",
            height: 48,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant='h5'
            sx={{
              fontSize: "17px",
            }}
          >
            OUR SERVICES
          </Typography>
        </Box>
        <Box
          flex={1}
          sx={{
            backgroundColor: "#10100a",
            height: 48,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant='h5'
            sx={{
              fontSize: "17px",
            }}
          >
            OUR SERVICES
          </Typography>
        </Box>
        <Box
          flex={1}
          sx={{
            backgroundColor: "#910024",
            height: 48,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant='h5'
            sx={{
              fontSize: "17px",
            }}
          >
            CONTACT US
          </Typography>
        </Box>
      </Stack>
      <Box
        sx={{
          backgroundColor: "#910024",
          padding: "4em 0em 2em 0rem",
          textAlign: "center",
        }}
      >
        <Typography variant='h5' sx={footerTitle}>
          Mlamleli's Funeral Parlours is an authorized financial services
          provider FSP No 45691
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
