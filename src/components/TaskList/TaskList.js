import React from "react";
import Task from '../Task/Task';
import { motion, AnimateSharedLayout} from "framer-motion";
import "./TaskList.css";


const tasksList = [
  {
      id: 1,
      workingOn: true,
      dueDate: "30-05-2020",
      taskText: "Here, e is a synthetic event. React defines these synthetic events according to the W3C spec, so you don’t need to worry about cross-browser compatibility. React events do not work exactly the same as native events. See the SyntheticEvent."
  },
  {
    id: 2,
    workingOn: false,
    dueDate: "10-12-2020",
    taskText: "When using React, you generally don’t need to call addEventListener to add listeners to a DOM element after it is created. Instead, just provide a listener when the element is initially rendered."
  },
  {
    id: 3,
    workingOn: false,
    dueDate: "10-12-2020",
    taskText: "When using React, you generally don’t need to call addEventListener to add listeners to a DOM element after it is created. Instead, just provide a listener when the element."
  }
];

function TaskList() {
  return (
    <AnimateSharedLayout>
      <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0}} transition={{duration:0.5}} layout  className="UlTaskContainer">
        {tasksList.map((task) => (
          <Task key={task.id} props={task} />
        ))}
      </motion.ul>
    </AnimateSharedLayout>
  );
}


export default TaskList;
