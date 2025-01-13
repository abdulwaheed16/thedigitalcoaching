import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import useVariants from "@/hooks/useVariants";
import { commonSubjects } from "@/data/programs";
import { useDispatch, useSelector } from "react-redux";
// import { setStepSuccess } from "@/features/contactSlice";

const Subject = ({ status, register, errors }) => {
  const { variants } = useVariants(status);
  return (
    <motion.div
      variants={variants}
      custom={status}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="col-lg-7 w-100 subjects"
    >
      <h4 className="py-4">Choose Your Subjects</h4>
      {commonSubjects?.map((subject) => (
        <label className="ios-checkbox blue" key={subject}>
          <input
            type="checkbox"
            id={subject}
            value={subject}
            {...register("subjects")}
          />
          <div class="checkbox-wrapper">
            <div class="checkbox-bg"></div>
            <svg fill="none" viewBox="0 0 24 24" class="checkbox-icon">
              <path
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="3"
                stroke="currentColor"
                d="M4 12L10 18L20 6"
                class="check-path"
              ></path>
            </svg>
          </div>

          {subject}
        </label>
      ))}
      {errors.subjects && (
        <span className="text-danger">{errors.subjects.message}</span>
      )}
    </motion.div>
  );
};

export default Subject;
