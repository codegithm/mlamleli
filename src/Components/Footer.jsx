import { Box, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../AppContext";

function Footer() {
  const { footer } = useContext(AppContext);
  const [footerColor, setFooterColor] = footer;
  const responsiveFooter = {
    display: { lg: "flex", md: "flex", sm: "none", xs: "none" },
  };
  const footerTitle = {
    fontSize: { lg: "18px", md: "18px", sm: "15px", xs: "15px" },
  };

  let navigate = useNavigate();
  let width = window.innerWidth;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        position: `${
          window.matchMedia("(orientation: landscape)").matches || width < 746
            ? "relative"
            : "absolute"
        }`,
        bottom: 0,
        color: "#fff",
        width: "100vw",
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
            cursor: "pointer",
          }}
          onClick={() => {
            navigate("/plans");
            setFooterColor("#f2d02f");
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
            cursor: "pointer",
          }}
          onClick={() => {
            navigate("/about");
            setFooterColor("#8f6818");
          }}
        >
          <Typography
            variant='h5'
            sx={{
              fontSize: "17px",
            }}
          >
            OUR STORY
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
            cursor: "pointer",
          }}
          onClick={() => {
            navigate("/services");
            setFooterColor("#10100a");
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
            cursor: "pointer",
          }}
          onClick={() => {
            navigate("/contact");
            setFooterColor("#910024");
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
          backgroundColor: `${footerColor}`,
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
