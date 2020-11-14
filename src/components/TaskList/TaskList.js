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
import Task from '../Task/Task';
import { motion, AnimateSharedLayout} from "framer-motion";
import "./TaskList.css";


const tasksList = [0];

function TaskList() {
  return (
    <AnimateSharedLayout>
      <motion.ul layout>
        {tasksList.map((task) => (
              <Task key={task} workingOn="true" taskText="First stediv of the tasks This  of the tasks This  of the tasks This   of the tasks This  of the tasks This   of the tasks This   of the tasks This  of the tasks This  of the tasks This   of the tasks This   of the tasks This   of the tasks This   of the tasks This  of the tasks This  of the tasks This  of the tasks This  of the tasks This  of the tasks This  of the tasks This  of the tasks This  of the tasks This  of the tasks This is a toast on a gam secondary background — check it out!." />
        ))}
      </motion.ul>
    </AnimateSharedLayout>
  );
}


export default TaskList;
