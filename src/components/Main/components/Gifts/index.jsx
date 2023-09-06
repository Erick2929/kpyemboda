import styles from "./styles.module.css";

function Gifts() {
  return (
    <div className={styles.container} id='regalos'>
      <h2>¿Qué llevo?</h2>
      <p>
        ¡El único <strong>regalo</strong> que debes{" "}
        <strong>llevar obligatoriamente</strong> es{" "}
        <strong>tu presencia</strong> y muchas ganas de{" "}
        <strong>disfrutar</strong> con <strong>nosotros!</strong>
      </p>
    </div>
  );
}

export default Gifts;
