// import React from 'react';
// import { motion, AnimatePresence } from "framer-motion"
// import './Task.css';

// function Task(props) {

//   const animationVarient = {
//     initial:{
//       opacity:0
//     },
//     animate:{
//       opacity:1,
//       transition:{
//         duration:3
//       }
//     },
//   }
//   let [expend, setExpend] = React.useState(false);
//   let workingOn = props.workingOn ? <span className="WorkingOn">Working on</span> : null;
//   let taskText =  expend ? <motion.div variants={animationVarient} initial="initial" animate="animate">{props.taskText}</motion.div> : <div>{props.taskText.substring(0,200)+"..."}</div>;
  
//   const toggleTask = () => {
//     setExpend(!expend);
//   }

//   return (
//     <div onClick={toggleTask} className="TaskContainer">
//       <div className="TaskFlexContainer">
//         {taskText}
//         <div><button onClick={()=> alert("sk")} className="btn ml-2"><i className="fa fa-ellipsis-v fa-2x"></i></button></div>
//       </div>
//       <div className="TaskFlexContainer mt-2">
//         <div className="TaskDate">Dues Date : 10-12-2020</div>
//         {workingOn}
//       </div>
//     </div>
//   );
// }

// export default Task;



import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Task.css";





function Task(props) {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.li layout onClick={toggleOpen} initial={{x:30+"px"}} animate={{x:0}}>
      <motion.div layout>{props.taskText}</motion.div>
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
      <div className="row" />
      <div className="row" />
      <div className="row" />
    </motion.div>
  );
}


// export default Content;