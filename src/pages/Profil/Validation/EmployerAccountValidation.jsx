import * as Yup from "yup";


export const validationSchema = Yup.object({
  companyName: Yup.string().required("Zorunlu Alan"),
  webAddress: Yup.string().required("Web Adres Zorunlu"),
  email: Yup.string().email("Email Formatı Değil").required("Zorunlu Alan"),
});

