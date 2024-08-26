import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";
import LeftSidebar from "./LeftSidebar";
import CenterPreview from "./CenterPreview";
import RightSidebar from "./RightSidebar";

// Import default values from csv.js
import {
  defaultImageConfigData,
  defaultSrtjsonData,
  defaultSrtCssData,
} from "../data/csv"; // Adjust the path based on where your csv.js file is located

const Home = () => {
  const [srtLabels, setSrtLabels] = useState(defaultSrtjsonData);
  const [photos, setPhotos] = useState(defaultImageConfigData);
  const [cssOptions, setCssOptions] = useState(defaultSrtCssData[0]);

  const navigate = useNavigate();

  const handleSubmit = () => {
    const data = {
      imageConfig: photos,
      srtjson: srtLabels,
      srtCss: cssOptions,
    };
    console.log(data);

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

export default Home;
