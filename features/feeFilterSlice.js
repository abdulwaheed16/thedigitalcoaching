const { createSlice } = require("@reduxjs/toolkit");

const feeFilterSlice = createSlice({
  initialState: { selectedOption: "1-on-1" },
  name: "feeFilter",
  reducers: {
    setFeeFilter: (state, action) => {
      console.log("New Fee state: " + action?.payload);
      state.selectedOption = action.payload;
    },
  },
});

export const { setFeeFilter } = feeFilterSlice.actions;
export default feeFilterSlice.reducer;
