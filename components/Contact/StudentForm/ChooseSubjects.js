import React from "react";
import { motion } from "framer-motion";
import { commonSubjects } from "@/data";

const ChooseSubjects = ({ register, handleSubmit, errors }) => {
  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <div className="subjects">
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
      </div>
      {errors.subjects && (
        <span className="text-danger">{errors.subjects.message}</span>
      )}
    </form>
  );
};

export default ChooseSubjects;
