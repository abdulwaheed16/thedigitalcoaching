import { useMutation } from "@tanstack/react-query";
import { api } from "@/config/axios.config";

export const useCreateStudentLead = () => {
  //   const mutation = useMutation({
  //     mutationFn: async (data) => {
  //       // data is passed to mutationFn
  //       try {
  //         const response = await api.post("/leads/studentLeads", data);
  //         return response.data;
  //       } catch (error) {
  //         console.error("Error creating student lead:", error);
  //         throw error;
  //       }
  //     },
  //     onSuccess: (data) => {
  //       console.log("Student lead created successfully:", data);
  //     },
  //     onError: (error) => {
  //       console.error("Mutation error:", error);
  //     },
  //   });
  //   return {
  //     createStudentLead: mutation.mutate,
  //     isLoading: mutation.isLoading,
  //     isSuccess: mutation.isSuccess,
  //     isError: mutation.isError,
  //     data: mutation.data,
  //     reset: mutation.reset,
  //   };
};

export const useGetOtpService = async (email) => {};

export const useVerifyOtpService = async (email, otp) => {};

export const useCreateNewsLetterService = async (newsletter) => {};
