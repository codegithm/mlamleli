import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import Carousel from "react-material-ui-carousel";
import CloseIcon from "@mui/icons-material/Close";
import { AppContext } from "../AppContext";
import { useNavigate } from "react-router-dom";

function Gallery() {
  const { galleryArr } = useContext(AppContext);
  const [gallery, setGallery] = galleryArr;
  let navigate = useNavigate();
  return (
    <Box>
      <CloseIcon
        onClick={() => {
          navigate("/funerals");
        }}
        sx={{
          color: "#fff",
          width: "50px",
          height: "auto",
          position: "absolute",
          top: 10,
          zIndex: 300,
        }}
      />
      <Carousel
        sx={{
          position: "absolute",
          top: 0,
          width: "100vw",
          minHeight: "100vh",
          maxHeight: "100vh",
          zIndex: 200,
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {gallery.map((item) => (
          <Box
            sx={{
              backgroundImage: `url(${item})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100vw",
              maxWidth: "600px",
              minHeight: "80vh",
              maxHeight: "100vh",
              margin: "auto",
            }}
          ></Box>
        ))}
      </Carousel>
    </Box>
  );
}

export default Gallery;
