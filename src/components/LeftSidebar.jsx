import PropTypes from "prop-types";
import "../styles/LeftSidebar.css";

const LeftSidebar = ({ srtLabels, setSrtLabels }) => {
  const addSrtLabel = () => {
    setSrtLabels([
      ...srtLabels,
      { index: srtLabels.length + 1, start: "", end: "", text: "" },
    ]);
  };

  const deleteSrtLabel = (index) => {
    setSrtLabels(srtLabels.filter((label) => label.index !== index));
  };

  const handleInputChange = (index, field, value) => {
    const updatedLabels = srtLabels.map((label) =>
      label.index === index ? { ...label, [field]: value } : label
    );
    setSrtLabels(updatedLabels);
  };

  return (
    <div className="left-sidebar">
            <h2>SRT CSS Options</h2>
      {srtLabels.map((label) => (
        <div key={label.index} className="srt-label">
          <div className="label-index">{label.index}</div>
          <input
            type="text"
            placeholder="Start"
            value={label.start}
            onChange={(e) =>
              handleInputChange(label.index, "start", e.target.value)
            }
          />
          <input
            type="text"
            placeholder="End"
            value={label.end}
            onChange={(e) =>
              handleInputChange(label.index, "end", e.target.value)
            }
          />
          <input
            type="text"
            placeholder="Text"
            value={label.text}
            onChange={(e) =>
              handleInputChange(label.index, "text", e.target.value)
            }
          />
          <button onClick={() => deleteSrtLabel(label.index)}>Delete</button>
        </div>
      ))}
      <button className="add-btn" onClick={addSrtLabel}>
        Add SRT Label
      </button>
    </div>
  );
};

LeftSidebar.propTypes = {
  srtLabels: PropTypes.arrayOf(
    PropTypes.shape({
      index: PropTypes.number.isRequired,
      start: PropTypes.string.isRequired,
      end: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  setSrtLabels: PropTypes.func.isRequired,
};

export default LeftSidebar;
