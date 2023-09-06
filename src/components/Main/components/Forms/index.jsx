import { TextField } from "@mui/material";
import styles from "./styles.module.css";
import styled from "@emotion/styled";
import { themeColors } from "../../../../theme";
import CustomButton from "../../../global/CustomButton";
import { Send } from "@mui/icons-material";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: themeColors.accent,
    fontFamily: "inherit",
  },
  "& label": {
    color: themeColors.accent,
    fontFamily: "inherit",
  },
  "& .MuiInput-underline:before": {
    borderBottomColor: themeColors.accent,
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: themeColors.accentHoverColor,
  },
});

function Forms() {
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [cantidadPersonas, setCantidadPersonas] = useState(0);
  const [email, setEmail] = useState("");

  const handleEnviar = (e) => {
    // Aquí puedes realizar acciones con los datos del formulario, como enviarlos a un servidor o realizar alguna otra acción.
    e.preventDefault();
    console.log("Nombre:", nombre);
    console.log("Apellidos:", apellidos);
    console.log("Cantidad de personas:", cantidadPersonas);
    console.log("Correo Electrónico:", email);
    toast.success("RSVP enviada");
  };

  return (
    <form className={styles.container} onSubmit={handleEnviar} id='forms'>
      <Toaster />
      <h2>Confirmación de asistencia</h2>
      <CssTextField
        id='name'
        label='Nombre/s'
        variant='standard'
        className={styles.input}
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <CssTextField
        id='last-name'
        label='Apellidos/s'
        variant='standard'
        className={styles.input}
        value={apellidos}
        onChange={(e) => setApellidos(e.target.value)}
      />
      <CssTextField
        type='number'
        id='number-of-people'
        label='Cant. de personas'
        variant='standard'
        className={styles.input}
        onChange={(e) => setCantidadPersonas(e.target.value)}
      />
      <CssTextField
        id='email'
        label='Correo Electrónico'
        type='email'
        variant='standard'
        className={styles.input}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <CustomButton
        sx={{ mt: "30px" }}
        variant='contained'
        startIcon={<Send />}
        type='submit'
        disabled={
          nombre === "" ||
          apellidos === "" ||
          cantidadPersonas <= 0 ||
          email === ""
        }
      >
        Enviar RSVP
      </CustomButton>
    </form>
  );
}

export default Forms;
