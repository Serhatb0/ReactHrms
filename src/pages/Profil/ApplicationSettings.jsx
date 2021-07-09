import React from 'react'

function ApplicationSettings() {
    return (
        <div>
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
    )
}

export default ApplicationSettings
