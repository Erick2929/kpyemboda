import { IconButton } from "@mui/material";
import styles from "./styles.module.css";
import { Instagram, WhatsApp } from "@mui/icons-material";
import desi from "../../assets/imgs/desi.png";

function Footer() {
  const mensaje =
    "Hola, estoy interesado en cotizar un desarrollo. ¿Podrías ayudarme?";
  return (
    <div className={styles.container} id='footer'>
      <div className={styles.iconAtag}>
        <IconButton
          href={"https://wa.me/8442895076?text=" + mensaje}
          target='_blank'
        >
          <WhatsApp />
        </IconButton>
        <a
          href={"https://wa.me/8442895076?text=" + mensaje}
          target='_blank'
          rel='noreferrer'
        >
          {" "}
          8442895076
        </a>
      </div>
      <div className={styles.iconAtag}>
        <IconButton
          href='https://www.instagram.com/desisoftware/'
          target='_blank'
        >
          <Instagram />
        </IconButton>
        <a
          href='https://www.instagram.com/desisoftware/'
          target='_blank'
          rel='noreferrer'
        >
          @desisoftware
        </a>
      </div>
      <a href={"https://wa.me/8442895076?text=" + mensaje}>
        <img src={desi} alt='desi-logo' className={styles.logo} />
      </a>
    </div>
  );
}

export default Footer;
