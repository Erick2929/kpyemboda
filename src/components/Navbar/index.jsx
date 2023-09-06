import { Box } from "@mui/material";
import { themeColors } from "../../theme";
import BasicMenu from "./components/menu";
import logoBoda from "./../../assets/imgs/logoBoda.png";

function Navbar() {
  return (
    <Box
      sx={{
        height: "60px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: themeColors.secondary,
        padding: "10px",
      }}
    >
      <Box sx={{ width: "50%" }}>
        <img
          src={logoBoda}
          alt='logo-boda'
          style={{ height: "100px", width: "auto" }}
        />
      </Box>
      <Box sx={{ width: "50%", display: "flex", justifyContent: "flex-end" }}>
        <BasicMenu />
      </Box>
    </Box>
  );
}

export default Navbar;
