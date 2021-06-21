import React from "react";

export default function ResumeLanguagePage() {
  return (
    <div>
      <div
        className="card-body"
        style={{ margin: "0em 0em 0em 0em", padding: "1em 0em 0em 0em" }}
      >
        <div
          data-toggle="collapse"
          data-target="#collapseLanguage"
          className="card-header"
          aria-expanded="false"
          aria-controls="multiCollapseExample1"
        >
          Yabancı Diller
        </div>
        <div id="collapseLanguage" className="collapse">
          <div className="card-body ">
            <select class="ui dropdown col-6">
              <option value="">Dil Seç</option>
              <option value="1">Englısh</option>
              <option value="1">Fransızca</option>
              <option value="1">Almanca</option>
              <option value="1">İspanyolca</option>
            </select>
            <select
              class="ui dropdown col-5"
              style={{ margin: "0em 0em 0em 1em" }}
            >
              <option value="">Seviye Seç</option>
              <option value="1">Başlangıç</option>
              <option value="2">Temel</option>
              <option value="3">Orta</option>
              <option value="4">İyi</option>
              <option value="5">İleri</option>
            </select>
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
    </div>
  );
}
