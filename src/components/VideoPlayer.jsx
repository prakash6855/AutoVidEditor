import { Spin } from "antd";
import "../styles/VideoPlayer.css";
import { useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import Subtitle from "./Subtitle";

const VideoPlayer = () => {
  const location = useLocation();
  const slideshowData = useMemo(
    () =>
      location.state?.slideshowData || {
        imageConfig: [],
        srtjson: [],
        srtCss: [],
        download: false,
      },
    [location.state?.slideshowData]
  );

  const [loading, setLoading] = useState(true);
  const [slideIndex, setSlideIndex] = useState(0);
  const [subtitleIndex, setSubtitleIndex] = useState(0);

  const parseTime = useMemo(() => {
    return (timeString) => {
      const [hours, minutes, seconds] = timeString.split(":");
      const [secs, millis] = seconds.split(",");
      return (
        parseInt(hours) * 3600000 +
        parseInt(minutes) * 60000 +
        parseInt(secs) * 1000 +
        parseInt(millis)
      );
    };
  }, []);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(loadingTimeout);
  }, []);

  // Target to change only the slideIndex
  useEffect(() => {
    if (loading || !slideshowData.imageConfig.length) return;

    const slideDuration =
      parseTime(slideshowData.imageConfig[slideIndex]?.end) -
      parseTime(slideshowData.imageConfig[slideIndex]?.start);

    if (slideDuration <= 0) return; // Avoid negative duration

    const timeout = setTimeout(() => {
      setSlideIndex((prevIndex) => {
        if (prevIndex + 1 < slideshowData.imageConfig.length) {
          return prevIndex + 1;
        } else {
          setSubtitleIndex(0);
          return 0;
        }
      });
    }, slideDuration);

    return () => clearTimeout(timeout);
  }, [slideshowData, loading, slideIndex, parseTime]);

  // Target to change only the subtitleIndex
  useEffect(() => {
    if (loading || !slideshowData.srtjson.length) return;

    const subtitleDuration =
      parseTime(slideshowData.srtjson[subtitleIndex]?.end) -
      parseTime(slideshowData.srtjson[subtitleIndex]?.start);

    if (subtitleDuration <= 0) return;

    const timeout = setTimeout(() => {
      setSubtitleIndex((prevIndex) =>
        prevIndex + 1 < slideshowData.srtjson.length ? prevIndex + 1 : prevIndex
      );
    }, subtitleDuration);

    return () => clearTimeout(timeout);
  }, [slideshowData, loading, subtitleIndex, parseTime]);
  const recordScreen = async (slideshowElement, duration = 5000) => {
    // Check if the browser supports the MediaRecorder API
    if (!navigator.mediaDevices || !navigator.mediaDevices.getDisplayMedia) {
      console.error("Screen recording is not supported in this browser.");
      return;
    }

    try {
      // Request screen capture for the specific element
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: {
          mediaSource: "screen",
          cursor: "always",
        },
      });

      const mediaRecorder = new MediaRecorder(stream);
      const chunks = [];

      // Store the recorded chunks
      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunks.push(event.data);
        }
      };

      // Stop recording after the specified duration
      mediaRecorder.start();
      setTimeout(() => {
        mediaRecorder.stop();
      }, duration);

      // Once recording is stopped, save the video
      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: "video/webm" });
        const url = URL.createObjectURL(blob);

        // Create a download link and trigger download
        const a = document.createElement("a");
        a.href = url;
        a.download = "slideshow-recording.webm";
        a.click();

        // Revoke the object URL after download
        URL.revokeObjectURL(url);
      };
    } catch (error) {
      console.error("Error during screen recording:", error);
    }
  };

  // Record the screen if download is true
  useEffect(() => {
    if (!loading && slideshowData.download) {
      const slideshowElement = document.querySelector(".video-like-slideshow");
      recordScreen(slideshowElement, 5000); // Record for 5 seconds
    }
  }, [loading, slideshowData.download]);

  return (
    <div className="video-container">
      {!loading ? (
        <>
          <div className="video-like-slideshow">
            {slideshowData.imageConfig.map((slide, index) => {
              // Calculate border size from API
              const borderSize = parseInt(slide["Img.BorderSize"]) || 0;
              const slideWidth = `calc(1.025 * (${borderSize}px + ${slide["Img"]["width"]}))`;
              const slideHeight = `calc(1.025 * (${borderSize}px +  ${slide["Img"]["Height"]}))`;

              return (
                <div
                  key={index}
                  className={`slide ${slideIndex === index ? "active" : ""}`}
                  style={{
                    opacity: slideIndex === index ? 1 : 0,
                    transition: "opacity 1s ease-in-out",
                    zIndex: slideIndex === index ? 1 : 0,
                    width: slideWidth,
                    height: slideHeight,
                  }}
                >
                  <img
                    src={slide["Img"]["URL"]}
                    alt={`Slide ${slide.SlideNo}`}
                    style={{
                      width: slide["Img"]["width"],
                      height: slide["Img"]["Height"],
                      border: `${borderSize}px solid red`,
                    }}
                  />
                </div>
              );
            })}
          </div>
          <Subtitle
            subtitleIndex={subtitleIndex}
            word={slideshowData.srtjson[subtitleIndex]?.text}
            slideshowData={slideshowData}
          />
        </>
      ) : (
        <>
          <Spin /> Loading...
        </>
      )}
    </div>
  );
};

export default VideoPlayer;
