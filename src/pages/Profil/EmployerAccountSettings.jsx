/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-redeclare */
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { validationSchema } from "./Validation/EmployerAccountValidation";
import { Form, Label } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchEmployerById,
  updateEmployerAsync,
} from "../../redux/employers/services";
import { employerSelector } from "../../redux/employers/employerSlice";
function EmployerAccountSettings() {
  const dispatch = useDispatch();
  const [employer, setEmployer] = useState([]);
  const [id, setId] = useState(3);
  const employers = useSelector((state) =>
    employerSelector.selectById(state, 3)
  );
  const status = useSelector((state) => state.employer.status);
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchEmployerById(3));
    }
    if (status === "succeeded") {
      setEmployer(employers);
    }
  }, [dispatch, status]);

  const localStorageEmployer = JSON.parse(localStorage.getItem(3));
  if (localStorageEmployer !== null) {
    var localStorageCheck = true;
  } else {
    var localStorageCheck = false;
  }

  if (employer.isUpdate === true) {
    localStorage.removeItem(employer.id);
  }

  if (localStorageCheck === true) {
    var initialValues = {
      webAddress: localStorageEmployer.webAddress,
      companyName: localStorageEmployer.companyName,
      email: localStorageEmployer.email,
    };
  } else {
    var initialValues = {
      webAddress: employer.webAddress,
      companyName: employer.companyName,
      email: employer.email,
    };
  }

  const EmployerProfil = () => {
    const { handleSubmit, handleChange, values, errors, touched } = useFormik({
      initialValues: initialValues,

      validationSchema,
      onSubmit: async (values) => {
        if (localStorageCheck === false) {
          localStorage.setItem(employer.id, JSON.stringify(employer));
        }

        await dispatch(updateEmployerAsync({ id, values }));
      },
    });

    return (
      <Form onSubmit={handleSubmit}>
        {localStorageCheck ? (
          <div className="alert alert-primary" role="alert">
            G??ncellem ??steginiz Al??nd?? Onaylan??nca Sisteme Yans??t??lacakt??r
          </div>
        ) : null}
        <h3 className="mb-4">Hesap Ayarlar?? </h3>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="web">Web Adresi</label>
              <Form.Input
                id="web"
                value={values.webAddress}
                placeholder="Web Adresi"
                name="webAddress"
                onChange={handleChange}
                values={values.webAddress}
              />
              {!!errors.webAddress && touched.webAddress ? (
                <Label pointing basic color="red">
                  {errors.webAddress}
                </Label>
              ) : null}
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="com">??irket Ad??</label>
              <Form.Input
                id="com"
                value={values.companyName}
                placeholder="??irket"
                name="companyName"
                onChange={handleChange}
                values={values.companyName}
              />
              {!!errors.companyName && touched.webAddress ? (
                <Label pointing basic color="red">
                  {errors.companyName}
                </Label>
              ) : null}
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Form.Input
                id="email"
                value={values.email}
                placeholder="Email"
                name="email"
                onChange={handleChange}
                values={values.email}
              />
              {!!errors.email && touched.webAddress ? (
                <Label pointing basic color="red">
                  {errors.email}
                </Label>
              ) : null}
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Telefon Numaras??</label>
              <input
                type="text"
                className="form-control"
                placeholder="Telefon Numaras??"
              />
            </div>
          </div>

          <div className="col-md-12">
            <div className="form-group">
              <label>Bio</label>
              <textarea
                className="form-control"
                rows={4}
                placeholder="A????klama"
              />
            </div>
            {localStorageCheck ? (
              <button
                type="submit"
                className="btn btn-outline-success disabled"
              >
                G??ncelle
              </button>
            ) : (
              <button type="submit" className="btn btn-outline-success ">
                G??ncelle
              </button>
            )}
          </div>
        </div>
      </Form>
    );
  };

  return <EmployerProfil></EmployerProfil>;
}

export default EmployerAccountSettings;
