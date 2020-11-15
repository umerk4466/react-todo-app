import React from "react";
import Step from '../Step/Step';
import { motion, AnimateSharedLayout} from "framer-motion";
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
    <AnimateSharedLayout>
      <motion.ul layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{opacity:0}} className="UlStepContainer">
      <motion.div layout className="StepText">Steps</motion.div>
        {stepList.map((step) => (
          <Step key={step.id} props={step} />
        ))}
      </motion.ul>
    </AnimateSharedLayout>
  );
}


export default StepList;