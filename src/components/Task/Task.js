import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Task.css";
import Bottleneck from "../Bottleneck/Bottleneck"


function Task(props) {
  const [isOpen, setIsOpen] = React.useState(false);
  const workingOn = props.workingOn ? <span className="WorkingOn">Working on</span> : null;
  // functions
  const toggleOpen = () => setIsOpen(!isOpen);
  const openMenu = (e) => {
    e.stopPropagation();
    alert("menu is pressed now")
  }

  return (
    <motion.li layout className="LiTaskContainer" onClick={toggleOpen} initial={{x:30+"px", borderRadius: 15 }} animate={{x:0}}>
      <motion.div layout className="TaskFlexContainer">
        {props.taskText}
        <div><button onClick={ openMenu } className="btn ml-2"><i className="fa fa-ellipsis-v fa-2x"></i></button></div>
      </motion.div>
      <motion.div layout className="TaskFlexContainer mt-2">
        <div className="TaskDate">Dues Date : {props.dueDate}</div>
        {workingOn}
      </motion.div>
      <AnimatePresence key={props.id}>{isOpen && <Content props={props} />}</AnimatePresence>
    </motion.li>
  );
}

export default Task;


function Content({props}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0}}
      transition={{duration:0.5}}
    >
      <Bottleneck/>
      <Bottleneck/>
      <Bottleneck/>
      
    </motion.div>
  );
}


// export default Content;