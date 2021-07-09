import React from "react";

function AccountSettings() {
  return (
    <div>
     
        <h3 className="mb-4">Hesap Ayarları </h3>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>Ad</label>
              <input type="text" className="form-control" placeholder="Ad" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Soyad</label>
              <input type="text" className="form-control" placeholder="Soyad" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Email</label>
              <input type="text" className="form-control" placeholder="Email" />
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
  );
}

export default AccountSettings;
