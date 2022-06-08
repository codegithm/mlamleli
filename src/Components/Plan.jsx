import React from "react";
import { Paper, Box, Stack, Typography, Button } from "@mui/material";
const responsivePaper = {
  width: "auto",
  paddingTop: "2rem",
  paddingBottom: "2rem",
  height: "auto",
  maxWidth: "329.83px",
  maxHeight: 480,
  display: "flex",
  flexDirection: "column",
  backgroundColor: "grey",
  marginBottom: "10px",
  marginRight: { lg: "10px", sm: "0px", md: "10px", xs: "0px" },
};
const title = {
  fontSize: { lg: "1.125rem", sm: "2rem", md: "1.125rem", xs: "2rem" },
};
const expandBtn = {
  fontSize: { lg: "11px", sm: "17px", md: "11px", xs: "17px" },
  marginTop: "17px",
  backgroundColor: "primary",
};
const detailsStyle = {
  fontSize: { lg: "14px", sm: "19px", md: "14px", xs: "19px" },
};
const coverdStyle = {
  fontSize: { lg: "11px", sm: "14px", md: "11px", xs: "14px" },
};
function Plan({ plan, details, covered, premium, backColor }) {
  return (
    <Paper elevation={2} sx={responsivePaper}>
      <Stack
        direction='column'
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant='h4' component='h2' sx={title}>
            {plan}
          </Typography>
        </Box>
        <Stack
          direction='column'
          sx={{
            paddingTop: "34px",
            paddingBottom: "34px",
            marginTop: "10px",
            marginBottom: "10px",
            color: "#fff",
            backgroundColor: `${backColor}`,
            width: "100%",
            maxWidth: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant='h5' component='p' sx={detailsStyle}>
              {details}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant='h6' component='p' sx={coverdStyle}>
              {covered}
            </Typography>
          </Box>
        </Stack>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant='h4' component='p' sx={title}>
            {premium}
          </Typography>
        </Box>
        <Box
          sx={{
            width: "90%",
          }}
        >
          <Button variant='contained' sx={expandBtn} fullWidth>
            Click to expand & view benefits
          </Button>
        </Box>
      </Stack>
    </Paper>
  );
}

export default Plan;
