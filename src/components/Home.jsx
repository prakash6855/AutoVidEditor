import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
  const location = useLocation();

  // Function to update defaultImageConfigData with URLs from the urls array
  const updateImageConfigData = (defaultImageConfigData, urls) => {
    // Ensure urls array is not empty and defaultImageConfigData is an array
    if (
      !Array.isArray(defaultImageConfigData) ||
      !Array.isArray(urls) ||
      urls.length === 0
    ) {
      console.error("Invalid input data");
      return;
    }

    // Update defaultImageConfigData with URLs
    return defaultImageConfigData.map((item, index) => {
      // Make sure index is within the range of urls array
      if (index < urls.length) {
        return {
          ...item,
          Img: {
            ...item.Img,
            URL: urls[index],
          },
        };
      }
      return item;
    });
  };

  const photosUpdated = useMemo(() => {
    return updateImageConfigData(photos, location?.state?.imageURL);
  }, [location?.state?.imageURL, photos]);
  console.log(photosUpdated);

  const handleSubmit = () => {
    const data = {
      imageConfig: photosUpdated,
      srtjson: srtLabels,
      srtCss: cssOptions,
      download: true,
    };
    console.log(data);
    // Navigate to /VideoPlayer and pass the data as state
    navigate("/VideoPlayer", { state: { slideshowData: data } });
  };

  return (
    <>
      <div className="container">
        <LeftSidebar srtLabels={srtLabels} setSrtLabels={setSrtLabels} />
        <CenterPreview photos={photosUpdated} setPhotos={setPhotos} />
        <RightSidebar cssOptions={cssOptions} setCssOptions={setCssOptions} />
      </div>
      <div className="button-container">
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
};

export default Home;
