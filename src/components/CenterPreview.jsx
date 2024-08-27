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
        Img: { URL: "", left: "", top: "", Z: "", width: "", Height: "" },
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
      i === currentPhotoIndex
        ? {
            ...photo,
            [field]: value,
          }
        : photo
    );
    setPhotos(updatedPhotos);
  };

  const handleImgChange = (field, value) => {
    const updatedPhotos = photos.map((photo, i) =>
      i === currentPhotoIndex
        ? {
            ...photo,
            Img: {
              ...photo.Img,
              [field]: value,
            },
          }
        : photo
    );
    setPhotos(updatedPhotos);
  };

  return (
    <div className="center-preview">
                  <h2>Photos</h2>
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
              src={photo.Img.URL}
              alt={`Slide ${photo.SlideNo}`}
              style={{
                left: photo.Img.left,
                top: photo.Img.top,
                zIndex: photo.Img.Z,
                width: photo.Img.width,
                height: photo.Img.Height,
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
            value={photos[currentPhotoIndex]?.Img?.URL || ""}
            onChange={(e) => handleImgChange("URL", e.target.value)}
          />
          <label>Img Left:</label>
          <input
            type="text"
            value={photos[currentPhotoIndex]?.Img?.left || ""}
            onChange={(e) => handleImgChange("left", e.target.value)}
          />
          <label>Img Top:</label>
          <input
            type="text"
            value={photos[currentPhotoIndex]?.Img?.top || ""}
            onChange={(e) => handleImgChange("top", e.target.value)}
          />
          <label>Img Z:</label>
          <input
            type="text"
            value={photos[currentPhotoIndex]?.Img?.Z || ""}
            onChange={(e) => handleImgChange("Z", e.target.value)}
          />
          <label>Img Width:</label>
          <input
            type="text"
            value={photos[currentPhotoIndex]?.Img?.width || ""}
            onChange={(e) => handleImgChange("width", e.target.value)}
          />
          <label>Img Height:</label>
          <input
            type="text"
            value={photos[currentPhotoIndex]?.Img?.Height || ""}
            onChange={(e) => handleImgChange("Height", e.target.value)}
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
      Img: PropTypes.shape({
        URL: PropTypes.string,
        left: PropTypes.string,
        top: PropTypes.string,
        Z: PropTypes.string,
        width: PropTypes.string,
        Height: PropTypes.string,
      }),
      start: PropTypes.string,
      end: PropTypes.string,
      PostTransition: PropTypes.string,
    })
  ).isRequired,
  setPhotos: PropTypes.func.isRequired,
};

export default CenterPreview;
