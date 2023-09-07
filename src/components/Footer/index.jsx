import { IconButton } from "@mui/material";
import styles from "./styles.module.css";
import { Instagram, WhatsApp } from "@mui/icons-material";

function Footer() {
  const mensaje =
    "Hola, estoy interesado en cotizar un desarrollo. ¿Podrías ayudarme?";
  return (
    <div className={styles.containerFather}>
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
      </div>
    </div>
  );
}

export default Footer;
