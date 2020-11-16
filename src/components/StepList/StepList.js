import React from "react";
import Step from '../Step/Step';
import { motion } from "framer-motion";
import "./StepList.css";


const stepList = [
  {
    id: 1,
    stepText: "step is hre"
  },
  {
    id: 2,
    stepText: "second step is here"
}
];

function StepList() {
  return (
      <motion.ul layout initial={{ opacity: 0, x:60+"px" }} animate={{ opacity: 1,x:0 }} exit={{opacity:0}} className="UlStepContainer">
      <motion.div layout className="StepText">Steps to take</motion.div>
        {stepList.map((step) => (
          <Step key={step.id} props={step} />
        ))}
      </motion.ul>
  );
}


export default StepList;