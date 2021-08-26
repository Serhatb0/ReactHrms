/* eslint-disable jsx-a11y/anchor-is-valid */
import { Formik, Form } from "formik";
import React, { useEffect } from "react";
import "../Css/ResumeLanguagePage.css";
import BiricikSelectInput from "../../../utilities/customFormControls/BiricikSelectInput";
import * as Yup from "yup";
import ResumeLanguageAdd from "./ResumeLanguageAdd";
import { languageSelector } from "../../../redux/languages/languagesSlice";
import {
  fetchLanguage,
  deleteLanguageAsync,
  updateLanguageAsync
} from "../../../redux/languages/services";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Button, Modal } from "semantic-ui-react";

export default function ResumeLanguagePage() {
  const dispatch = useDispatch();
  const [id, setId] = useState();
  const [language, setLanguage] = useState([]);
  const [open, setOpen] = useState(false);
  const languages = useSelector(languageSelector.selectAll);
  const status = useSelector((state) => state.language.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchLanguage(13));
    }
  }, [dispatch, status]);

  const initialValues = {
    languageName: language.languageName,
    languageLevel: language.languageLevel,
  };

  const validationSchema = Yup.object({
    languageName: Yup.string().required("Zorunlu Alan"),
    languageLevel: Yup.string().required("Zorunlu Alan"),
  });
  const runCallback = (cb) => {
    return cb();
  };

  const Language = () => {
    return (
      <Modal
        dimmer={"blurring"}
        centered={true}
        size={"mini"}
        style={{
          height: "auto",
          top: "auto",
          left: "auto",
          bottom: "auto",
          right: "auto",
        }}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
      >
        <Modal.Header>Eğitim Bilgileri</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={async (values) => {
                await dispatch(updateLanguageAsync({id,values}))
                setOpen(false);
              }}
            >
              {({ handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                  <divs>
                    <h4 className="modal-title">Yabancı Dil Bilgileri</h4>

                    <BiricikSelectInput
                      class="form-select"
                      aria-label="Default select example"
                      name="languageName"
                    >
                      <option selected>Yabancı Dil*</option>
                      <option>İngilizce</option>
                      <option>Arapça</option>
                      <option>Türkçe</option>
                    </BiricikSelectInput>
                    <label
                      style={{
                        float: "left",
                        margin: "1em 0em 0em 0em",
                      }}
                    >
                      <b>Dil Seviyesi</b>
                    </label>
                    <BiricikSelectInput
                      class="form-select"
                      aria-label="Default select example"
                      name="languageLevel"
                    >
                      <option selected>Seviye*</option>
                      <option value="1">Başlangıç</option>
                      <option value="2">Temel</option>
                      <option value="3">Orta</option>
                      <option value="4">İyi</option>
                      <option value="5">İleri</option>
                      <option>Türkçe</option>
                    </BiricikSelectInput>
                  </divs>
                  <Modal.Actions style={{ margin: "1em 0em 0em 0em" }}>
                    <Button color="black" onClick={() => setOpen(false)}>
                      İptal
                    </Button>
                    <Button
                      content="Güncelle"
                      labelPosition="right"
                      icon="checkmark"
                      type="submit"
                      positive
                    />
                  </Modal.Actions>
                </Form>
              )}
            </Formik>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  };

  return (
    <div>
      <section>
        <div className="container py-3">
          <div className="card">
            <div className="row ">
              <div className="col-md-12 px-3">
                <h4 className="card-title">Yabancı Dil Bilgileri</h4>
                <div className="card-block px-6">
                  <div className="row">
                    {languages.map((language) => (
                      <div className="col-6" style={{ marginBottom: "1em" }}>
                        <div className="card  p-3 m-0">
                          <div className="card-body p-0 m-0">
                            <div style={{ float: "left" }}>
                              <i
                                className="bi bi-translate fa-3x "
                                style={{ float: "left" }}
                              ></i>
                            </div>
                            <label
                              style={{
                                float: "left",
                                margin: "0em 0em 0em 2em",
                              }}
                            >
                              <b>Dil</b>
                            </label>
                            <label
                              style={{
                                float: "left",
                                margin: "1.5em 0em 0em -2em",
                              }}
                            >
                              {language.languageName}
                            </label>

                            <label
                              style={{
                                float: "left",
                                margin: "0em 0em 0em 10em",
                              }}
                            >
                              <b
                                style={{
                                  float: "left",
                                }}
                              >
                                Dil Seviyesi:{" "}
                              </b>
                            </label>
                            <div
                              className="rating"
                              style={{
                                float: "left",
                                margin: "0em 0em 0em 0em",
                              }}
                            >
                              {runCallback(() => {
                                const row = [];
                                for (
                                  var i = 0;
                                  i < language.languageLevel;
                                  i++
                                ) {
                                  row.push(<label>★</label>);
                                }
                                return row;
                              })}
                            </div>
                            <div
                              onClick={() => setId(language.id)}
                              className="d-flex flex-column  align-items-end justify-content-end"
                            >
                              <a onClick={() => setOpen(true)}>
                                <i
                                  onClick={() =>
                                    setLanguage(
                                      languages.find(
                                        (item) => item.id === language.id
                                      )
                                    )
                                  }
                                  href="#LanguageUpdateModal"
                                  className="bi bi-pencil fa-2x  delete edit-add d-inline  "
                                  data-toggle="modal"
                                ></i>
                              </a>
                              <i
                                href="#LanguageRemoveModal"
                                className="bi bi-eraser fa-2x delete edit-remove  d-flex flex-column  align-items-end justify-content-end"
                                data-toggle="modal"
                              ></i>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <br />
                  <button
                    href="#LanguageAddModal"
                    data-toggle="modal"
                    type="button"
                    className="btn btn-outline-success"
                  >
                    Yeni Dil Ekle
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />
      </section>
      <div id="LanguageRemoveModal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Yabancı Dil Bilgileri</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-hidden="true"
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              <label>Onaylıyormusunuz?</label>
            </div>
            <div className="modal-footer">
              <input
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                defaultValue="İptal Et"
              />

              <Button
                onClick={async () => await dispatch(deleteLanguageAsync(id))}
                content="Evet"
                labelPosition="right"
                icon="checkmark"
                data-dismiss="modal"
                type="submit"
                positive
              />
            </div>
          </div>
        </div>
      </div>
      <Language />
      <ResumeLanguageAdd />
    </div>
  );
}
