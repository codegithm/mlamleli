import React, { useContext } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import ErrorOutlineOutlined from "@mui/icons-material/ErrorOutlineOutlined";
import Typography from "@mui/material/Typography";
import { AppContext } from "../AppContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "200px",
  backgroundColor: "#fff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "200px",
  borderRadius: "15px",
  borderStyle: "none",
  flexDirection: "column",
};

function Error({ message }) {
  const { error } = useContext(AppContext);
  const [openError, setOpenError] = error;
  const handleClose = () => setOpenError(false);
  return (
    <div>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        open={openError}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        onClose={handleClose}
      >
        <Fade in={openError}>
          <Box sx={style}>
            <Typography
              id='transition-modal-title'
              variant='h6'
              component='h2'
              color='red'
            >
              {message}
            </Typography>
            <ErrorOutlineOutlined
              sx={{
                fontSize: "60px",
                color: "red",
              }}
            />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default Error;
