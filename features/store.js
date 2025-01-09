import { configureStore } from "@reduxjs/toolkit";
import bookFilterSlice from "./bookFilterSlice";
import bookSlice from "./bookSlice";
import courseFilterSlice from "./courseFilterSlice";
import courseSlice from "./courseSlice";
import feeFilterSlice from "./feeFilterSlice";

export const store = configureStore({
  reducer: {
    course: courseSlice,
    book: bookSlice,
    courseFilter: courseFilterSlice,
    bookFilter: bookFilterSlice,
    feeFilter: feeFilterSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});
