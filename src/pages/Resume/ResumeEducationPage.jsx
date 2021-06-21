import React from "react";
import "./Css/Resume.css";
export default function ResumeEducationPage() {
  return (
    <div>
      <div
        className="card-header"
        data-toggle="collapse"
        data-target="#collapseEducation"
        aria-expanded="false"
        aria-controls="multiCollapseExample1"
      >
        Eğitim Bilgileri
      </div>
      <div className="container">
        <div id="collapseEducation" className="collapse ">
          <div className="card-body  ">
            <span className="dene">
            <h6 class="mb-2 text-primary" style={{marginLeft:"2em"}}>Okul Başlangıç Tarihi</h6>
            </span>
            <div className="ui icon input  col-6">
              <div class="col-12">
                <input
                  class="form-control"
                  type="date"
                  id="example-date-input"
                />
              </div>
            </div>
            <div className="ui icon  input  col-6">
              <input type="text" placeholder="Okul Adı" />
              <i
                aria-hidden="true"
                className="university circular inverted link icon"
              ></i>
            </div>

            <span className="dene">
            <h6 class="mb-2 text-primary" style={{marginLeft:"2em"}}>Mezuniyet Tarihi</h6>
            </span>
            <div className="ui icon input  col-6">
              <div class="col-12">
                <input
                  class="form-control"
                  type="date"
                  id="example-date-input"
                />
              </div>
            </div>
            <div className="ui icon input InputEducation  col-6">
              <input type="text" placeholder="Bolüm" />
              <i
                aria-hidden="true"
                className="university circular inverted link icon"
              ></i>
            </div>

            <div className="from-education">
              <div style={{margin:"0.3em 0em 0em 2.2em"}}>
              <div class="form-check col ">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Okul Devam Ediyor
                </label>
              </div>

              <div class="form-check ">
               
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  checked
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  Okul Devam Etmiyor
                </label>
                </div>
                <div
                  className="btn-resume"
                  style={{ margin: "1em 0em 0em 5em" }}
                >
                 <button type="button" class="btn btn btn-outline-success btn-lg">Kaydet</button>
                 <button type="button" class="btn btn-outline-danger btn-lg" style={{marginLeft:"1em"}}>İptal Et</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
