import React from 'react'

function NotificationsSettings() {
    return (
        <div>
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
    )
}

export default NotificationsSettings
