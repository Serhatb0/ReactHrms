/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import "./Css/Resume.css";
import BiricikTextInput from "../../utilities/customFormControls/BiricikTextInput";

import education from "../../img/education/indir (1)_770x400.jpg";
import education1 from "../../img/education/student-education-750x460-1_770x400.jpg";
import education2 from "../../img/education/images_770x400.jpg";
export default function ResumeEducationPage() {
  const initialValues = {
    schollName: "Okul Adı",
    episode: "Bölüm",
    startOfSchool: "2019-05-08",
    graduationYear: "2021-08-09",
  };

  const schema = Yup.object({
    schollName: Yup.string().required("Zorunlu Alan"),
    episode: Yup.string().required("Zorunlu Alan"),
    startOfSchool: Yup.date().required("ZorunAlan"),
    graduationYear: Yup.date().required("Zorun Alan"),
  });
  return (
    <div>
      <section>
        <div className="container py-3">
          <div className="title h1 text-center">
            Horizontal cards - Bootstrap 4
          </div>
          {/* Card Start */}
          <div className="card">
            <div className="row ">
              <div className="col-md-7 px-3">
                <h4 className="card-title">Eğitim Bilgileri</h4>
                <div className="card-block px-6">
                  <div className="row">
                    <div className="col-10">
                      <div className="card  p-3 m-0">
                        <div className="card-body p-0 m-0">
                          <div style={{ float: "left" }}>
                            <i
                              className="bi bi-bank2 fa-3x "
                              style={{ float: "left" }}
                            ></i>

                            <p style={{ margin: "0em 0em 0em 4em" }}>
                              <b>Mardin Artuklu</b>
                            </p>

                            <p style={{ margin: "0em 0em 0em 4em" }}>
                              2019-2021
                            </p>
                            <p
                              style={{ marginLeft: "4em" }}
                              className="card-text"
                            >
                              Bilgisiyar Programcılığı
                            </p>
                          </div>
                          <div>
                            <a
                              href="#EducationUpdateModal"
                              className="delete edit-add"
                              data-toggle="modal"
                            >
                              <i
                                className="bi bi-pencil fa-2x  "
                                style={{
                                  margin: "0em 0em 0em 7.3em",
                                  width: "40px",
                                  height: "40px",
                                }}
                              ></i>
                            </a>
                            <a
                              href="#EducationRemoveModal"
                              className="delete edit-remove"
                              data-toggle="modal"
                            >
                              <i
                                className="bi bi-eraser fa-2x "
                                style={{
                                  margin: "0em 0em 0em 7.3em",
                                  width: "40px",
                                  height: "40px",
                                }}
                              ></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-10" style={{ marginTop: "2em" }}>
                      <div className="card  p-3 m-0">
                        <div className="card-body p-0 m-0">
                          <div style={{ float: "left" }}>
                            <i
                              className="bi bi-bank2 fa-3x "
                              style={{ float: "left" }}
                            ></i>

                            <p style={{ margin: "0em 0em 0em 4em" }}>
                              <b>Mardin Artuklu</b>
                            </p>

                            <p style={{ margin: "0em 0em 0em 4em" }}>
                              2019-2021
                            </p>
                            <p
                              style={{ marginLeft: "4em" }}
                              className="card-text"
                            >
                              Bilgisiyar Programcılığı
                            </p>
                          </div>
                          <div>
                            <i
                              className="bi bi-pencil fa-2x "
                              style={{
                                margin: "0em 0em 0em 7.3em",
                                width: "40px",
                                height: "40px",
                              }}
                            ></i>
                            <i
                              className="bi bi-eraser fa-2x "
                              style={{
                                margin: "0em 0em 0em 7.3em",
                                width: "40px",
                                height: "40px",
                              }}
                            ></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <br />
                  <button type="button" class="btn btn-outline-success">
                    Yeni Eğitim Bilgisi
                  </button>
                </div>
              </div>
              {/* Carousel start */}

              <div className="col-md-5">
                <div
                  id="CarouselTest"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <ol className="carousel-indicators">
                    <li
                      data-target="#CarouselTest"
                      data-slide-to={0}
                      className="active"
                    />
                    <li data-target="#CarouselTest" data-slide-to={1} />
                    <li data-target="#CarouselTest" data-slide-to={2} />
                  </ol>
                  <div className="carousel-inner mt-5">
                    <div className="carousel-item active">
                      <img className="d-block" src={education} alt />
                    </div>
                    <div className="carousel-item">
                      <img className="d-block" src={education1} alt />
                    </div>
                    <div className="carousel-item">
                      <img className="d-block" src={education2} alt />
                    </div>
                    <a
                      className="carousel-control-prev"
                      href="#CarouselTest"
                      role="button"
                      data-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      />
                      <span className="sr-only">Previous</span>
                    </a>
                    <a
                      className="carousel-control-next"
                      href="#CarouselTest"
                      role="button"
                      data-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      />
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
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
        onSubmit={(values) => {}}
      >
        <Form>
          <div id="EducationUpdateModal" className="modal fade">
            <div className="modal-dialog">
              <div className="modal-content">
                <form>
                  <div className="modal-header">
                    <h4 className="modal-title">Eğitim Bilgileri</h4>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-hidden="true"
                    >
                      ×
                    </button>
                  </div>
                  <div className="modal-body"></div>
                  <div className="container">
                    <BiricikTextInput
                      className="form-control"
                      name="schollName"
                      type="text"
                    ></BiricikTextInput>
                    <BiricikTextInput
                      style={{ marginTop: "2em" }}
                      className="form-control"
                      name="episode"
                      type="text"
                    ></BiricikTextInput>
                    <BiricikTextInput
                      style={{ marginTop: "2em" }}
                      className="form-control "
                      name="startOfSchool"
                      type="date"
                    ></BiricikTextInput>
                    <BiricikTextInput
                      style={{ margin: "2em 0em 1em 0em" }}
                      className="form-control "
                      name="graduationYear"
                      type="date"
                    ></BiricikTextInput>
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
          <div id="EducationRemoveModal" className="modal fade">
            <div className="modal-dialog">
              <div className="modal-content">
                <form>
                  <div className="modal-header">
                    <h4 className="modal-title">Eğitim Bilgileri</h4>
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
