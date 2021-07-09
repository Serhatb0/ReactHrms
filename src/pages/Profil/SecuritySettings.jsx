import React from 'react'

function SecuritySettings() {
    return (
        <div>
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
        </div>
    )
}

export default SecuritySettings
