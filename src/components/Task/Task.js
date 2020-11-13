import React from 'react';
import { motion } from "framer-motion"
import './Task.css';

function Task(props) {
  let [expend, setExpend] = React.useState(false);
  let workingOn = props.workingOn ? <span className="WorkingOn">Working on</span> : null;
  let taskText =  expend ? <motion.div initial={{opacity:0}} animate={{opacity:1}}  transition={{duration: 1}}>{props.taskText}</motion.div> : <div>{props.taskText.substring(0,200)+"..."}</div>;
  
  const toggleTask = () => {
    setExpend(!expend);
  }
  
  return (
    <div onClick={toggleTask} className="TaskContainer">
      <div className="TaskFlexContainer">
        {taskText}
        <div><button onClick={()=> alert("sk")} className="btn ml-2"><i className="fa fa-ellipsis-v fa-2x"></i></button></div>
      </div>
      <div className="TaskFlexContainer mt-2">
        <div className="TaskDate">Dues Date : 10-12-2020</div>
        {workingOn}
      </div>
    </div>
  );
}

export default Task;
