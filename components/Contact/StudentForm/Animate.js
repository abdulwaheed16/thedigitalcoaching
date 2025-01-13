import React from "react";
import { motion } from "framer-motion";
import useVariants from "@/hooks/useVariants";
import { useSelector } from "react-redux";

const Animate = ({ children }) => {
  const { status } = useSelector((state) => state.contact);
  const variants = useVariants(status);
  return (
    <motion.div
      variants={variants}
      custom={status}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="col-lg-7 w-100"
    >
      {children}
    </motion.div>
  );
};

export default Animate;
