import { useMemo } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { srtCssLabel } from "../data/csv";

const Subtitle = ({ subtitleIndex, word, slideshowData }) => {
  const cleanedWord = useMemo(() => {
    if (!word) return ""; // Return empty string if word is empty
    return word.replace(/\[speaker \d+\]\s*/g, "").trim();
  }, [word]);

  const srtCssObject = useMemo(() => {
    const srtCssObject = srtCssLabel.reduce((acc, label, index) => {
      if (slideshowData?.srtCss[index]) {
        acc[label] = slideshowData?.srtCss[index].value;
      }
      return acc;
    }, {});
    return srtCssObject;
  }, [slideshowData]);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      style={srtCssObject}
    >
      <motion.span key={subtitleIndex}>{cleanedWord} </motion.span>
    </motion.div>
  );
};

// PropTypes validation
Subtitle.propTypes = {
  subtitleIndex: PropTypes.number.isRequired,
  word: PropTypes.string.isRequired,
  slideshowData: PropTypes.shape({
    srtCss: PropTypes.object,
  }).isRequired,
};

export default Subtitle;
