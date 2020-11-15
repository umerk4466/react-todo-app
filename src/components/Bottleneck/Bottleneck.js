import React from "react";
import { motion,AnimatePresence } from "framer-motion";
import "./Bottleneck.css";
import CompleteBottleneckBtn from "./CompleteBottleneckBtn"
import StepList from "../StepList/StepList"



function Bottleneck({props}) {
  const [isOpen, setIsOpen] = React.useState(false);
  // functions
  const toggleOpen = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen)
  }

  return (
    <motion.li layout className="LiBottleneckContainer" onClick={toggleOpen}>
      <motion.div layout className="BottleneckFlexContainer">
        {props.bottleneckText}
        <CompleteBottleneckBtn props={props}></CompleteBottleneckBtn>
      </motion.div>
      <AnimatePresence key={props.id}>{isOpen && <StepList props={props} />}</AnimatePresence>
    </motion.li>
  );
}

export default Bottleneck;
