import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const Card = ({ pkg }) => {
  // getting the fee structure mode
  const { selectedOption } = useSelector((state) => state?.feeFilter);
  console.log("SelectedOption: ", selectedOption);
  return (
    /* From Uiverse.io by abrahamcalsin */
    <div class="plan-card">
      <h2>{pkg?.title}</h2>
      <div class="lessons">
        <p>
          {pkg?.lessons
            ? `${pkg?.lessons?.count} Lessons in a ${pkg?.lessons?.duration}`
            : pkg?.desc}
        </p>
        <div></div>
      </div>
      <div class="benefits-list">
        <ul className="list-group">
          {pkg?.otherPacakge && (
            <li className="list-group-item">
              <span>{pkg?.otherPacakge}</span>
            </li>
          )}
          {selectedOption === "1-on-1"
            ? pkg?.feeStructure?.individual?.map((feeData, index) => (
                <li
                  key={index}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <div>
                    <i className="fa-thin fa-square-check me-2"></i>
                    <span className="fw-bold">{feeData?.level}</span>
                  </div>
                  <div>
                    <span className="text-primary">${feeData?.fee}</span>
                    {feeData?.fee < feeData?.oldFee && (
                      <span className="text-success ms-2">
                        Discounted ${feeData?.oldFee - feeData?.fee}
                      </span>
                    )}
                  </div>
                </li>
              ))
            : pkg?.feeStructure?.group?.map((feeData, index) => (
                <li
                  key={index}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <div>
                    <i className="fa-thin fa-square-check me-2"></i>
                    <span className="fw-bold">{feeData?.level}</span>
                  </div>
                  <div>
                    <span className="text-primary">${feeData?.fee}</span>
                    {feeData?.fee < feeData?.oldFee && (
                      <span className="text-success ms-2">
                        Discounted ${feeData?.oldFee - feeData?.fee}
                      </span>
                    )}
                  </div>
                </li>
              ))}
        </ul>
      </div>
      <div class="button-get-plan">
        <Link href="#">
          <span>Sign Up</span>
        </Link>
      </div>
    </div>
  );
};

export default Card;
