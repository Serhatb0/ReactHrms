/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Css/ResumeViewPage.css";
import education from "../../img/education/indir (1)_770x400.jpg";
import education1 from "../../img/education/student-education-750x460-1_770x400.jpg";
import education2 from "../../img/education/images_770x400.jpg";
export default function ResumeViewPage() {
  return (
    <div>
      <section
        className="dark-bg "
        id="hero"
        style={{ margin: "5em 0em 0em 0em" }}
      >
        <div className="container">
          <div
            className="d-flex h-100 flex-column text-light
            justify-content-center"
          >
            <div className=" d-flex flex-column  align-items-center justify-content-center">
              {" "}
              <img
                className="rounded-circle 
            "
                style={{ maxWidth: "15%" }}
                src="http://res.cloudinary.com/dmeviw9q7/image/upload/v1623523376/nkorft8y9lgudvrewdlp.jpg"
              />
              <span>
                <h3>Serhat Biricik </h3>
              </span>
            </div>

            <div className="row m-5">
              {" "}
              <div className="col-6">
                {" "}
                <button
                  type="button"
                  class=" btn btn-outline-danger rounded-0 text-uppercase "
                  style={{ margin: "0em 0em 0em 21em" }}
                >
                  İşe İlanlarına Bak
                </button>
              </div>
              <div className="col-6">
                <button
                  type="button"
                  class=" btn btn-outline-danger rounded-0 text-uppercase"
                >
                  Öz Geçmişini Düzenle
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                          <di className="edit-remove">
                          <a
                              href="#EmployeeRejectModal"
                              className="delete"
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
                            <i
                              className="bi bi-eraser fa-2x "
                              style={{
                                margin: "0em 0em 0em 7.3em",
                                width: "40px",
                                height: "40px",
                              }}
                            ></i>
                          </di>
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

      <div id="EmployeeRejectModal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <form>
              <div className="modal-header">
                <h4 className="modal-title">Biricik A.ş</h4>
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
                <p>Neden İş İlanını Reddettiniz?</p>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <div className="modal-footer">
                <input
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                  defaultValue="Cancel"
                />
                <input
                  type="submit"
                  className="btn btn-success"
                  defaultValue="Delete"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
