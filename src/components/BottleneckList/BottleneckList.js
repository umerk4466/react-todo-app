import React from "react";
import Bottleneck from '../Bottleneck/Bottleneck';
import { motion, AnimateSharedLayout} from "framer-motion";
import "./BottleneckList.css";


const bottleneckList = [
  {
      id: 1,
      isCompleted: false,
      bottleneckText: "bottle first"
  },
  {
    id: 2,
    isCompleted: true,
    bottleneckText: "bottle second is here"
}
];

function BottleneckList() {
  return (
    <AnimateSharedLayout>
      <motion.ul  layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0}} transition={{duration:0.5}} className="UlBottleneckContainer">
        {bottleneckList.map((bootleneck) => (
          <Bottleneck key={bootleneck.id} props={bootleneck} />
        ))}
      </motion.ul>
    </AnimateSharedLayout>
  );
}


export default BottleneckList;