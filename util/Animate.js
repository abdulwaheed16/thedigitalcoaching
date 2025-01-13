import React from "react";
import { motion } from "framer-motion";

const Animate = (children) => {
  return (
    <motion.div
      variants={variants}
      custom={status}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="col-lg-7 w-100"
    ></motion.div>
  );
};

export default Animate;
