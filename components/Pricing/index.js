import React from "react";
import Card from "./Card";

const Pricing = () => {
  return (
    <div className="row row-cols-lg-2 row-cols-xl-3 pricing mt-5 mx-auto">
      {[1, 2, 3, 4]?.map((pkg, index) => {
        return (
          <div className="col" key={index}>
            <Card />;
          </div>
        );
      })}
    </div>
  );
};

export default Pricing;
