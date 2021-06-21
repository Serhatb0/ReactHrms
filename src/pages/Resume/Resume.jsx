import React from "react";
import ResumeLanguagePage from "./ResumeLanguagePage";
import ResumeEducationPage from "./ResumeEducationPage";
import ResumeWorkExperiencePage from "./ResumeWorkExperiencePage";
import Profil from "./Profil";
import "./Css/Resume.css";
import { Icon } from "semantic-ui-react";

export default function Resume() {
  return (
    <div>
      <div class="container" style={{ marginTop: "2.2em" }}>
        <div class="row gutters">
          <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12" >
            <div class="card card-resume h-100">
              <div class="card-bod" >
                <div class="account-settings">
                  <div class="user-profile">
                    <div class="user-avatar">
                      <img
                        src="http://res.cloudinary.com/dmeviw9q7/image/upload/v1623523376/nkorft8y9lgudvrewdlp.jpg"
                        alt="Maxwell Admin"
                      />
                    </div>
                    <h5 class="user-name">Serhat Biricik</h5>
                    <h6 class="user-email">biricik47@gmail.com</h6>
                  </div>

                  <div class="row">
                    <div class="col-12">
                      <div class="list-group" id="list-tab" role="tablist">
                        <button
                          class="list-group-item list-group-item-action"
                          id="list-resume-list"
                          data-toggle="list"
                          href="#list-resume"
                          role="tab"
                          aria-controls="resume"
                        >
                          Öz Geçmiş
                          <div className="d-flex flex-column    justify-content-end">
                            <Icon
                              className="address book"
                              style={{
                                position: "absolute",
                                margin: " 0em  0em 0.3em 9em",
                              }}
                            ></Icon>
                          </div>
                        </button>
                        <button
                          class="list-group-item list-group-item-action"
                          id="list-profil-list"
                          data-toggle="list"
                          href="#list-profil"
                          role="tab"
                          aria-controls="profil"
                        >
                          Profilim
                          <div className="d-flex flex-column    justify-content-end">
                            <Icon
                              className="user"
                              style={{
                                position: "absolute",
                                margin: " 0em  0em 0.3em 9em",
                              }}
                            ></Icon>
                          </div>
                        </button>
                        <button
                          class="list-group-item list-group-item-action"
                          id="list-messages-list"
                          data-toggle="list"
                          href="#list-messages"
                          role="tab"
                          aria-controls="messages"
                        >
                          Mesajlarım
                          <div className="d-flex flex-column    justify-content-end">
                            <Icon
                              className="envelope"
                              style={{
                                position: "absolute",
                                margin: " 0em  0em 0.3em 9em",
                              }}
                            ></Icon>
                          </div>
                        </button>
                        <button
                          class="list-group-item list-group-item-action "
                          id="list-settings-list"
                          data-toggle="list"
                          href="#list-settings"
                          role="tab"
                          aria-controls="settings"
                        >
                          Ayarlar
                          <div className="d-flex flex-column    justify-content-end">
                            <Icon
                              className="setting "
                              style={{
                                position: "absolute",
                                margin: " 0em  0em 0.3em 9em",
                              }}
                            ></Icon>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
            <div class="card  h-100" style={{padding:"0em 0em 0em 0em"}}>
              <div class="card-body" style={{padding:"0em 0em 0em 0em"}}>
                <div class="row gutters">
                  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"></div>
                  <div class="tab-content col-12" id="nav-tabContent">
                  <div
                    class="tab-pane fade show active "
                    id="list-resume"
                    role="tabpanel"
                    aria-labelledby="list-resume-list"
                  >
                    <div class="col-12 ">
                      <h6 class="mb-2 text-primary">Öz Geçmişini Duzenle</h6>
                      <ResumeEducationPage></ResumeEducationPage>
                    </div>
                    <div class="col-12">
                      <ResumeLanguagePage></ResumeLanguagePage>
                    </div>
                    <div class="col-12">
                      <ResumeWorkExperiencePage></ResumeWorkExperiencePage>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade col-12"
                    id="list-profil"
                    role="tabpanel"
                    aria-labelledby="list-profil-list"
                  >
                    {" "}
                    <Profil></Profil>{" "}
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
