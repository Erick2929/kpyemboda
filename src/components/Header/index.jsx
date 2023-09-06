import fotoBoda from "../../assets/imgs/InvitacionBoda.png";
import { themeColors } from "../../theme";

function Header() {
  return (
    <div
      style={{
        backgroundColor: themeColors.background,
        display: "flex",
        justifyContent: "center",
        marginTop: "30px",
      }}
    >
      <img
        style={{
          width: "100%",
          maxWidth: "700px",
          boxShadow: "rgba(0, 0, 0, 0.5) 0px 5px 20px",
        }}
        src={fotoBoda}
        alt='invitacion de la boda'
      />
    </div>
  );
}

export default Header;
