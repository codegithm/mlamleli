import React, { useContext } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import { AppContext } from "../AppContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "200px",
  bgcolor: "background.paper",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "200px",
  borderRadius: "15px",
  borderStyle: "none",
  flexDirection: "column",
};

function LoadingModal() {
  const { modalLoad } = useContext(AppContext);
  const [open, setOpen] = modalLoad;

  return (
    <div>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        open={open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography
              id='transition-modal-title'
              variant='h6'
              component='h2'
              color='#910024'
            >
              SENDING
            </Typography>
            <CircularProgress />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default LoadingModal;
