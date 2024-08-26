import PropTypes from "prop-types";
import "../styles/RightSidebar.css";
import { srtCssLabel } from "../data/csv";

const RightSidebar = ({ cssOptions, setCssOptions }) => {
  const handleCssChange = (field, value) => {
    setCssOptions({ ...cssOptions, [field]: value });
  };

  return (
    <div className="right-sidebar">
      <h2>CSS Options</h2>
      {Object.keys(cssOptions).map((key) => (
        <div key={key} className="css-option">
          <label className="option-label">
            {key}:{srtCssLabel[key]}
          </label>
          <input
            type="text"
            value={cssOptions[key].value}
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
