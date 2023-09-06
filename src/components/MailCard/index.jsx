import {
  config,
  useSpring,
  useSpringRef,
  animated,
  useChain,
} from "react-spring";
import styles from "./styles.module.css";
import { useEffect } from "react";
import { isMobile } from "react-device-detect";

function MailCard({ isOpen, setIsOpen }) {
  const width = isMobile ? "600px" : "1930px";

  const openHereApi = useSpringRef();
  const openHere = useSpring({
    ref: openHereApi,
    config: config.stiff,
    onfig: config.stiff,
    from: { scale: 1 },
    to: {
      scale: !isOpen ? 0 : 1,
    },
  });

  const springApi = useSpringRef();
  const horizontalWrapper = useSpring({
    ref: springApi,
    config: config.stiff,
    from: { right: "0px" },
    to: {
      right: !isOpen ? width : "0px",
    },
  });

  const springApi1 = useSpringRef();
  const verticalWrapper = useSpring({
    ref: springApi1,
    config: config.stiff,
    from: { bottom: "0px" },
    to: {
      bottom: !isOpen ? "1100px" : "0px",
    },
  });

  const springApi2 = useSpringRef();
  const wrapper = useSpring({
    ref: springApi2,
    config: config.stiff,
    from: { scale: 1 },
    to: {
      // bottom: !isOpen ? "1100px" : "0px",
      scale: !isOpen ? 0 : 1,
    },
  });

  useChain(
    [openHereApi, springApi, springApi1, springApi2],
    [0, 0.3, 0.6, 0.8],
    3000
  );

  return (
    <div>
      <animated.div
        style={openHere}
        className={styles.openHere}
        onClick={() => setIsOpen(false)}
      >
        <h1>Click Aquí</h1>
      </animated.div>
      <animated.div style={wrapper} className={styles.container}></animated.div>
      <animated.div
        style={horizontalWrapper}
        className={styles.hWrapperContainer}
      >
        <div className={styles.horizontalWrapper}></div>
      </animated.div>
      <animated.div
        style={verticalWrapper}
        className={styles.vWrapperContainer}
      >
        <div className={styles.verticalWrapper}></div>
      </animated.div>
    </div>
  );
}

export default MailCard;
