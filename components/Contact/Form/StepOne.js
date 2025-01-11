import React from "react";
import { motion } from "framer-motion";
import useVariants from "@/hooks/useVariants";

const StepOne = (status) => {
  const { variants } = useVariants(status);
  return (
    <motion.div
      variants={variants}
      custom={status}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="col-lg-7 w-100"
    >
      <form className="px-4">
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="floatingInput"
            placeholder=""
          />
          <label for="floatingInput">Full Name</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder=""
          />
          <label for="floatingInput">Email Address</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder=""
          />
          <label for="floatingInput">Phone Number</label>
        </div>
      </form>
    </motion.div>
  );
};

export default StepOne;
