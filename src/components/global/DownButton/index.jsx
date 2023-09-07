import { config, useSpring, useSpringRef, animated } from "react-spring";
import styles from "./styles.module.css";
import { KeyboardArrowDown } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { themeColors } from "../../../theme";

function DownButton() {
  const [float, setFloat] = useState(true);
  const springApi = useSpringRef();

  const floatingButton = useSpring({
    ref: springApi,
    config: config.stiff,
    from: { bottom: "60px" },
    to: {
      bottom: float ? "70px" : "60px",
    },
  });

  useEffect(() => {
    setTimeout(() => {
      setFloat(!float);
    }, 200);

    springApi.start();
  }, [float, springApi]);

  return (
    <animated.div style={floatingButton} className={styles.container}>
      <a href='#forms'>
        <KeyboardArrowDown sx={{ color: themeColors.accent }} />
      </a>
    </animated.div>
  );
}

export default DownButton;
