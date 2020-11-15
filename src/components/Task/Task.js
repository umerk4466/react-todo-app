import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Task.css";
import BottleneckList from "../BottleneckList/BottleneckList"


function Task({props}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const workingOn = props.workingOn ? <span className="WorkingOn">Working on</span> : null;
  // functions
  const toggleOpen = () => setIsOpen(!isOpen);
  const openMenu = (e) => {
    e.stopPropagation();
    alert("menu is pressed now")
  }

  return (
    <motion.li layout className="LiTaskContainer" onClick={toggleOpen}>
      <motion.div layout className="TaskFlexContainer">
        {props.taskText}
        <div><button onClick={ openMenu } className="btn ml-2"><i className="fa fa-ellipsis-v fa-2x"></i></button></div>
      </motion.div>
      <motion.div layout className="TaskFlexContainer mt-2">
        <div className="TaskDate">Dues Date : {props.dueDate}</div>
        {workingOn}
      </motion.div>
      <AnimatePresence key={props.id}>{isOpen && <BottleneckList props={props} />}</AnimatePresence>
    </motion.li>
  );
}

export default Task;