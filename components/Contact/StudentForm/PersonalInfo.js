import { otpSchema } from "@/lib/student-form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const PersonalInfo = ({ register, handleSubmit, errors }) => {
  const onSubmit = async (data) => {
    console.log("Personal Info Data: ", data);
  };

  // useform for handling the otp
  const {
    register: registerOtp,
    handleSubmit: handleSubmitOtp,
    formState: { errors: errorsOtp },
  } = useForm({
    resolver: zodResolver(otpSchema),
  });

  // /api/leads/studentsleads/verify-otp
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="d-flex flex-column flex-md-row align-items-start gap-md-3 mt-5">
          {" "}
          <div class="form-floating mb-3 border-2 border-light rounded-3 shadow-sm w-100">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder=""
              {...register("firstName")}
            />
            <label for="floatingInput">First Name</label>
            {errors.firstName && (
              <span className="text-danger">{errors.firstName.message}</span>
            )}
          </div>
          <div class="form-floating mb-3 border-2 border-light rounded-3 shadow-sm w-100">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder=""
              {...register("lastName")}
            />
            <label for="floatingInput">Last Name</label>
            {errors.firstName && (
              <span className="text-danger">{errors.firstName.message}</span>
            )}
          </div>
        </div>

        <div class="form-floating mb-3 border-2 border-light rounded-3 shadow-sm">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder=""
            {...register("email")}
          />
          <label for="floatingInput">Your Email Address</label>
          {errors.email && (
            <span className="text-danger">{errors.email.message}</span>
          )}
        </div>
        <div className="form-floating mb-3 border-2 border-light rounded-3 shadow-sm">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder=""
            {...register("phone")}
          />
          <label for="floatingInput">Phone Number</label>
          {errors.phone && (
            <span className="text-danger">{errors.phone.message}</span>
          )}
        </div>
      </form>

      <form className="d-flex align-items-start gap-2 mt-5">
        <div className="mb-3 flex-grow-0">
          <input
            type="text"
            className={`form-control form-floating ${
              errors.otp ? "is-invalid" : ""
            } border-b-2 p-1 border-light rounded-3 shadow-sm`}
            id="otp"
            placeholder="Enter OTP"
            style={{ height: "42px" }}
            {...register("otp")}
          />
          {errors.otp && (
            <div className="invalid-feedback">{errors.otp.message}</div>
          )}
        </div>
        <button
          type="submit"
          className="btn btn-white bg-light border text-dark transition duration-300 ease-in-out hover:bg-gray-100 hover:text-black"
          style={{ height: "42px", display: "flex", alignItems: "center" }}
        >
          Get OTP
        </button>
      </form>
    </>
  );
};

export default PersonalInfo;
