import { useState } from "react";
import Spreadsheet from "react-spreadsheet";
import { notification } from "antd";
import "../styles/home.css";
import {
  defaultImageConfigData,
  defaultSrtCssData,
  defaultSrtjsonData,
  imageConfigLabel,
  srtCssLabel,
  srtLabel,
} from "../data/csv";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const [activeSheet, setActiveSheet] = useState("imageConfig");

  const [imageConfigData, setImageConfigData] = useState([
    ...defaultImageConfigData,
    ...Array(11).fill(Array(10).fill({ value: "" })),
  ]);
  const [srtjsonData, setSrtjsonData] = useState([
    ...defaultSrtjsonData,
    ...Array(3).fill(Array(4).fill({ value: "" })),
  ]);
  const [srtCssData, setSrtCssData] = useState([
    ...defaultSrtCssData,
    ...Array(14).fill(Array(17).fill({ value: "" })),
  ]);

  const handleSubmit = () => {
    const checkIncompleteRow = (row) =>
      row.some((cell) => cell.value.trim() !== "") &&
      row.some((cell) => cell.value.trim() === "");

    const incompleteImageConfigRows = imageConfigData.some(checkIncompleteRow);
    const incompleteSrtjsonRows = srtjsonData.some(checkIncompleteRow);
    const incompleteSrtCssRows = srtCssData.some(checkIncompleteRow);

    if (
      incompleteImageConfigRows ||
      incompleteSrtjsonRows ||
      incompleteSrtCssRows
    ) {
      notification.error({
        message: "Incomplete Data",
        description: "Please fill in all columns for each row.",
      });
      return;
    }

    const formattedData = {
      imageConfig: imageConfigData
        .filter((row) => row.some((cell) => cell.value.trim() !== ""))
        .map((row) => ({
          SlideNo: row[0]?.value,
          "Img.URL": row[1]?.value,
          "Img.left": row[2]?.value,
          "Img.top": row[3]?.value,
          "Img.Z": row[4]?.value,
          "Img.width": row[5]?.value,
          "Img.Height": row[6]?.value,
          start: row[7]?.value,
          end: row[8]?.value,
          PostTransition: row[9]?.value,
        })),
      srtjson: srtjsonData
        .filter((row) => row.some((cell) => cell.value.trim() !== ""))
        .map((row) => ({
          index: row[0]?.value,
          start: row[1]?.value,
          end: row[2]?.value,
          text: row[3]?.value,
        })),
      srtCss: srtCssData
        .filter((row) => row.some((cell) => cell.value.trim() !== ""))
        .map((row) => ({
          position: row[0]?.value,
          bottom: row[1]?.value,
          left: row[2]?.value,
          transform: row[3]?.value,
          backgroundColor: row[4]?.value,
          color: row[5]?.value,
          "font-family": row[6]?.value,
          fontWeight: row[7]?.value,
          fontSize: row[8]?.value,
          borderRadius: row[9]?.value,
          "text-shadow": row[10]?.value,
          "border-style": row[11]?.value,
          maxWidth: row[12]?.value,
          whiteSpace: row[13]?.value,
          lineHeight: row[14]?.value,
          animation: row[15]?.value,
          zIndex: row[16]?.value,
        })),
    };

    console.log("Submitted Data:", formattedData);
    navigate("/VideoPlayer", { state: { slideshowData: formattedData } });
  };

  return (
    <div className="container">
      <div className="spreadsheet-section">
        {activeSheet === "imageConfig" && (
          <>
            <h3>Image Config</h3>
            <div className="spreadsheet-wrapper">
              <Spreadsheet
                data={imageConfigData}
                onChange={setImageConfigData}
                columnLabels={imageConfigLabel}
              />
            </div>
          </>
        )}

        {activeSheet === "srtjson" && (
          <>
            <h3>SRT JSON</h3>
            <div className="spreadsheet-wrapper">
              <Spreadsheet
                data={srtjsonData}
                onChange={setSrtjsonData}
                columnLabels={srtLabel}
              />
            </div>
          </>
        )}

        {activeSheet === "srtCss" && (
          <>
            <h3>SRT CSS</h3>
            <div className="spreadsheet-wrapper wide">
              <Spreadsheet
                data={srtCssData}
                onChange={setSrtCssData}
                columnLabels={srtCssLabel}
              />
            </div>
          </>
        )}
      </div>

      <div className="button-container">
        <button onClick={() => setActiveSheet("imageConfig")}>
          Image Config
        </button>
        <button onClick={() => setActiveSheet("srtjson")}>SRT JSON</button>
        <button onClick={() => setActiveSheet("srtCss")}>SRT CSS</button>
      </div>

      <button className="submit-button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default Home;
