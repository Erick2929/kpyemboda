import { Box } from "@mui/material";
import { themeColors } from "../../theme";
import MenuButton from "./components/menu";
import BasicMenu from "./components/menu";
// import Menu from "./components/menu";

function Navbar() {
  return (
    <Box
      sx={{
        height: "50px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: themeColors.secondary,
        padding: "10px",
      }}
    >
      <Box sx={{ width: "50%" }}>
        <h2 style={{ color: themeColors.primary }}>KP & EM</h2>
      </Box>
      <Box sx={{ width: "50%", display: "flex", justifyContent: "flex-end" }}>
        <BasicMenu />
      </Box>
    </Box>
  );
}

export default Navbar;
