import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/router";
import { personalInformationSchema } from "@/lib/student-form-schema";
import { commonSubjects, programTitles } from "@/data/programs";
import PersonalInfo from "./PersonalInfo";
import ChooseProgram from "./ChooseProgram";
import ChooseSubjects from "./ChooseSubjects";
import { AnimatePresence } from "framer-motion";
import Animate from "./Animate";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData } from "@/features/contactSlice";
import ExamDate from "./ExamDate";
import toast from "react-hot-toast";
import ThankYou from "./ThankYou";
import Confimation from "./Confimation";
import { useCreateStudentLead } from "@/api-services";
import { api } from "@/config/axios.config";
import axios from "axios";

const step2Schema = z.object({
  program: z.string().min(1, "Program is required"),
});

const step3Schema = z.object({
  subjects: z.array(z.string()).min(1, "Select at least one subject"),
});

const step4Schema = z.object({
  examDate: z.string().min(1, "Exam Date is required"),
});
const messageSchema = z.object({
  message: z.string().optional().nullable(),
});

const steps = [
  {
    id: 1,
    label: "Personal Information",
    schema: personalInformationSchema,
    component: ({ register, handleSubmit, errors }) => (
      <Animate>
        <PersonalInfo
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
        />
      </Animate>
    ),
  },
  {
    id: 2,
    label: "Program",
    schema: step2Schema,
    component: ({ register, handleSubmit, errors }) => (
      <Animate>
        <ChooseProgram
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
        />
      </Animate>
    ),
  },
  {
    id: 3,
    label: "Subjects",
    schema: step3Schema,
    component: ({ register, handleSubmit, errors }) => (
      <Animate>
        <ChooseSubjects
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
        />
      </Animate>
    ),
  },
  {
    id: 4,
    label: "Exam Date",
    schema: step4Schema,
    component: ({ register, handleSubmit, errors }) => (
      <Animate>
        <ExamDate
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
        />
      </Animate>
    ),
  },
  {
    id: 5,
    label: "Message",
    schema: messageSchema,
    component: ({ register, handleSubmit, errors }) => (
      <Animate>
        <Confimation
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
        />
      </Animate>
    ),
  },
];

const StudentForm = () => {
  const router = useRouter();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const { formData } = useSelector((state) => state.contact);

  const {
    status,
    formData: { program },
  } = useSelector((state) => state.contact);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm({
    resolver: zodResolver(steps[currentStep].schema),
  });

  const handleNext = async () => {
    const isValid = await trigger();
    console.log("Validity: ", isValid);
    if (!isValid) return;

    const nextStep = currentStep + 1;
    if (nextStep < steps.length) {
      setCurrentStep(nextStep);

      // update the each step data to the store
      handleSubmit(async (data) => {
        console.log("Form Data Stored:", data);
        dispatch(
          updateFormData({
            ...data,
            program: data?.program ?? program,
          })
        );
      })();
    }

    if (currentStep === steps.length - 1) {
      // send data to the server

      handleSubmit(async (data) => {
        setIsLoading(true);
        try {
          const response = await axios.post(
            "https://thedigitalcoaching-dashboard.vercel.app/api/leads/studentsleads",
            {
              ...formData,
              data,
            }
          );
          if (response?.status === 200) {
            console.log("Form submitted:", data);
            toast.success("Form submitted successfully!");
            setIsSuccess(true);
            reset();
          } else {
            console.log("Error creating student lead:", response);
            toast.error("Oops! Something went wrong");
          }
        } catch (error) {
          console.error("Error creating student lead:", error);
          throw error;
        } finally {
          setIsLoading(false);
        }
      })();
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <>
      <div className={"step-form-container"}>
        <h2 className="mb-4">Get into Touch</h2>
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: `${(currentStep + 1) * 20}%` }}
            aria-valuenow={currentStep + 1}
            aria-valuemin="0"
            aria-valuemax="3"
          />
        </div>

        {isSuccess ? (
          <ThankYou />
        ) : (
          <>
            <AnimatePresence
              mode="wait"
              custom={status}
              className="step-content"
            >
              {steps[currentStep].component({
                register,
                handleSubmit,
                errors,
              })}
            </AnimatePresence>
            <div className="buttons mt-3">
              {currentStep > 0 && (
                <button
                  type="button"
                  className={`${
                    isLoading && "visually-hidden"
                  } btn btn-secondary`}
                  onClick={handlePrev}
                >
                  Previous
                </button>
              )}

              {isLoading ? (
                <button class="btn btn-primary" type="button" disabled>
                  <span
                    class="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Submitting...
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-primary d-flex gap-2 "
                  onClick={handleNext}
                  disabled={false}
                >
                  <span>
                    {currentStep === steps.length - 1 ? "Submit" : "Next"}
                  </span>
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default StudentForm;
