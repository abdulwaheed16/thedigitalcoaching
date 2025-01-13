import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import PersonalInformation from "./MultistepForm/PersonalInformation";
import Program from "./MultistepForm/Program";
import Subject from "./MultistepForm/Subject";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { personalInformationSchema } from "@/lib/student-form-schema";

const steps = [
  { stepNumber: 0, fields: ["fullname", "email", "contact"] },
  { stepNumber: 1, fields: ["program"] },
  { stepNumber: 2, fields: ["subjects"] },
  { stepNumber: 3, fields: ["examYear"] },
  { stepNumber: 4, fields: ["confirm"] },
];
const StudentContactForm = () => {
  // const { isFirstStep, isLastStep, lastStep, status, isSuccess } = useSelector(
  //   (state) => state.contact
  // );

  const [status, setStatus] = useState("assending");
  const [currentStep, setCurrentStep] = useState(0);
  const [previousStep, setPreviousStep] = useState(0);
  // const delta = currentStep - previousStep;
  const isFirstStep = currentStep;
  const isLastStep = currentStep === steps.length - 1;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm({
    resolver: zodResolver(personalInformationSchema),
  });

  const onSubmit = async (data) => {
    console.log(data);
    reset();
  };

  // Navigation handlers
  // const dispatch = useDispatch();

  const handleNext = async () => {
    // validation
    const currentStepFields = steps[currentStep].fields;
    const currentStepOutput = await trigger(currentStepFields, {
      shouldFocus: true,
    });
    console.log("Current Step Output", currentStepOutput);
    if (!currentStepOutput) return;

    if (currentStep < steps.length - 1) {
      if (currentStep < steps.length - 2) {
        await handleSubmit(onSubmit)();
      }
      setPreviousStep(currentStep);
      setCurrentStep((step) => step + 1);
      setStatus("asscending");
    }

    // if (!isLastStep) {
    //   dispatch(nextStep());
    // }
  };
  const handlePrevious = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step - 1);
      setStatus("descending");
    }
    // if (!isFirstStep) {
    //   dispatch(previousStep());
    // }
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
          {currentStep === 0 && (
            <fieldset>
              <PersonalInformation
                key={"step1"}
                register={register}
                errors={errors}
                status={status}
              />
            </fieldset>
          )}

          {currentStep === 1 && (
            <fieldset>
              <Program
                key={"step2"}
                register={register}
                errors={errors}
                status={status}
              />
            </fieldset>
          )}

          {currentStep === 2 && (
            <fieldset>
              <Subject
                key={"step3"}
                register={register}
                errors={errors}
                status={status}
              />
            </fieldset>
          )}
          {/* {currentStep === 3 && (
            <fieldset>
              <Confimation key={"step3"} status={status} />
            </fieldset>
          )} */}
        </AnimatePresence>

        {/* Navigations */}
        <div
          className={`d-flex justify-content-between g-4 navigations navigations`}
        >
          {/* Back - Button */}

          <button
            type="button"
            className="back-btn"
            onClick={handlePrevious}
            disabled={currentStep === 0}
          >
            <span class="label"> Back</span>
            <span class="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="currentColor"
                  d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                ></path>
              </svg>
            </span>
          </button>

          {/* Next - Button */}
          <button
            type="button"
            className="next-btn"
            onClick={handleNext}
            disabled={currentStep === steps?.length - 1}
          >
            <span class="label"> {isLastStep ? "Confirm" : "Next"}</span>
            <span class="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="currentColor"
                  d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                ></path>
              </svg>
            </span>
          </button>
        </div>
      </form>
    </section>
  );
};

export default StudentContactForm;
