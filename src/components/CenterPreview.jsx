import { useState } from "react";
import PropTypes from "prop-types";
import "../styles/CenterPreview.css";
import {
  FaPlus,
  FaTrash,
  FaEdit,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

const CenterPreview = ({ photos, setPhotos }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const addPhoto = () => {
    setPhotos([
      ...photos,
      {
        SlideNo: photos.length + 1,
        ImgURL: "",
        ImgLeft: "",
        ImgTop: "",
        ImgZ: "",
        ImgWidth: "",
        ImgHeight: "",
        start: "",
        end: "",
        PostTransition: "",
      },
    ]);
  };

  const deletePhoto = (index) => {
    const newPhotos = photos.filter((_, i) => i !== index);
    setPhotos(newPhotos);
    setCurrentPhotoIndex(Math.max(currentPhotoIndex - 1, 0));
  };

  const handlePhotoChange = (field, value) => {
    const updatedPhotos = photos.map((photo, i) =>
      i === currentPhotoIndex ? { ...photo, [field]: value } : photo
    );
    setPhotos(updatedPhotos);
  };

  return (
    <div className="center-preview">
      <div className="photo-gallery">
        {photos.map((photo, index) => (
          <div
            key={index}
            className={`photo-box ${
              currentPhotoIndex === index ? "active" : ""
            }`}
            onClick={() => setCurrentPhotoIndex(index)}
          >
            <img
              src={photo.ImgURL}
              alt={`Slide ${photo.SlideNo}`}
              style={{
                left: photo.ImgLeft,
                top: photo.ImgTop,
                zIndex: photo.ImgZ,
                width: photo.ImgWidth,
                height: photo.ImgHeight,
              }}
            />
            <div className="edit-icon">
              <FaEdit />
            </div>
          </div>
        ))}
      </div>
      {photos.length > 0 && (
        <div className="photo-config">
          <label>Slide No:</label>
          <input
            type="number"
            value={photos[currentPhotoIndex]?.SlideNo || ""}
            onChange={(e) => handlePhotoChange("SlideNo", e.target.value)}
          />
          <label>Img URL:</label>
          <input
            type="text"
            value={photos[currentPhotoIndex]?.ImgURL || ""}
            onChange={(e) => handlePhotoChange("ImgURL", e.target.value)}
          />
          <label>Img Left:</label>
          <input
            type="text"
            value={photos[currentPhotoIndex]?.ImgLeft || ""}
            onChange={(e) => handlePhotoChange("ImgLeft", e.target.value)}
          />
          <label>Img Top:</label>
          <input
            type="text"
            value={photos[currentPhotoIndex]?.ImgTop || ""}
            onChange={(e) => handlePhotoChange("ImgTop", e.target.value)}
          />
          <label>Img Z:</label>
          <input
            type="text"
            value={photos[currentPhotoIndex]?.ImgZ || ""}
            onChange={(e) => handlePhotoChange("ImgZ", e.target.value)}
          />
          <label>Img Width:</label>
          <input
            type="text"
            value={photos[currentPhotoIndex]?.ImgWidth || ""}
            onChange={(e) => handlePhotoChange("ImgWidth", e.target.value)}
          />
          <label>Img Height:</label>
          <input
            type="text"
            value={photos[currentPhotoIndex]?.ImgHeight || ""}
            onChange={(e) => handlePhotoChange("ImgHeight", e.target.value)}
          />
          <label>Start:</label>
          <input
            type="text"
            value={photos[currentPhotoIndex]?.start || ""}
            onChange={(e) => handlePhotoChange("start", e.target.value)}
          />
          <label>End:</label>
          <input
            type="text"
            value={photos[currentPhotoIndex]?.end || ""}
            onChange={(e) => handlePhotoChange("end", e.target.value)}
          />
          <label>Post Transition:</label>
          <input
            type="text"
            value={photos[currentPhotoIndex]?.PostTransition || ""}
            onChange={(e) =>
              handlePhotoChange("PostTransition", e.target.value)
            }
          />
        </div>
      )}
      <div className="controls">
        <button onClick={addPhoto}>
          <FaPlus /> Add Photo
        </button>
        <button onClick={() => deletePhoto(currentPhotoIndex)}>
          <FaTrash /> Delete Photo
        </button>
        <button
          onClick={() =>
            setCurrentPhotoIndex((currentPhotoIndex + 1) % photos.length)
          }
        >
          <FaArrowRight /> Next Photo
        </button>
        <button
          onClick={() =>
            setCurrentPhotoIndex(
              (currentPhotoIndex - 1 + photos.length) % photos.length
            )
          }
        >
          <FaArrowLeft /> Previous Photo
        </button>
      </div>
    </div>
  );
};

CenterPreview.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      SlideNo: PropTypes.number.isRequired,
      ImgURL: PropTypes.string,
      ImgLeft: PropTypes.string,
      ImgTop: PropTypes.string,
      ImgZ: PropTypes.string,
      ImgWidth: PropTypes.string,
      ImgHeight: PropTypes.string,
      start: PropTypes.string,
      end: PropTypes.string,
      PostTransition: PropTypes.string,
    })
  ).isRequired,
  setPhotos: PropTypes.func.isRequired,
};

export default CenterPreview;
