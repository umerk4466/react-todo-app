import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Bottleneck.css";
import CompleteBottleneckBtn from "./CompleteBottleneckBtn"


function Bottleneck({props}) {
  const [isOpen, setIsOpen] = React.useState(false);
  // functions
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.li layout className="LiBottleneckContainer" onClick={toggleOpen} initial={{x:30+"px", borderRadius: 15 }} animate={{x:0}}>
      <motion.div layout className="BottleneckFlexContainer">
        {props.bottleneckText}
        <CompleteBottleneckBtn isCompleted={props.isCompleted}></CompleteBottleneckBtn>
      </motion.div>
      {/* <AnimatePresence key={props.id}>{isOpen && <BottleneckList props={props} />}</AnimatePresence> */}
    </motion.li>
  );
}

export default Bottleneck;
