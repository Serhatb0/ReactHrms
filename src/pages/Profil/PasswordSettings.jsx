import React from "react";

function PasswordSettings() {
  return (
    <div>
     
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
  );
}

export default PasswordSettings;
