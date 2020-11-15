import React from "react";
import Bottleneck from '../Bottleneck/Bottleneck';
import { motion} from "framer-motion";
import "./BottleneckList.css";


const bottleneckList = [
  {
      id: 1,
      isCompleted: false,
      bottleneckText: "bottle first bottle firstbottle firstbottle firstbottle firstbottle firstbottle firstbottle firstbottle firstbottle firstbottle firstbottle firstbottle firstbottle firstbottle first"
  },
  {
    id: 2,
    isCompleted: true,
    bottleneckText: "bottle second is here"
}
];

function BottleneckList() {
  return (
      <motion.ul layout initial={{ opacity: 0, x:60+"px" }} animate={{ opacity: 1, x:0}} exit={{opacity:0}} className="UlBottleneckContainer">
      <motion.div layout className="BootlenecksText">Bootlenecks</motion.div>
        {bottleneckList.map((bootleneck) => (
          <Bottleneck key={bootleneck.id} props={bootleneck} />
        ))}
      </motion.ul>
  );
}


export default BottleneckList;