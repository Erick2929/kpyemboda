import { Grid } from "@mui/material";
import { themeColors } from "../../theme";
import Countdown from "./components/Countdown";
import Map from "./components/Map";
import Moodboard from "./components/Moodboard";
import Gifts from "./components/Gifts";
import Forms from "./components/Forms";

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
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
            gap: "20px",
          }}
          item
          xs={12}
          md={6}
        >
          <Moodboard />
          <Gifts />
        </Grid>
        <Grid item xs={12}>
          <Forms />
        </Grid>
      </Grid>
    </div>
  );
}

export default Main;
