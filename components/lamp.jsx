import PropTypes from "prop-types";
import styles from "../styles/Lamp.module.css";
import hex2rgba from "../util/hex2rgba";

const Lamp = ({
  on,
  color,
  height
}) => {

  // Default styling of the component, delegating height
  const defaultStyle = {
    height: height 
  }

  const litStyle = {
    backgroundColor: color,
    // convert color to rgba to dim glow shadow
    boxShadow: `-12px 2px 20vw 20vw ${hex2rgba(color, ".8")}`
  }

  return (
    <>
      <img
        src="/images/aladin.png"
        alt="Aladin"
        className={styles.aladin}
        // merge default & lit styles if lamp is on
        style={on ? {...defaultStyle, ...litStyle} : defaultStyle}
      />
    </>
  );
}

Lamp.propTypes = {
  on: PropTypes.bool, // is the light on ?
  color: PropTypes.string, // Hex color 
  height: PropTypes.string // Any CSS valid size
};

// Default values if not provided
Lamp.defaultProps = {
  color: "#fff",
  height: "40vh"
}

export default Lamp;