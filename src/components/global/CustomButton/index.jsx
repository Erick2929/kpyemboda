import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { themeColors } from "../../../theme";

const CustomButton = styled(Button)(({ theme }) => ({
  color: "white",
  backgroundColor: themeColors.accent,
  "&:hover": {
    backgroundColor: themeColors.accentHoverColor,
  },
  borderRadius: "11px",
  padding: "10px 20px 10px 20px",
  fontFamily: "inherit",
  textTransform: "none",
  fontWeight: "normal",
}));

export default CustomButton;
