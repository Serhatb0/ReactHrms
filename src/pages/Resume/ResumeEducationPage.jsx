/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import education1 from "../../img/education/student-education-750x460-1_770x400.jpg";
import education2 from "../../img/education/images_770x400.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getEducations } from "../../redux/actions/educationsActions";
import { getEducationsId } from "../../redux/actions/educationsActions";
import { validationSchema } from "./Validation/Education/ResumeEducationValidation";
import EducationService from "../../redux/services/educationService";
import { Button, Form, Header, Icon, Label, Modal } from "semantic-ui-react";
import { Formik, useFormik } from "formik";
import { EducationAdd } from "./Validation/Education/ResumeEducationAdd";
import BiricikTextInput from "../../utilities/customFormControls/BiricikTextInput";
function ResumeEducationPage() {
  var educationService = new EducationService();
  const dispatch = useDispatch();
  const educations = useSelector((state) => state.educations.educations);
  const education = useSelector((state) => state.educationsId.educationsId);
  const [open, setOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [addOpen, setAddOpen] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [selectedEducationId, setSelectedEducationId] = useState(11);
  useEffect(() => {
    dispatch(getEducations(13));
    dispatch(getEducationsId(selectedEducationId));
  }, [selectedEducationId]);

  if (refresh === true) {
    dispatch(getEducations(13));
    setTimeout(() => {
      setRefresh(false);
    }, 200);
  }

  const initialValues = {
    schoolName: education.schoolName,
    episode: education.episode,
    startOfSchool: education.startOfSchool,
    graduationYear: education.graduationYear,
  };
  const Education = () => {
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
              onSubmit={(values) => {
                // registerEmployerSerivce.postRegisterEmployer(fields);

                console.log(values);
                console.log("serhat");
              }}
            >
              {({ handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                  <BiricikTextInput
                    name="schoolName"
                    placeholder="Şirket Adı"
                  ></BiricikTextInput>
                  <BiricikTextInput
                    name="episode"
                    placeholder="Bolüm"
                  ></BiricikTextInput>
                  <BiricikTextInput
                    name="startOfSchool"
                    placeholder="Okul Başlangıç Tarihi"
                  ></BiricikTextInput>
                  <BiricikTextInput
                    name="graduationYear"
                    placeholder="Mezuniyet Tarihi"
                  ></BiricikTextInput>
                  <Modal.Actions>
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
                        id="edu"
                        key={education.id}
                        className="col-10 edu"
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
                            <div
                              onClick={() =>
                                setSelectedEducationId(education.id)
                              }
                            >
                              <i
                                className="bi bi-pencil fa-2x delete edit-add "
                                style={{
                                  margin: "0em 0em 0em 9.5em",
                                  width: "40px",
                                  height: "40px",
                                }}
                                onClick={() => setOpen(true)}
                              ></i>

                              <i
                                onClick={() => setDeleteOpen(true)}
                                className="bi bi-eraser fa-2x edit-remove "
                                style={{
                                  margin: "0em 0em 0em 9.5em",
                                  width: "40px",
                                  height: "40px",
                                }}
                              ></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <br />
                  <button
                    onClick={() => setAddOpen(true)}
                    type="button"
                    class="btn btn-outline-success"
                  >
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
                  </ol>
                  <div className="carousel-inner mt-5">
                    <div className="carousel-item active">
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
      <Modal
        style={{
          height: "auto",
          top: "auto",
          left: "auto",
          bottom: "auto",
          right: "auto",
        }}
        basic
        onClose={() => setDeleteOpen(false)}
        onOpen={() => setDeleteOpen(true)}
        open={deleteOpen}
        size="small"
      >
        <Header icon>
          <Icon name="archive" />
          {education.schoolName}
        </Header>
        <Modal.Content>
          <p>Eğitim Bilgisini Silemek İstediginize Emin Misiniz?</p>
        </Modal.Content>
        <Modal.Actions>
          <Button
            basic
            color="red"
            inverted
            onClick={() => setDeleteOpen(false)}
          >
            <Icon name="remove" /> Hayır
          </Button>
          <a onClick={() => educationService.DeleteEducation(education.id)}>
            <a onClick={() => setRefresh(true)}>
              <Button
                color="green"
                inverted
                onClick={() => setDeleteOpen(false)}
              >
                <Icon name="checkmark" /> Evet
              </Button>
            </a>
          </a>
        </Modal.Actions>
      </Modal>
      <Education></Education>
      <EducationAdd
        addOpen={addOpen}
        setRefresh={setRefresh}
        setAddOpen={setAddOpen}
      ></EducationAdd>
    </div>
  );
}
export default ResumeEducationPage;
