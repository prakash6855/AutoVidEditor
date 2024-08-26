import PropTypes from "prop-types";
import "../styles/RightSidebar.css";

const RightSidebar = ({ cssOptions, setCssOptions }) => {
  const handleCssChange = (field, value) => {
    setCssOptions({ ...cssOptions, [field]: value });
  };

  return (
    <div className="right-sidebar">
      <h2>CSS Options</h2>
      {Object.keys(cssOptions).map((key) => (
        <div key={key} className="css-option">
          <label className="option-label">{key}:</label>
          <input
            type="text"
            value={cssOptions[key]}
            onChange={(e) => handleCssChange(key, e.target.value)}
            className="option-input"
          />
        </div>
      ))}
    </div>
  );
};

RightSidebar.propTypes = {
  cssOptions: PropTypes.objectOf(PropTypes.string).isRequired,
  setCssOptions: PropTypes.func.isRequired,
};

export default RightSidebar;
