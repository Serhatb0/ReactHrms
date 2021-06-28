/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Css/ResumeViewPage.css";
import education from "../../img/education/indir (1)_770x400.jpg"
import education1 from "../../img/education/student-education-750x460-1_770x400.jpg"
import education2 from "../../img/education/images_770x400.jpg"
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
                <div className="card-block px-6">
                  <h4 className="card-title">
                    Eğitim Bilgileri
                  </h4>
                  <div className="row">
                    <div className="col-5">
                    <div className="card">
                   <div className="card-body"></div>
                    </div>
                  </div>
              
                 </div>
                  <p className="card-text">
                    Made for usage, commonly searched for. Fork, like and use
                    it. Just move the carousel div above the col containing the
                    text for left alignment of images
                  </p>
                  <br />
                  <a href="#" className="mt-auto btn btn-primary  ">
                    Read More
                  </a>
                  
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
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        className="d-block"
                        src={education}
                        alt
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block"
                        src={education1}
                        alt
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block"
                        src={education2}
                        alt
                      />
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
      
    </div>
  );
}
