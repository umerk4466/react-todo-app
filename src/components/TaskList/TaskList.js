import React from "react";
import Task from '../Task/Task';
import { motion, AnimateSharedLayout} from "framer-motion";
import "./TaskList.css";


const tasksList = [
  {
      id: 1,
      workingOn: false,
      dueDate: "30-05-2020",
      taskText: "Here, e is a synthetic event. React defines these synthetic events according to the W3C spec, so you don’t need to worry about cross-browser compatibility. React events do not work exactly the same as native events. See the SyntheticEvent reference guide to learn more."
  },
  {
    id: 2,
    workingOn: true,
    dueDate: "10-12-2020",
    taskText: "When using React, you generally don’t need to call addEventListener to add listeners to a DOM element after it is created. Instead, just provide a listener when the element is initially rendered."
  }
];

function TaskList() {
  return (
    <AnimateSharedLayout>
      <motion.ul layout className="UlTaskContainer">
        {tasksList.map((task) => (
          <Task key={task.id} workingOn={task.workingOn} dueDate={task.dueDate} taskText={task.taskText} />
        ))}
      </motion.ul>
    </AnimateSharedLayout>
  );
}


export default TaskList;
