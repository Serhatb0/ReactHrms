import * as Yup from "yup";




  
export const validationSchema = Yup.object({
  schoolName: Yup.string().required("Zorunlu Alan"),
  episode: Yup.string().required("Zorunlu Alan"),
  startOfSchool: Yup.string().required("Zorunlu Alan"),
  graduationYear: Yup.string().required("Zorunlu Alan"),
});