import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setFeeFilter } from "@/features/feeFilterSlice";

const GroupIndividualToggler = () => {
  const [selectedOption, setSelectedOption] = useState("1-on-1");
  const dispatch = useDispatch();

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
    dispatch(setFeeFilter(event.target.value));
  };

  return (
    <>
      <div className="radio-inputs">
        <label className="radio">
          <input
            type="radio"
            name="radio"
            value="1-on-1"
            checked={selectedOption === "1-on-1"}
            onChange={handleRadioChange}
          />
          <span className="name">1-on-1</span>
        </label>
        <label className="radio">
          <input
            type="radio"
            name="radio"
            value="Group"
            checked={selectedOption === "Group"}
            onChange={handleRadioChange}
          />
          <span className="name">Group</span>
        </label>
      </div>
    </>
  );
};

export default GroupIndividualToggler;
