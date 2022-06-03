import React, { useContext } from "react";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
  ClickAwayListener,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../AppContext";

const responsiveDropdown = {
  position: "static",
  top: "104px",
  marginTop: "136px",
  display: { lg: "none", md: "none", sm: "flex", xs: "flex" },
  zIndex: 0,
};
function Dropdown() {
  const { footer } = useContext(AppContext);
  const [footerColor, setFooterColor] = footer;
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const navigate = useNavigate();
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
    }

    setOpen(false);
  };
  const handleCloseContact = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
    }

    setOpen(false);
    navigate("/contact");
    setFooterColor("#910024");
  };

  const handleCloseAbout = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
    }

    setOpen(false);
    navigate("/about");
    setFooterColor("#8f6818");
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <AppBar sx={responsiveDropdown}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            width: "100vw",
          }}
        >
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            placement='bottom-start'
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom-start" ? "left top" : "left bottom",
                }}
              >
                <Paper
                  sx={{
                    width: "100vw",
                    borderRadius: 0,
                    backgroundColor: "#910024",
                    color: "#fff",
                  }}
                >
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      sx={{
                        width: "100vw",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                      autoFocusItem={open}
                      id='composition-menu'
                      aria-labelledby='composition-button'
                      onKeyDown={handleListKeyDown}
                    >
                      <MenuItem onClick={handleClose}>OUR PLANS</MenuItem>
                      <MenuItem onClick={handleCloseAbout}>OUR STORY</MenuItem>
                      <MenuItem onClick={handleClose}>OUR SERVICES</MenuItem>
                      <MenuItem onClick={handleCloseContact}>
                        CONTACT US
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </Box>
        <IconButton
          size='large'
          edge='start'
          color='inherit'
          aria-label='menu'
          sx={{ mr: 2 }}
          ref={anchorRef}
          id='composition-button'
          aria-controls={open ? "composition-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup='true'
          onClick={handleToggle}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Dropdown;