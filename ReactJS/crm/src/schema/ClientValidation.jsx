import * as yup from "yup";

export const crmSchema = yup.object({
  address: yup.string().required("please enter this field"),
  country: yup.string().required("please enter this field"),
  directSales: yup.string().required("please enter this field"),
  consultativeSales: yup.string().required("please enter this field"),
  requestForProposal: yup.string().required("please enter this field"),
  date: yup.string().required("please enter this field"),
  consultant: yup.string().required("please enter this field"),
  totalPrice: yup.string().required("please enter this field"),

  clientname: yup.string().min(2).required("Please enter your name"),
  email: yup.string().email().required("Please enter your email"),
  option: yup
    .string()
    .required("Please select gender")
    .test("is-selected", "Please select a gender", (value) => {
      return value !== undefined && value !== null;
    }),
});
