import React, { useContext } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
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

function Success({ message }) {
  const { modalSuccess } = useContext(AppContext);
  const [openSuccess, setOpenSuccess] = modalSuccess;
  const handleClose = () => setOpenSuccess(false);
  return (
    <div>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        open={openSuccess}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        onClose={handleClose}
      >
        <Fade in={openSuccess}>
          <Box sx={style}>
            <Typography
              id='transition-modal-title'
              variant='h6'
              component='h2'
              color='#005a2f'
            >
              {message}
            </Typography>
            <CheckCircleOutlinedIcon
              sx={{
                fontSize: "60px",
                color: "#005a2f",
              }}
            />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default Success;
