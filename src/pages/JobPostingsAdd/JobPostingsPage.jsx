import React from "react";
import "./Css/JobPostingPage.css";
export default function JobPostingsPage() {
  return (
    <div style={{ margin: "6em 0em 0em 0em" }}>
      <div class="container register">
        <div class="row">
          <div class="col-md-3 register-left">
            <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
            <h3>Merhaba</h3>
            <p>İş İlanınızı Ekleyin</p>

            <br />
          </div>
          <div class="col-md-9 register-right">
            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
            <form>
                <h3 class="register-heading">İş İlanı Yayınla</h3>
                <div class="row register-form">
                  <div class="col-md-6">
                    <div class="form-group">
                      <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder="İş Tanıtımı"
                      ></textarea>
                    </div>

                    <div class="form-group">
                      <label>Min Maaş</label>{" "}
                      <input
                        class="form-control"
                        placeholder="$0"
                        type="number"
                      />{" "}
                      <label>Max Maaş</label>{" "}
                      <input
                        class="form-control"
                        placeholder="$1,0000"
                        type="number"
                      />{" "}
                    </div>
                    <div class="form-group">
                      <label>Son Başvuru Tarihi</label>{" "}
                      <input
                        class="form-control"
                        type="date"
                        id="example-date-input"
                      />
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Pozisyon</label>{" "}
                      <select class="form-control">
                        <option class="hidden" selected disabled>
                          Pozisyon
                        </option>
                        <option>Veri Tabanı Uzmanı</option>
                        <option>Yazılım Uzmanı</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label>Çalışma Şekli</label>{" "}
                      <select class="form-control">
                        <option class="hidden" selected disabled>
                          Çalışma Şekli
                        </option>
                        <option>Tam Zamanlı</option>
                        <option>Yarı Zamanlı</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label>Şehir</label>{" "}
                      <select class="form-control">
                        <option class="hidden" selected disabled>
                          Şehir
                        </option>
                        <option>Mardin</option>
                        <option>Diyarbakır</option>
                      </select>
                    </div>
                   
                  </div>
                  <button type="button" class="btn btn-outline-success" style={{marginLeft:"1em"}}>İlanı Paylaş</button>
                </div>
               
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
