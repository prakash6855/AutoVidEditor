import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";
import LeftSidebar from "./LeftSidebar";
import CenterPreview from "./CenterPreview";
import RightSidebar from "./RightSidebar";

const App = () => {
  const [srtLabels, setSrtLabels] = useState([
    { index: 1, start: "", end: "", text: "" },
  ]);
  const [photos, setPhotos] = useState([]);
  const [cssOptions, setCssOptions] = useState({
    position: "",
    bottom: "",
    left: "",
    transform: "",
    backgroundColor: "",
    color: "",
    fontFamily: "",
    fontWeight: "",
    fontSize: "",
    borderRadius: "",
    textShadow: "",
    borderStyle: "",
    maxWidth: "",
    whiteSpace: "",
    lineHeight: "",
    animation: "",
    zIndex: "",
  });

  const navigate = useNavigate();

  const handleSubmit = () => {
    const data = {
      srtLabels,
      photos,
      cssOptions,
    };

    // Navigate to /VideoPlayer and pass the data as state
    navigate("/VideoPlayer", { state: data });
  };

  return (
    <>
      <div className="container">
        <LeftSidebar srtLabels={srtLabels} setSrtLabels={setSrtLabels} />
        <CenterPreview photos={photos} setPhotos={setPhotos} />
        <RightSidebar cssOptions={cssOptions} setCssOptions={setCssOptions} />
      </div>
      <div className="button-container">
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
};

export default App;
