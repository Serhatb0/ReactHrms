/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React ,{useState}from "react";
import AccountSettings from "./AccountSettings";
import ApplicationSettings from "./ApplicationSettings";
import "./css/ProfilPage.css";
import NotificationsSettings from "./NotificationsSettings";
import PasswordSettings from "./PasswordSettings";
import SecuritySettings from "./SecuritySettings";
import EmployerAccountSettings from "./EmployerAccountSettings";
export default function ProfilPage() {
  const [isEmployer ,setIsEmployer] =  useState(true);

  return (
    <div>
      <section className="">
        <div className="container">
          <h1 className="mb-5">Hesap Ayarları</h1>
          <div className="bg-white shadow rounded-lg d-block d-sm-flex">
            <div className="profile-tab-nav border-right">
              <div className="p-4">
                <div className="img-circle text-center ">
                  <div class="image-upload-profil">
                    <label for="file-input">
                      <img
                        className="shadow"
                        src="http://res.cloudinary.com/dmeviw9q7/image/upload/v1623523376/nkorft8y9lgudvrewdlp.jpg"
                      />
                    </label>

                    <input id="file-input" type="file" />
                  </div>
                </div>
                <h4 className="text-center">Serhat Biricik</h4>
              </div>
              <div
                className="nav flex-column nav-pills"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <a
                  className="nav-link active"
                  id="account-tab"
                  data-toggle="pill"
                  href="#account"
                  role="tab"
                  aria-controls="account"
                  aria-selected="true"
                >
                  <i className="fa fa-home text-center mr-1" />
                  Hesap
                </a>
                <a
                  className="nav-link"
                  id="password-tab"
                  data-toggle="pill"
                  href="#password"
                  role="tab"
                  aria-controls="password"
                  aria-selected="false"
                >
                  <i className="fa fa-key text-center mr-1" />
                  Şifre
                </a>
                <a
                  className="nav-link"
                  id="security-tab"
                  data-toggle="pill"
                  href="#security"
                  role="tab"
                  aria-controls="security"
                  aria-selected="false"
                >
                  <i className="fa fa-user text-center mr-1" />
                  Güvenlik
                </a>
                <a
                  className="nav-link"
                  id="application-tab"
                  data-toggle="pill"
                  href="#application"
                  role="tab"
                  aria-controls="application"
                  aria-selected="false"
                >
                  <i className="fa fa-tv text-center mr-1" />
                  Uygulama
                </a>
                <a
                  className="nav-link"
                  id="notification-tab"
                  data-toggle="pill"
                  href="#notification"
                  role="tab"
                  aria-controls="notification"
                  aria-selected="false"
                >
                  <i className="fa fa-bell text-center mr-1" />
                  Bildirimler
                </a>
              </div>
            </div>
            <div className="tab-content p-4 p-md-5" id="v-pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="account"
                role="tabpanel"
                aria-labelledby="account-tab"
              >
                {" "}
               {isEmployer ? <EmployerAccountSettings/> : <AccountSettings/>}
              </div>
              <div
                className="tab-pane fade"
                id="password"
                role="tabpanel"
                aria-labelledby="password-tab"
              >
                {" "}
                <PasswordSettings />
              </div>

              <div
                className="tab-pane fade"
                id="security"
                role="tabpanel"
                aria-labelledby="security-tab"
              >
                <SecuritySettings/>
                <div>
                  <button className="btn btn-outline-success">Kaydet</button>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="application"
                role="tabpanel"
                aria-labelledby="application-tab"
              >
               <ApplicationSettings/>
                
              </div>
              <div
                className="tab-pane fade"
                id="notification"
                role="tabpanel"
                aria-labelledby="notification-tab"
              >
                <NotificationsSettings/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
