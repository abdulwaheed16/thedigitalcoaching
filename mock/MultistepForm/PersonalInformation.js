import React from "react";
import { motion } from "framer-motion";
import useVariants from "@/hooks/useVariants";
import { useForm } from "react-hook-form";
import { z, zodResolver } from "zod";
// import { setStepSuccess } from "@/features/contactSlice";
import { useDispatch } from "react-redux";

// const personalInformationSchema = z.object({
//   fullname: z.string().min(3).max(50).required(),
//   email: z.string().email().required(),
//   phone: z.string().min(10).max(15).required(),
// });

const PersonalInformation = ({ status, register, errors }) => {
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
      <form>
        <div className="px-md-4">
          <h4 className="py-4">Personal Informations</h4>

          <div class="form-floating mb-3 border-2 border-light rounded-3 shadow-sm">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder=""
              {...register("fullname")}
            />
            <label for="floatingInput">Full Name</label>
            {errors.fullname && (
              <span className="text-danger ">{errors.fullname.message}</span>
            )}
          </div>
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder=""
              {...register("email")}
            />
            <label for="floatingInput">Email Address</label>
            {errors.email && (
              <span className="text-danger ">{errors.email.message}</span>
            )}
          </div>
          <div class="form-floating mb-3">
            <input
              type="number"
              class="form-control"
              id="floatingInput"
              placeholder=""
              {...register("phone")}
            />
            <label for="floatingInput">Phone Number</label>
            {errors.phone && (
              <span className="text-danger ">{errors.phone.message}</span>
            )}
          </div>
        </div>
      </form>
    </motion.div>
  );
};

export default PersonalInformation;
