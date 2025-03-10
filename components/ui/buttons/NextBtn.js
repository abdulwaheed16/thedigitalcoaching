import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextStep } from "../../../features/contactSlice";

const NextBtn = () => {
  const { isLastStep } = useSelector((state) => state.contact);
  const dispatch = useDispatch();

  const handleNext = () => {
    if (!isLastStep) {
      dispatch(nextStep());
    }
  };
  return (
    <button
      type="button"
      className="next-btn"
      onClick={handleNext}
      disabled={isLastStep}
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
  );
};

export default NextBtn;
