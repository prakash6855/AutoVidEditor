import { useMemo } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Subtitle = ({ subtitleIndex, word, slideshowData }) => {
  const cleanedWord = useMemo(
    () => word.replace(/\[speaker \d+\]\s*/g, "").trim(),
    [word]
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      style={slideshowData.srtCss[0]}
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
