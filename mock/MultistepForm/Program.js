import React, { useEffect } from "react";
import { motion } from "framer-motion";
import useVariants from "@/hooks/useVariants";
import { programTitles } from "@/data/programs";
import { useDispatch, useSelector } from "react-redux";
// import { setStepSuccess } from "@/features/contactSlice";

const Program = ({ status, register, errors }) => {
  const { variants } = useVariants(status);

  return (
    <motion.div
      variants={variants}
      custom={status}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="col-lg-7 w-100"
    >
      <h4 className="py-4">Choose Your Program</h4>
      <div className="custom-radio-group w-100">
        {programTitles?.map((title) => (
          <label className="custom-radio-container" key={title}>
            <input
              type="radio"
              name="custom-radio"
              value={title}
              {...register("program")}
            />
            <span className="custom-radio-checkmark"></span>
            {title}
          </label>
        ))}
      </div>
      {errors.program && (
        <span className="text-danger">{errors.program.message}</span>
      )}
    </motion.div>
  );
};

export default Program;
