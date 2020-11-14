import React from "react";
import Task from '../Task/Task';
import { motion, AnimateSharedLayout} from "framer-motion";
import "./TaskList.css";


const tasksList = [0];

function TaskList() {
  return (
    <AnimateSharedLayout>
      <motion.ul className="UlTaskContainer">
        {tasksList.map((task) => (
          <Task key={task} workingOn="true" taskText="First stediv of the tasks This  of the tasks This  of the tasks This   of the tasks This  of the tasks This   of the tasks This   of the tasks This  of the tasks This  of the tasks This   of the tasks This   of the tasks This   of the tasks This   of the tasks This  of the tasks This  of the tasks This  of the tasks This  of the tasks This  of the tasks This  of the tasks This  of the tasks This  of the tasks This  of the tasks This is a toast on a gam secondary background — check it out!." />
        ))}
      </motion.ul>
    </AnimateSharedLayout>
  );
}


export default TaskList;
