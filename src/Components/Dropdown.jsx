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

const responsiveDropdown = {
  position: "static",
  top: "104px",
  marginTop: { lg: "136px", md: "136px", sm: "112px", xs: "112px" },
  display: { lg: "none", md: "none", sm: "flex", xs: "flex" },
  zIndex: 0,
};
function Dropdown() {
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
  };

  const handleCloseAbout = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
    }

    setOpen(false);
    navigate("/about");
  };
  const handleClosePlans = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
    }

    setOpen(false);
    navigate("/plans");
  };
  const handleCloseServices = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
    }

    setOpen(false);
    navigate("/services");
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
                      <MenuItem onClick={handleClosePlans}>OUR PLANS</MenuItem>
                      <MenuItem onClick={handleCloseAbout}>OUR STORY</MenuItem>
                      <MenuItem onClick={handleCloseServices}>
                        OUR SERVICES
                      </MenuItem>
                      <MenuItem onClick={handleCloseServices}>
                        OUR FUNERALS
                      </MenuItem>
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
