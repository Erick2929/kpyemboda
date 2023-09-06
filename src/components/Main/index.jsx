import { Box, Grid } from "@mui/material";
import { themeColors } from "../../theme";
import Countdown from "./components/Countdown";
import Map from "./components/Map";
import Moodboard from "./components/Moodboard";

function Main() {
  return (
    <div
      style={{
        backgroundColor: themeColors.background,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Grid sx={{ width: "90%", mt: "20px" }} container spacing={4}>
        <Grid item xs={12}>
          <Countdown />
        </Grid>
        <Grid item xs={12} md={6}>
          <Map />
        </Grid>
        <Grid item xs={12} md={6}>
          <Moodboard />
        </Grid>
        {/* <Grid item xs={12} md={6}>
          <Map />
        </Grid>
        <Grid item xs={12} md={6}>
          <Map />
        </Grid> */}
      </Grid>
    </div>
  );
}

export default Main;
