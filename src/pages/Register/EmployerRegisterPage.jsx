import React, { useState, useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import RegisterEmployerService from "../../services/registerEmployerService";

export default function EmployerRegisterPage() {

    let registerEmployerSerivce = new RegisterEmployerService();
    
 
  return (
    <div>
      {" "}
      <Formik
        initialValues={{
          companyName: "",
          webAddress: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={Yup.object().shape({
          companyName: Yup.string().required("Zorunlu Alan"),
          webAddress: Yup.string().required("Web Adres Zorunlu"),
          email: Yup.string()
            .email("Email Formatı Değil")
            .required("Zorunlu Alan"),
          password: Yup.string()
            .min(6, "Şifre En Az 6 Krakter Olmalı")
            .required("Zorunlu Alan"),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Şifre Aynı Değil")
            .required("Zorunlu Alan"),
        })}
        onSubmit={(fields) => {
          registerEmployerSerivce.postRegisterEmployer(fields);
          

        }}
      >
        {({ errors, status, touched }) => (
          <Form style={{ marginTop: "6em" }}>
            <div className="container">
              <div className="form-row justify-content-center align-items-center">
                <div className="form-group col-4 ">
                  <Field
                    name="companyName"
                    placeholder="Şirket Adı"
                    as="input"
                    className={
                      "form-control " +
                      (errors.companyName && touched.companyName
                        ? " is-invalid"
                        : "")
                    }
                  ></Field>
                  <ErrorMessage
                    name="companyName"
                    component="div"
                    className="invalid-feedback"
                  />
                  <Field
                    style={{ marginTop: "1em" }}
                    name="webAddress"
                    placeholder="webAddress"
                    as="input"
                    className={
                      "form-control " +
                      (errors.webAddress && touched.webAddress
                        ? " is-invalid"
                        : "")
                    }
                  ></Field>
                  <ErrorMessage
                    name="webAddress"
                    component="div"
                    className="invalid-feedback"
                  />
                  <Field
                    style={{ marginTop: "1em" }}
                    name="email"
                    placeholder="Email"
                    as="input"
                    type="email"
                    className={
                      "form-control " +
                      (errors.email && touched.email ? " is-invalid" : "")
                    }
                  ></Field>
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="invalid-feedback"
                  />
                  <Field
                    style={{ marginTop: "1em" }}
                    name="password"
                    placeholder="Şifre"
                    as="input"
                    type="password"
                    className={
                      "form-control " +
                      (errors.password && touched.password ? " is-invalid" : "")
                    }
                  ></Field>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="invalid-feedback"
                  />
                  <Field
                    style={{ marginTop: "1em" }}
                    name="confirmPassword"
                    placeholder="Şifre Tekrarı"
                    as="input"
                    type="password"
                    className={
                      "form-control " +
                      (errors.confirmPassword && touched.confirmPassword
                        ? " is-invalid"
                        : "")
                    }
                  ></Field>
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
              </div>
            </div>
            <div className="form-group" style={{margin:"0em 0em 0em 37em"}}>
              <button type="submit" class="btn btn-outline-success btn-lg">
                Kayıt Ol
              </button>
              <button type="reset" class="btn btn-outline-danger btn-lg" style={{marginLeft:"2em"}} >
                Temizle
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
