import React from "react";

export default function ResumeWorkExperiencePage() {
  return (
    <div id="work">
      <section>
        <div className="" style={{ margin: "1em 0em 0em 0em" }}>
          <div
            data-toggle="collapse"
            data-target="#collapseWork"
            className="card-header"
            aria-expanded="false"
            aria-controls="multiCollapseExample1"
          >
            İş Deneyimleri
          </div>

          <div id="collapseWork" className="collapse">
            <div className="card-body">
              <div className="ui icon input input-work col-6">
                <input
                  type="text"
                  placeholder="Şirket Adı"
                 
                />
                <i
                  aria-hidden="true"
                  className="briefcase circular inverted link icon"
                ></i>
              </div>

              <div className="ui icon input  col-6 ">
                <input type="text" placeholder="Posizyon"  />
                <i
                  aria-hidden="true"
                  className="address card circular inverted link icon"
                ></i>
              </div>
              <span className="dene">
                <h6 style={{marginLeft:"1em"}}>İşe Başlama Tarihii</h6>
              </span>
              <div className="ui icon input input-work col-6 ">
                <input type="date" />
                <i
                  aria-hidden="true"
                  className="calendar alternate circular inverted link icon"
                ></i>
              </div>
         
              <select
                className="ui dropdown col-6"
             
              >
                <option value="">Çalışma Durumu</option>
                <option value="0">Calışmıyorum</option>
                <option value="1">Halen Çalışıyorum</option>
              </select>
           
              <span className="dene">
                <h6 style={{marginLeft:"1em"}}>İşten Ayrılma Tarihi</h6>
              </span>
              <div className="ui icon input input-work col-6 ">
                <input type="date" />
                <i
                  aria-hidden="true"
                  className="calendar alternate circular inverted link icon"
                ></i>
              </div>
              <div className="btn-resume" style={{ margin: "1em 0em 0em 9em" }}>
              <button type="button" class="btn btn btn-outline-success btn-lg">
                Kaydet
              </button>
              <button
                type="button"
                class="btn btn-outline-danger btn-lg"
                style={{ marginLeft: "1em" }}
              >
                İptal Et
              </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
