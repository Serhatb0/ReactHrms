import { Formik, Form } from "formik";
import * as Yup from "yup";
import RegisterEmployerService from "../../services/registerEmployerService";
import "./css/EmployerRegister.css";
import BiricikTextInput from "../../utilities/customFormControls/BiricikTextInput";
import { Button } from "semantic-ui-react";

export default function EmployerRegisterPage() {
  let registerEmployerSerivce = new RegisterEmployerService();

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
      
          <form >
            <h2>Kayıt Ol</h2>
            <p className="hint-text">
              Create your account. It's free and only takes a minute.
            </p>
            <div className="form-group">
              <div className="row">
                <div className="col">
                  <BiricikTextInput
                    className="form-control"
                    name="companyName"
                    placeholder="Şirket Adı"
                  ></BiricikTextInput>
                </div>
                <div className="col">
                  <BiricikTextInput
                   className="form-control"
                    name="webAddress"
                    placeholder="Web Addresi"
                  ></BiricikTextInput>
                </div>
              </div>
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                name="confirm_password"
                placeholder="Confirm Password"
              />
            </div>
            <div className="form-group">
              <label className="form-check-label">
                <input type="checkbox" /> I accept the <a>Terms of Use</a> &amp;{" "}
                <a>Privacy Policy</a>
              </label>
            </div>
          </form>
       
          <Button type="submit" color="teal" fluid size="large">
            Kayıt Ol
          </Button>

          <div className="text-center">
            Already have an account? <a>Sign in</a>
          </div>
        </div>
      </Form>
    </Formik>
  );
}
