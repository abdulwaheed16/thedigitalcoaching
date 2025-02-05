import React, { useState } from "react";

export const useGetOtp = () => {
  const [formStates] = useState({
    isLoading: false,
    isSuccess: false,
    isError: false,
    otp: "",
    error: null,
  });

  try {
    // Make API call to get otp
    // await fetch("https://your-api-endpoint.com/get-otp", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ email }),
    // });
    // const response = await res.json();
    // if (response.success) {
    //   formStates.isSuccess = true;
    //   formStates.otp = response.otp;
    // } else {
    //   formStates.isError = true;
    //   formStates.error = response.error;
    // }
  } catch (error) {
  } finally {
    formStates.isLoading = false;
  }
  return <div>useGetOtp</div>;
};
