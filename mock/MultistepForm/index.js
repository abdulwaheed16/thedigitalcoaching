"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
import NextBtn from "@/components/ui/buttons/NextBtn";
import BackBtn from "@/components/ui/buttons/BackBtn";
import PersonalInformation from "./PersonalInformation";
import Program from "./Program";
import Subject from "./Subject";
import Confimation from "../../components/Contact/StudentForm/Confimation";
import Success from "./Success";
import { nextStep, previousStep } from "@/features/contactSlice";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers";
import { StudentValidationSchema } from "@/lib/student-form-schema";

const steps = [
  { stepNumber: 0, fields: ["fullname", "email", "contact"] },
  { stepNumber: 1, fields: ["program"] },
  { stepNumber: 2, fields: ["subjects"] },
  { stepNumber: 3, fields: ["examYear"] },
  { stepNumber: 4, fields: ["confirm"] },
];
const StudentContactForm = () => {
  const { isFirstStep, isLastStep, lastStep, currentStep, status, isSuccess } =
    useSelector((state) => state.contact);

  // Navigation handlers
  // const dispatch = useDispatch();

  const handleNext = async () => {
    if (!isLastStep) {
      dispatch(nextStep());
    }
  };
  const handlePrevious = () => {
    if (!isFirstStep) {
      dispatch(previousStep());
    }
  };

  return (
    <section className="multi_step_form">
      <div className="tittle">
        <h2>Get in Touch</h2>
        <p>
          In order to use this service, you have to complete this verification
          process
        </p>
      </div>
      {/* {isSuccess && <Success />} */}
      <form id="msform">
        {/* Tittle */}
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
              <PersonalInformation key={"step1"} status={status} />
            </fieldset>
          )}

          {currentStep === 2 && (
            <fieldset>
              <Program key={"step2"} status={status} />
            </fieldset>
          )}

          {currentStep === 3 && (
            <fieldset>
              <Subject key={"step3"} status={status} />
            </fieldset>
          )}
          {currentStep === 4 && (
            <fieldset>
              <Confimation key={"step3"} status={status} />
            </fieldset>
          )}
        </AnimatePresence>

        {/* Navigations */}
        <div
          className={`d-flex justify-content-between g-4 navigations navigations`}
        >
          <BackBtn />
          <NextBtn />
        </div>
      </form>
    </section>
  );
};

export default StudentContactForm;
