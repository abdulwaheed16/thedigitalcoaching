import React from "react";
import { motion } from "framer-motion";
import useVariants from "@/hooks/useVariants";
import { programTitles } from "@/data/programs";
import { useSelector } from "react-redux";

const Confirmation = ({ register, handleSubmit, errors }) => {
  const { status, formData } = useSelector((state) => state.contact);
  const { variants } = useVariants(status);

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <div className="confirmation-container">
        <div className="row mb-3">
          <div className="col-md-12">
            <h6 className="float-start">Your Information</h6>
          </div>
        </div>
        <div className="row">
          <div className="">
            <ul className="list-group gap-2">
              <li className="list-group-item  py-2">
                <span className="d-flex justify-content-between align-items-center">
                  <span className="fw-bold">Full Name</span>
                  <span>{`${formData?.firstName} ${formData?.lastName}`}</span>
                </span>
                <span className="d-flex justify-content-between align-items-center">
                  <span className="fw-bold">Email</span>
                  <span>{formData?.email}</span>
                </span>
                <span className="d-flex justify-content-between align-items-center">
                  <span className="fw-bold">Phone</span>
                  <span>{formData?.phone}</span>
                </span>
              </li>
              <li className="list-group-item  py-2">
                <span className="d-flex justify-content-between align-items-center">
                  <span className="fw-bold">Program / Qualification</span>
                  <span>{formData?.program}</span>
                </span>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="fw-bold ">Subjects</span>
                  <div className="d-flex justify-content-end gap-2 flex-wrap">
                    {formData?.subjects?.map((subject) => (
                      <span className="">{subject} |</span>
                    ))}
                  </div>
                </div>
                <span className="d-flex justify-content-between align-items-center">
                  <span className="fw-bold">Exam Date</span>
                  <span>{formData?.examDate}</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12">
            <div className="form-floating mb-3">
              <textarea
                className="form-control"
                placeholder="Enter your message here"
                id="floatingTextarea2"
                style={{ height: "100px" }}
                {...register("message")}
              ></textarea>
              <label for="floatingTextarea2">
                Enter your message here (optional)
              </label>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Confirmation;
