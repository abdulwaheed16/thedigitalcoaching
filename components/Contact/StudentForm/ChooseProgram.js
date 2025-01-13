import React from "react";
import { programTitles } from "@/data";
import { motion } from "framer-motion";

const ChooseProgram = ({ register, handleSubmit, errors }) => {
  const onSubmit = async (data) => {
    console.log("Program Selected: ", data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* <div className="mb-3">
        <label htmlFor="program">Program:</label>
        <select id="program" {...register("program")} className="form-select">
          <option value="">Select Program</option>
          <option value="Program A">Program A</option>
          <option value="Program B">Program B</option>
        </select>
        {errors.program && (
          <span className="text-danger">{errors.program.message}</span>
        )}
      </div> */}
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
    </form>
  );
};

export default ChooseProgram;
