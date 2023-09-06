import styles from "./styles.module.css";
import croquis from "./../../../../assets/imgs/croquis2.png";
import CustomButton from "../../../global/CustomButton";
import { TravelExplore } from "@mui/icons-material";
import { themeColors } from "../../../../theme";

function Map() {
  return (
    <div
      className={styles.container}
      style={{
        backgroundColor: themeColors.secondary,
        padding: "15px",
        borderRadius: "11px",
      }}
      id='mapa'
    >
      <h2>¿Donde y cuando será?</h2>
      <p>Hacienda Torecillas a las 20:00 horas</p>
      <a
        href='https://goo.gl/maps/wK2Dry1kB4CEhmJi9'
        rel='noreferrer'
        target='_blank'
      >
        <img
          src={croquis}
          alt='croquis-de-la-ubicacion'
          className={styles.croquis}
        />
      </a>
      <CustomButton
        sx={{ mt: "20px" }}
        href='https://goo.gl/maps/wK2Dry1kB4CEhmJi9'
        rel='noreferrer'
        target='_blank'
        startIcon={<TravelExplore />}
      >
        Ver en el mapa
      </CustomButton>
    </div>
  );
}

export default Map;
