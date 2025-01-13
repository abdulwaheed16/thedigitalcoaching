const PersonalInfo = ({ register, handleSubmit, errors }) => {
  const onSubmit = async (data) => {
    console.log("Personal Info Data: ", data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
          <span className="text-danger">{errors.fullname.message}</span>
        )}
      </div>

      <div class="form-floating mb-3 border-2 border-light rounded-3 shadow-sm">
        <input
          type="text"
          class="form-control"
          id="floatingInput"
          placeholder=""
          {...register("email")}
        />
        <label for="floatingInput">Your Email Address</label>
        {errors.email && (
          <span className="text-danger">{errors.email.message}</span>
        )}
      </div>
      <div class="form-floating mb-3 border-2 border-light rounded-3 shadow-sm">
        <input
          type="text"
          class="form-control"
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
  );
};

export default PersonalInfo;
