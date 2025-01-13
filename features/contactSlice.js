const { createSlice } = require("@reduxjs/toolkit");

const initialValues = {
  currentStep: 1,
  isSuccess: false,
  isStepSuccess: false,
  status: "asscending",
  lastStep: 4,
  isFirstStep: true,
  isLastStep: false,
  program: "",
  formData: {
    fullname: "",
    email: "",
    phone: "",
    program: "",
    examDate: "",
    subjects: [],
    message: "",
  },
};
const contactSlice = createSlice({
  name: "contactReducer",
  initialState: initialValues,
  reducers: {
    // Multistep Form controls
    nextStep: (state) => {
      if (state?.currentStep < state?.lastStep) {
        state.currentStep++;
        state.status = "asscending";
      }
      state.isFirstStep = state?.currentStep === 1;
      state.isLastStep = state?.currentStep === state?.lastStep;
    },
    previousStep: (state) => {
      if (state?.currentStep > 1) {
        state.currentStep--;
        state.status = "descending";
      }
      state.isFirstStep = state?.currentStep === 1;
      state.isLastStep = state?.currentStep === state?.lastStep;
    },
    gotoStep: (state, action) => {
      state.currentStep = action.payload;
      state.isSuccess = false;
      state.status = "asscending";
    },

    updateFormData: (state, actions) => {
      state.formData = { ...state.formData, ...actions.payload };

      // log the form data
      console.log("New Form Data: ", state.formData);
      console.log("New program: ", state.formData?.program);
      if (state.formData?.program) {
        const jsonValue = JSON.stringify(state.formData?.program);
        localStorage.setItem("program", jsonValue);
      }
    },
  },
});

export const {
  nextStep,
  previousStep,
  gotoStep,
  setStepSuccess,
  updateFormData,
} = contactSlice.actions;

export default contactSlice.reducer;
