import React from "react";
import { motion } from "framer-motion";
import useVariants from "@/hooks/useVariants";

const StepThree = (status) => {
  const { variants } = useVariants(status);

  return (
    <motion.div
      variants={variants}
      custom={status}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="col-lg-7 w-100 "
    >
      Step Three
    </motion.div>
  );
};

export default StepThree;
