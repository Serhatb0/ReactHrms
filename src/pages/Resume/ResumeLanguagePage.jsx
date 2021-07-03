import { Formik, Form } from "formik";
import React from "react";
import "./Css/ResumeLanguagePage.css";
import BiricikSelectInput from "../../utilities/customFormControls/BiricikSelectInput";
import * as Yup from "yup";

export default function ResumeLanguagePage() {
  const initialValues = {
    languageName: "İngilizce",
    languageLevel: "4",
  };

  const schema = Yup.object({
    languageName: Yup.string().required("Zorunlu Alan"),
    languageLevel: Yup.string().required("Zorunlu Alan"),
  });
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
                            style={{ float: "left", margin: "0em 0em 0em 2em" }}
                          >
                            <b>Dil</b>
                          </label>
                          <label
                            style={{
                              float: "left",
                              margin: "1.5em 0em 0em -2em",
                            }}
                          >
                            İngilizce
                          </label>

                          <label
                            style={{
                              float: "left",
                              margin: "0em 0em 0em 10em",
                            }}
                          >
                            <b>Dil Seviyesi</b>
                          </label>
                          <div
                            className="rating  "
                            style={{
                              float: "left",
                              margin: "0em 0em 0em 9em",
                            }}
                          >
                            <label>★</label>
                            <label>★</label>
                            <label>★</label>
                            <label>★</label>
                            <label>★</label>
                          </div>
                          <div className="d-flex flex-column  align-items-end justify-content-end">
                            <i
                              href="#LanguageUpdateModal"
                              className="bi bi-pencil fa-2x  delete edit-add d-inline  "
                              data-toggle="modal"
                            ></i>
                            <i
                              href="#LanguageRemoveModal"
                              className="bi bi-eraser fa-2x delete edit-remove  d-flex flex-column  align-items-end justify-content-end"
                              data-toggle="modal"
                            ></i>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
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
                            style={{ float: "left", margin: "0em 0em 0em 2em" }}
                          >
                            <b>Dil</b>
                          </label>
                          <label
                            style={{
                              float: "left",
                              margin: "1.5em 0em 0em -2em",
                            }}
                          >
                            İngilizce
                          </label>

                          <label
                            style={{
                              float: "left",
                              margin: "0em 0em 0em 10em",
                            }}
                          >
                            <b>Dil Seviyesi</b>
                          </label>
                          <div
                            className="rating  "
                            style={{
                              float: "left",
                              margin: "0em 0em 0em 9em",
                            }}
                          >
                            <label>★</label>
                            <label>★</label>
                            <label>★</label>
                            <label>★</label>
                            <label>★</label>
                          </div>
                          <div className="d-flex flex-column  align-items-end justify-content-end">
                            <i
                              href="#LanguageUpdateModal"
                              className="bi bi-pencil fa-2x  delete edit-add d-inline  "
                              data-toggle="modal"
                            ></i>
                            <i
                              href="#LanguageRemoveModal"
                              className="bi bi-eraser fa-2x delete edit-remove  d-flex flex-column  align-items-end justify-content-end"
                              data-toggle="modal"
                            ></i>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
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
                            style={{ float: "left", margin: "0em 0em 0em 2em" }}
                          >
                            <b>Dil</b>
                          </label>
                          <label
                            style={{
                              float: "left",
                              margin: "1.5em 0em 0em -2em",
                            }}
                          >
                            İngilizce
                          </label>

                          <label
                            style={{
                              float: "left",
                              margin: "0em 0em 0em 10em",
                            }}
                          >
                            <b>Dil Seviyesi</b>
                          </label>
                          <div
                            className="rating  "
                            style={{
                              float: "left",
                              margin: "0em 0em 0em 9em",
                            }}
                          >
                            <label>★</label>
                            <label>★</label>
                            <label>★</label>
                            <label>★</label>
                            <label>★</label>
                          </div>
                          <div className="d-flex flex-column  align-items-end justify-content-end">
                            <i
                              href="#LanguageUpdateModal"
                              className="bi bi-pencil fa-2x  delete edit-add d-inline  "
                              data-toggle="modal"
                            ></i>
                            <i
                              href="#LanguageRemoveModal"
                              className="bi bi-eraser fa-2x delete edit-remove  d-flex flex-column  align-items-end justify-content-end"
                              data-toggle="modal"
                            ></i>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
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
                            style={{ float: "left", margin: "0em 0em 0em 2em" }}
                          >
                            <b>Dil</b>
                          </label>
                          <label
                            style={{
                              float: "left",
                              margin: "1.5em 0em 0em -2em",
                            }}
                          >
                            İngilizce
                          </label>

                          <label
                            style={{
                              float: "left",
                              margin: "0em 0em 0em 10em",
                            }}
                          >
                            <b>Dil Seviyesi</b>
                          </label>
                          <div
                            className="rating  "
                            style={{
                              float: "left",
                              margin: "0em 0em 0em 9em",
                            }}
                          >
                            <label>★</label>
                            <label>★</label>
                            <label>★</label>
                            <label>★</label>
                            <label>★</label>
                          </div>
                          <div className="d-flex flex-column  align-items-end justify-content-end">
                            <i
                              href="#LanguageUpdateModal"
                              className="bi bi-pencil fa-2x  delete edit-add d-inline  "
                              data-toggle="modal"
                            ></i>
                            <i
                              href="#LanguageRemoveModal"
                              className="bi bi-eraser fa-2x delete edit-remove  d-flex flex-column  align-items-end justify-content-end"
                              data-toggle="modal"
                            ></i>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
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

      {/* Modal */}
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
        <div id="LanguageUpdateModal" className="modal fade">
            <div className="modal-dialog">
              <div className="modal-content">
                <form>
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
                    <label style={{ float: "left", margin: "1em 0em 0em 0em" }}>
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
                  </div>
                </form>

                <div className="modal-footer">
                  <input
                    type="button"
                    className="btn btn-danger"
                    data-dismiss="modal"
                    defaultValue="Cancel"
                  />
                  <button type="submit" className="btn btn-success">
                   Güncelle
                  </button>
                </div>
              </div>
            </div>
          </div>




          <div id="LanguageAddModal" className="modal fade">
            <div className="modal-dialog">
              <div className="modal-content">
                <form>
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
                    <label style={{ float: "left", margin: "1em 0em 0em 0em" }}>
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
                  </div>
                </form>

                <div className="modal-footer">
                  <input
                    type="button"
                    className="btn btn-danger"
                    data-dismiss="modal"
                    defaultValue="Cancel"
                  />
                  <button type="submit" className="btn btn-success">
                    Kaydet
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div id="LanguageRemoveModal" className="modal fade">
            <div className="modal-dialog">
              <div className="modal-content">
                <form>
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
                    <button type="submit" className="btn btn-success">
                      Evet
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
