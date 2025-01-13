import React from "react";

const InputComp = ({ register, name, label, type = "text" }) => {
  return (
    <div class="form-floating mb-3 border-2 border-light rounded-3 shadow-sm">
      <input
        type={type}
        class="form-control"
        id="floatingInput"
        placeholder=""
        {...register(`${name}`)}
      />
      <label for="floatingInput">{label}</label>
    </div>
  );
};

export default InputComp;
