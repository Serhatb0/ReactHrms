/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import education from "../../img/education/indir (1)_770x400.jpg";
import education1 from "../../img/education/student-education-750x460-1_770x400.jpg";
import education2 from "../../img/education/images_770x400.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getEducations } from "../../redux/actions/educationsActions";
import { getEducationsId } from "../../redux/actions/educationsActions";
import {  } from "../../redux/services/educationService";
import EducationService from "../../redux/services/educationService";
import { Button, Form } from "semantic-ui-react";
import * as Yup from "yup";
import { useFormik } from "formik";

function ResumeEducationPage() {
  const [selectedEducationId, setSelectedEducationId] = useState();

  const dispatch = useDispatch();

  const educations = useSelector((state) => state.educations.educations);
  // const education = useSelector((state) => state.educationsId.educationsId);
  const [education, setEducation] = useState([])
  useEffect(() => {
    dispatch(getEducations(13));
  }, []);

  useEffect(() => {
    // dispatch(getEducationsId(selectedEducationId));
    const educationService = new EducationService();

    educationService.getAllById(selectedEducationId)
    .then(result =>setEducation(result.data.data))
    
  }, [selectedEducationId]);

  console.log(education);
  console.log(selectedEducationId);

  var initialValues = {
    schoolName: education.schoolName,
    episode: education.episode,
    startOfSchool: education.startOfSchool,
    graduationYear: education.graduationYear,
  };

   const validationSchema = Yup.object({
    schoolName: Yup.string().required("Zorunlu Alan"),
    episode: Yup.string().required("Web Adres Zorunlu"),
    startOfSchool: Yup.string().required("Zorunlu Alan"),
    graduationYear: Yup.string().required("Zorunlu Alan"),

  });
  
  const Education = () => {
    const { handleSubmit, handleChange, values, errors, touched } = useFormik({
      initialValues:initialValues,
      validationSchema,
      onSubmit: (values) => {
       console.log(values);
      },
    });

    return (
        <div id="EducationUpdateModal" className="modal fade">
          <div className="modal-dialog">
            <div className="modal-content">
         
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
                <Form onSubmit={handleSubmit}>

                  <form>

                    <label htmlFor="scholl">Okul Adı</label>

                    <Form.Input
                      id="scholl"
                      value={values.schoolName}
                      placeholder="SchollName"
                      name="schollName"
                      onChange={handleChange}
                      values={values.schoolName}
                    />
                  <label htmlFor="episode">Bölum</label>
                  <Form.Input
                    id="episode"
                    value={values.episode}
                    placeholder="episode"
                    name="episode"
                    onChange={handleChange}
                    values={values.episode}
                  />
                  <label htmlFor="startOfSchool">Okul Başlangıç Tarihi</label>
                  <Form.Input
                    id="startOfSchool"
                    value={values.startOfSchool}
                    placeholder="startOfSchool"
                    name="startOfSchool"
                    onChange={handleChange}
                    values={values.startOfSchool}
                  />
                  <label htmlFor="graduationYear">Mezuniyet Tarihi</label>
                  <Form.Input
                    id="graduationYear"
                    value={values.graduationYear}
                    placeholder="graduationYear"
                    name="graduationYear"
                    onChange={handleChange}
                    values={values.graduationYear}
                  />
                   </form>
            </Form>
                </div>
             
              <div className="modal-footer">
                <input
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                  defaultValue="Cancel"
                />
                <Button type="submit" color="teal" fluid size="large">
                  Güncelle
                </Button>
              </div>
            </div>
          </div>
        </div>
    );
  };

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
                    {educations.map((education) => (
                      <div
                        key={education.id}
                        className="col-10"
                        style={{ marginBottom: "0.5em" }}
                      >
                        <div className="card  p-3 m-0">
                          <div className="card-body p-0 m-0">
                            <div style={{ float: "left" }}>
                              <i
                                className="bi bi-bank2 fa-3x "
                                style={{ float: "left" }}
                              ></i>

                              <p style={{ margin: "0em 0em 0em 4em" }}>
                                <b>{education.schoolName}</b>
                              </p>

                              <p style={{ margin: "0em 0em 0em 4em" }}>
                                {education.startOfSchool} -{" "}
                                {education.graduationYear}
                              </p>
                              <p
                                style={{ marginLeft: "4em" }}
                                className="card-text"
                              >
                                {education.episode}
                              </p>
                            </div>
                            <div>
                              <i
                                href="#EducationUpdateModal"
                                data-toggle="modal"
                                className="bi bi-pencil fa-2x delete edit-add "
                                style={{
                                  margin: "0em 0em 0em 6.8em",
                                  width: "40px",
                                  height: "40px",
                                }}
                                onClick={()=> setSelectedEducationId(education.id)}
                              ></i>

                              <a
                                href="#EducationRemoveModal"
                                className="delete edit-remove"
                                data-toggle="modal"
                              >
                                <i
                                  className="bi bi-eraser fa-2x "
                                  style={{
                                    margin: "0em 0em 0em 6.8em",
                                    width: "40px",
                                    height: "40px",
                                  }}
                                ></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
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
      <Education></Education>
      
      
    </div>
  );
}
export default ResumeEducationPage;
