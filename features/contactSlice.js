const { createSlice } = require("@reduxjs/toolkit");

const initialValues = {
  currentStep: 1,
  isSuccess: false,
  status: "asscending",
  lastStep: 3,
  isFirstStep: true,
  isLastStep: false,
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
  },
});

export const { nextStep, previousStep, gotoStep } = contactSlice.actions;

export default contactSlice.reducer;
