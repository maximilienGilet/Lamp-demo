import PropTypes from "prop-types";
import styles from "../styles/HueSlider.module.css";

const HueSlider = props => (
  <input
    className={styles.hueSlider}
    type="range"
    min={0}
    max={359}
    value={props.value}
    id="hueRange"
    onChange={props.onChange}
  />
);

HueSlider.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func
}

export default HueSlider;