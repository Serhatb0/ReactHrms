/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Css/ResumeViewPage.css";

import ResumeEducationPage from "./Education/ResumeEducationPage";
import ResumeLanguagePage from "./Lang/ResumeLanguagePage";
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

      <ResumeEducationPage></ResumeEducationPage>

      <ResumeLanguagePage></ResumeLanguagePage>
    </div>
  );
}
