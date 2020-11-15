import React from "react";
import { motion } from "framer-motion";
import "./Bottleneck.css";
import CompleteBottleneckBtn from "./CompleteBottleneckBtn"


function Bottleneck({props}) {
  const [isOpen, setIsOpen] = React.useState(false);
  // functions
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.li layout className="LiBottleneckContainer" onClick={toggleOpen} initial={{x:60+"px" }} animate={{x:0}} transition={{type:"spring"}}>
      <motion.div layout className="BottleneckFlexContainer">
        {props.bottleneckText}
        <CompleteBottleneckBtn props={props}></CompleteBottleneckBtn>
      </motion.div>
      {/* <AnimatePresence key={props.id}>{isOpen && <BottleneckList props={props} />}</AnimatePresence> */}
    </motion.li>
  );
}

export default Bottleneck;
