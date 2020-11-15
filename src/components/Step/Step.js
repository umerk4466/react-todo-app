import React from "react";
import { motion } from "framer-motion";
import "./Step.css";


function Step({props}) {
  // functions
  const toggleOpen = (e) => {e.stopPropagation();}

  return (
    <motion.li layout className="LiStepContainer" onClick={toggleOpen} initial={{x:60+"px" }} animate={{x:0}}>
        {props.stepText}
    </motion.li>
  );
}

export default Step;
