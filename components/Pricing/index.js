import React, { useEffect, useState } from "react";
import Card from "./Card";
import GroupIndividualToggler from "./GroupIndividualToggler";
import { useSelector } from "react-redux";

const Pricing = () => {
  const packages = [
    {
      title: "Regular",
      lessons: { count: 8, duration: " Month" },
      feeStructure: {
        individual: [
          {
            level: "O Level",
            fee: 100,
            oldFee: 120,
          },
          {
            level: "A Level",
            fee: 100,
            oldFee: 120,
          },
        ],
        group: [
          {
            level: "O Level",
            fee: 50,
            oldFee: 60,
          },
          {
            level: "A Level",
            fee: 50,
            oldFee: 60,
          },
        ],
      },
    },
    {
      title: "Standard",
      lessons: { count: 12, duration: " Month" },
      feeStructure: {
        individual: [
          {
            level: "O Level",
            fee: 100,
            oldFee: 120,
          },
          {
            level: "A Level",
            fee: 100,
            oldFee: 120,
          },
        ],
        group: [
          {
            level: "O Level",
            fee: 50,
            oldFee: 60,
          },
          {
            level: "A Level",
            fee: 50,
            oldFee: 60,
          },
        ],
      },
    },
    {
      title: "Fast Track",
      lessons: { count: 16, duration: " Month" },
      feeStructure: {
        individual: [
          {
            level: "O Level",
            fee: 100,
            oldFee: 120,
          },
          {
            level: "A Level",
            fee: 100,
            oldFee: 120,
          },
        ],
        group: [
          {
            level: "O Level",
            fee: 50,
            oldFee: 60,
          },
          {
            level: "A Level",
            fee: 50,
            oldFee: 60,
          },
        ],
      },
    },
    {
      title: "Exam Preparation",
      desc: "Past Papers Solutions",
      otherPacakge: "Standard Package (12 Classes)",
      feeStructure: {
        individual: [
          {
            level: "O Level",
            fee: 100,
            oldFee: 120,
          },
          {
            level: "A Level",
            fee: 100,
            oldFee: 120,
          },
        ],
        group: [
          {
            level: "O Level",
            fee: 50,
            oldFee: 60,
          },
          {
            level: "A Level",
            fee: 50,
            oldFee: 60,
          },
        ],
      },
    },
  ];

  return (
    <div className="pricing-wrapper">
      <div className="toggler">
        <GroupIndividualToggler />
      </div>
      <div className="row row-cols-xl-2 row-cols-xxl-3 justify-content-center pricing mt-2 g-4 mx-auto">
        {packages?.map((pkg, index) => {
          return (
            <div className="col" key={index}>
              <Card pkg={pkg} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
