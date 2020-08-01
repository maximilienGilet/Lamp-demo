import PropTypes from "prop-types";
import styles from "../styles/ColorButton.module.css";

const sizes = {
  'small': '30px',
  'medium': '36px',
  'large': '42px' 
};

const outerSizes = {
  'small': '40px',
  'medium': '46px',
  'large': '52px'  
}

const ColorButton = props => {

  const radius = props.rounded ? "100%" : "4px";
  
  return (
    <span 
      onClick={(event) => props.onClick(event)} 
      className={`${styles.colorButton} ${props.active ? styles.active : ""}`} 
      style={{
        borderRadius: radius,
        width: outerSizes[props.size],
        height: outerSizes[props.size],
      }}
    >
      <span 
        style={{
          display: "inline-block",
          width: sizes[props.size],
          height: sizes[props.size],
          backgroundColor: props.color,
          // padding: sizes[props.size],
          
          borderRadius: radius
        }}
      ></span>
    </span>
  )
};

ColorButton.propTypes = {
  color: PropTypes.string, // hex color
  size: PropTypes.oneOf(['small', 'medium', 'large']), // size of the button
  rounded: PropTypes.bool, // square or rounded button
  active: PropTypes.bool, // is the button active
  onClick: PropTypes.func // onClick handler
}

ColorButton.defaultProps = {
  size: "medium",
  rounded: true
};

export default ColorButton;