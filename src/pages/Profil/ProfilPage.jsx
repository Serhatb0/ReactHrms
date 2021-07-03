/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./css/ProfilPage.css";
export default function ProfilPage() {
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
                      <img className="shadow" src="http://res.cloudinary.com/dmeviw9q7/image/upload/v1623523376/nkorft8y9lgudvrewdlp.jpg" />
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
                <h3 className="mb-4">Hesap Ayarları Settings</h3>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Ad</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Ad"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Soyad</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Soyad"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Telefon Numarası</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Telefon Numarası"
                      />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Bio</label>
                      <textarea
                        className="form-control"
                        rows={4}
                        placeholder="Açıklama"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <button type="submit" class="btn btn-outline-success">
                    Kaydet
                  </button>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="password"
                role="tabpanel"
                aria-labelledby="password-tab"
              >
                <h3 className="mb-4">Şifreyi Değiştir</h3>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Eski Şifre</label>
                      <input type="password" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Yeni Şifre</label>
                      <input type="password" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Şifre Tekrarı</label>
                      <input type="password" className="form-control" />
                    </div>
                  </div>
                </div>
                <div>
                  <button className="btn btn-outline-success">Kaydet</button>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="security"
                role="tabpanel"
                aria-labelledby="security-tab"
              >
                <h3 className="mb-4">Güvenlik ayarları</h3>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Login</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Two-factor auth</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue
                          id="recovery"
                        />
                        <label className="form-check-label" htmlFor="recovery">
                          Kurtarma
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
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
                <h3 className="mb-4">Uygulama Ayarları</h3>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue
                          id="app-check"
                        />
                        <label className="form-check-label" htmlFor="app-check">
                          App check
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue
                          id="defaultCheck2"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck2"
                        >
                          Lorem ipsum dolor sit.
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <button className="btn btn-outline-success">Kaydet</button>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="notification"
                role="tabpanel"
                aria-labelledby="notification-tab"
              >
                <h3 className="mb-4">Bildirim Ayarları</h3>
                <div className="form-group">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="notification1"
                    />
                    <label className="form-check-label" htmlFor="notification1">
                      E-posta Bildirimleri Almak İstiyor musun?
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="notification2"
                    />
                    <label className="form-check-label" htmlFor="notification2">
                      SMS bildirimi almak istiyor musun?
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="notification3"
                    />
                    <label className="form-check-label" htmlFor="notification3">
                      şirketlerin yayınladığı reklamları görmek istiyor musun?
                    </label>
                  </div>
                </div>
                <div>
                  <button className="btn btn-outline-success">Kaydet</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
