import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IconButton } from "@mui/material";
import { themeColors } from "../../../../theme";
import { useState } from "react";

const aTagStyle = {
  color: themeColors.accent,
  textDecoration: "none",
};

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        id='basic-button'
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup='true'
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon
          sx={{ color: themeColors.accent, height: "45px", width: "auto" }}
        />
      </IconButton>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <a href='#mapa' style={aTagStyle}>
          <MenuItem
            sx={{ color: themeColors.accent, fontFamily: "inherit" }}
            onClick={handleClose}
          >
            Ir al mapa
          </MenuItem>
        </a>
        <a href='#cuando' style={aTagStyle}>
          <MenuItem
            sx={{ color: themeColors.accent, fontFamily: "inherit" }}
            onClick={handleClose}
          >
            ¿Donde?
          </MenuItem>
        </a>
        <a href='#cuando' style={aTagStyle}>
          <MenuItem
            sx={{ color: themeColors.accent, fontFamily: "inherit" }}
            onClick={handleClose}
          >
            ¿Cuando?
          </MenuItem>
        </a>
        <a href='#regalos' style={aTagStyle}>
          <MenuItem
            sx={{ color: themeColors.accent, fontFamily: "inherit" }}
            onClick={handleClose}
          >
            ¿Regalos?
          </MenuItem>
        </a>
        <a href='#forms' style={aTagStyle}>
          <MenuItem
            sx={{ color: themeColors.accent, fontFamily: "inherit" }}
            onClick={handleClose}
          >
            RSVP
          </MenuItem>
        </a>
      </Menu>
    </div>
  );
}
