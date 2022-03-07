import * as Yup from "yup";

export const validationSchema = Yup.object({
  comment: Yup.string().required("Required"),
  imageURL: Yup.string().required("Required"),
  name: Yup.string().required("Required"),
});
