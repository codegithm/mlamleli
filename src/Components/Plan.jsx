import React from "react";
import { Paper, Box, Stack, Typography } from "@mui/material";
const responsivePaper = {
  minWidth: 245,
  width: "auto",
  paddingTop: "2rem",
  paddingBottom: "2rem",
  height: "auto",
  maxWidth: "329.83px",
  maxHeight: 480,
  borderRadius: 7,
  display: "flex",
  flexDirection: "column",
  backgroundColor: "grey",
  marginTop: "2rem",
  marginRight: "10px",
};
function Plan({ plan, details, covered, premium, backColor }) {
  return (
    <Paper elevation={4} sx={responsivePaper}>
      <Stack direction='column'>
        <Box
          sx={{
            paddingLeft: "10px",
          }}
        >
          <Typography variant='h4' component='h2'>
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
            <Typography
              variant='h5'
              component='p'
              sx={{
                fontSize: "19px",
              }}
            >
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
            <Typography
              variant='h6'
              component='p'
              sx={{
                fontSize: "14px",
              }}
            >
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
          <Typography variant='h4' component='p'>
            {premium}
          </Typography>
        </Box>
      </Stack>
    </Paper>
  );
}

export default Plan;
