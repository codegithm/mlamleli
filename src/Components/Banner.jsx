import React from "react";
import Back from "../assets/back.png";
import { Box, Typography } from "@mui/material";
function Banner({ header, bannerColor }) {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundImage: `url(${Back})`,
        backgroundPosition: "center",
        height: "245px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "60%",
          fontSize: "2rem",
          color: "#fff",
          backgroundColor: `${bannerColor}`,
          padding: "1rem 1rem 1rem 1rem",
          paddingLeft: "3rem",
        }}
      >
        <Typography
          variant='h4'
          component='h1'
          sx={{
            fontSize: "2rem",
          }}
        >
          {header}
        </Typography>
      </Box>
    </Box>
  );
}

export default Banner;
