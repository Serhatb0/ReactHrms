import { Formik, Form } from "formik";
import * as Yup from "yup";
import "./css/EmployerRegister.css";
import BiricikTextInput from "../../utilities/customFormControls/BiricikTextInput";
import { Button } from "semantic-ui-react";

export default function EmployerRegisterPage() {

  const initialValues = {
    companyName: "",
    webAddress: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const schema = Yup.object({
    companyName: Yup.string().required("Zorunlu Alan"),
    webAddress: Yup.string().required("Web Adres Zorunlu"),
    email: Yup.string().email("Email Formatı Değil").required("Zorunlu Alan"),
    password: Yup.string()
      .min(6, "Şifre En Az 6 Krakter Olmalı")
      .required("Zorunlu Alan"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Şifre Aynı Değil")
      .required("Zorunlu Alan"),
    privacyPolicy: Yup.bool().oneOf(
      [true],
      "Şartları ve Koşulları kabul etmen gerekli"
    ),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => {
        // registerEmployerSerivce.postRegisterEmployer(fields);

        console.log(values);
        console.log("serhat");
      }}
    >
      <Form style={{ marginTop: "6em" }}>
        <div className="signup-form">
          <form>
            <h2>Kayıt Ol</h2>
            <p className="hint-text">
              Peşinden Gidecek Cesaretin Varsa Bütün Hayaller Gerçek Olabilir
            </p>
            <div className="form-group">
              <div className="row">
                <div className="col">
                  <BiricikTextInput
                    className="form-control"
                    name="companyName"
                    placeholder="Şirket Adı"
                    type="text"
                  ></BiricikTextInput>
                </div>
                <div className="col">
                  <BiricikTextInput
                    className="form-control"
                    name="webAddress"
                    placeholder="Web Addresi"
                    type="text"
                  ></BiricikTextInput>
                </div>
              </div>
            </div>
            <div className="form-group">
              <BiricikTextInput
                className="form-control"
                name="email"
                placeholder="Email"
                type="email"
              ></BiricikTextInput>
            </div>
            <div className="form-group">
              <BiricikTextInput
                className="form-control"
                name="password"
                placeholder="Şifre"
                type="password"
              ></BiricikTextInput>
            </div>
            <div className="form-group">
              <BiricikTextInput
                className="form-control"
                name="confirmPassword"
                placeholder="Şifre Tekrarı"
                type="password"
              ></BiricikTextInput>
            </div>
            <div className="form-group">
              <label className="form-check-label">
                <input name="privacyPolicy" type="checkbox" /> kabul ediyorum{" "}
                <a>Kullanım Şartları</a> &amp; <a>Gizlilik Politikası</a>
              </label>
            </div>
           
          </form>
          <Button type="submit" color="teal" fluid size="large">
            Kayıt Ol
          </Button>
         

          <div className="text-center">
            Zaten hesabınız var mı? <a>Oturum aç</a>
          </div>
        </div>
      </Form>
    </Formik>
  );
}
