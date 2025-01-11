import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  nextStep,
  previousStep,
  gotoStep,
} from "../../../features/contactSlice";
import StepOne from "./StepOne";
import StepThree from "./StepThree";
import StepTwo from "./StepTwo";

import { AnimatePresence } from "framer-motion";
import NextBtn from "@/components/ui/buttons/NextBtn";
import BackBtn from "@/components/ui/buttons/BackBtn";

const StudentContactForm = () => {
  const { isFirstStep, isLastStep, currentStep, status } = useSelector(
    (state) => state.contact
  );

  const dispatch = useDispatch();

  console.log("currentStep: " + currentStep);
  console.log("isFirstStep: " + isFirstStep);
  console.log("isLastStep: " + isLastStep);
  console.log("status: " + status);

  const handleNext = () => {
    if (!isLastStep) {
      dispatch(nextStep());
    }
  };

  const handlePrevious = () => {
    if (!isFirstStep) {
      dispatch(previousStep());
    }
  };

  const handleGotoStep = (step) => {
    dispatch(gotoStep(step));
  };
  return (
    <section className="multi_step_form">
      <form id="msform">
        {/* Tittle */}
        <div className="tittle">
          <h2>Get in Touch</h2>
          <p>
            In order to use this service, you have to complete this verification
            process
          </p>
        </div>
        {/* progressbar */}
        {/* <ul id="progressbar">
          <li
            className={`${currentStep > 0 && "active"}`}
            onClick={() => handleGotoStep(1)}
          >
            Personal Information
          </li>
          <li
            className={`${currentStep > 1 && "active"}`}
            onClick={() => handleGotoStep(2)}
          >
            Choose Board
          </li>
          <li
            className={`${currentStep > 2 && "active"}`}
            onClick={() => handleGotoStep(3)}
          >
            Choose Exam Year
          </li>
        </ul> */}
        {/* fieldsets */}
        <AnimatePresence mode="wait" custom={status}>
          {currentStep === 1 && (
            <fieldset>
              <StepOne key={"step1"} status={status} />
            </fieldset>
          )}

          {currentStep === 2 && (
            <fieldset>
              <StepTwo key={"step2"} status={status} />
            </fieldset>
          )}

          {currentStep === 3 && (
            <fieldset>
              <StepThree key={"step3"} status={status} />
            </fieldset>
          )}
        </AnimatePresence>
        <div className="d-flex justify-content-between g-4 my-5 mt-auto">
          <BackBtn />
          <NextBtn />
        </div>
      </form>
    </section>
  );
};

export default StudentContactForm;
