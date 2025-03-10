import { configureStore } from "@reduxjs/toolkit";
import bookFilterSlice from "./bookFilterSlice";
import bookSlice from "./bookSlice";
import courseFilterSlice from "./courseFilterSlice";
import courseSlice from "./courseSlice";
import feeFilterSlice from "./feeFilterSlice";
import contactSlice from "./contactSlice";

export const store = configureStore({
  reducer: {
    course: courseSlice,
    book: bookSlice,
    courseFilter: courseFilterSlice,
    bookFilter: bookFilterSlice,
    feeFilter: feeFilterSlice,
    contact: contactSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});
