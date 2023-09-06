import { Checkroom } from "@mui/icons-material";
import { themeColors } from "../../../../theme";
import CustomButton from "../../../global/CustomButton";
import styles from "./styles.module.css";

function Moodboard() {
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
      <h2>¿Como me visto?</h2>
      <a
        href='https://goo.gl/maps/wK2Dry1kB4CEhmJi9'
        rel='noreferrer'
        target='_blank'
      >
        <div className={styles.croquis} />
        {/* <img
      src={croquis}
      alt='croquis-de-la-ubicacion'
      className={styles.croquis}
    /> */}
      </a>
      <p>
        La vestimenta es formal, sin embargo estaremos pisando en suelos tanto
        como de concreto y de jardin, es importante tomarlo en consideracion
        para su comodidad!
      </p>
      <CustomButton
        sx={{ mt: "20px" }}
        href='https://goo.gl/maps/wK2Dry1kB4CEhmJi9'
        rel='noreferrer'
        target='_blank'
        startIcon={<Checkroom />}
      >
        Ver moodboard
      </CustomButton>
    </div>
  );
}

export default Moodboard;
