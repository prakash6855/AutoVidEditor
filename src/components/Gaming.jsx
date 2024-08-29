import { useEffect, useState } from "react";
import { Gamerimages } from "../data/gaming";
import "../styles/Gaming.css";

const Gaming = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 3; // Number of cuboids visible at a time
  const totalImages = Gamerimages.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        (prevIndex + 1) % (totalImages - visibleCount + 1)
      );
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex, totalImages, visibleCount]);

  return (
    <div className="gaming-container">
      <div
        className="cuboid-wrapper"
        style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
      >
        {Gamerimages.map((item, index) => {
          const cuboidHeight = 50 + index * 15; // Adjust height dynamically
          const transformY = index * -20; // Adjust the curve effect

          return (
            <div
              key={index}
              className="cuboid"
              style={{
                height: `${cuboidHeight}px`,
                transform: `translateY(${transformY}px)`, // Apply vertical offset for the curve effect
              }}
            >
              <img
                src={item}
                alt={`Cuboid ${index + 1}`}
                className="cuboid-image"
              />
              <div className="gamer-name">Gamer {index + 1}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gaming;
