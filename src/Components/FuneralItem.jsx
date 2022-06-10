import React, { useContext } from "react";
import { Stack, Paper, Typography, Button } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import HomeIcon from "@mui/icons-material/Home";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { AppContext } from "../AppContext";
import { useNavigate } from "react-router-dom";

const responsivePaper = {
  width: "auto",
  padding: "2rem",
  height: "auto",
  maxWidth: "329.83px",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "grey",
  marginBottom: "10px",
  marginRight: { lg: "10px", sm: "0px", md: "10px", xs: "0px" },
};
const viewBtn = {
  fontSize: { lg: "11px", sm: "17px", md: "11px", xs: "17px" },
  marginTop: "17px",
  backgroundColor: "primary",
};
function FuneralItem({ name, address, date, items }) {
  const { galleryArr } = useContext(AppContext);
  const [gallery, setGallery] = galleryArr;
  let navigate = useNavigate();
  return (
    <Paper elevation={2} sx={responsivePaper}>
      <Stack direction='column'>
        <Stack direction='row'>
          <AccountBoxIcon />
          <Typography>{name}</Typography>
        </Stack>
        <Stack direction='row'>
          <HomeIcon />
          <Typography>{address}</Typography>
        </Stack>
        <Stack direction='row'>
          <CalendarMonthIcon />
          <Typography>{date}</Typography>
        </Stack>
      </Stack>
      <Button
        onClick={() => {
          setGallery(items);
          navigate("/gallery");
        }}
        variant='contained'
        sx={viewBtn}
        fullWidth
      >
        VIEW FUNERAL
      </Button>
    </Paper>
  );
}

export default FuneralItem;
