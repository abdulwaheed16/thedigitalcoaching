import React, { useEffect, useState } from "react";
import { programs } from "@/data";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { sleep } from "@/util/sleep";

const ExamDate = ({ register, handleSubmit, errors }) => {
  const [isLoading, setIsLoading] = useState(false);
  //   Sleep

  useEffect(() => {
    setIsLoading(true);
    sleep(2000).then(() => setIsLoading(false));
  }, []);

  const {
    formData: { program },
  } = useSelector((state) => state.contact);
  console.log("storedProgram", program);

  const examDates = programs?.find(
    (p) => p.title.toLowerCase() === program.toLowerCase()
  )?.examDates;

  //   const { formData } = useSelector((state) => state.contact);

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
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
      <h4 className="py-4">Choose Your Exam Date </h4>
      <div className="custom-radio-group w-100">
        {/* {isLoading && <div>Loading...</div>} */}
        {examDates?.map((examDate) => (
          <label className="custom-radio-container" key={examDate}>
            <input
              type="radio"
              name="custom-radio"
              value={examDate}
              {...register("examDate")}
            />
            <span className="custom-radio-checkmark"></span>
            {examDate}
          </label>
        ))}
      </div>
      {errors.examDate && (
        <span className="text-danger">{errors.examDate.message}</span>
      )}
    </form>
  );
};

export default ExamDate;
