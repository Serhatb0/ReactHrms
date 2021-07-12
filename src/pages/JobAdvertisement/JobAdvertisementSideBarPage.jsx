import React, { useState, useEffect } from "react";
import { Search } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { getJobPostingsByPage } from "../../redux/actions/jobPostingsActions";
export default function JobAdvertisementSideBarPage({pageActive,sizePage,setPage}) {

  const jobPostingsPage = useSelector(state => state.jobPostingspage.jobPostingsPage)

  const dispatch = useDispatch()
  useEffect(() => {
    
   
      dispatch(getJobPostingsByPage())
    
  }, [pageActive,sizePage])


  const handleCity =()=>{
    const selectedCity= document.getElementById("city").value;
    console.log(selectedCity);
  }

  return (
    <div>
      <div class="container-fluid mt-100">
        <div
          class=" justify-content-center"
          style={{ margin: "6em 0em 0em 0em" }}
        >
          <div class="card">
            <article class="filter-group">
              <header class="card-header">
                {" "}
                <a
                  href
                  data-toggle="collapse"
                  data-target="#collapse_aside1"
                  data-abc="true"
                  aria-expanded="false"
                  class="collapsed"
                >
                  {" "}
                  <i class="icon-control fa fa-chevron-down"></i>
                  <h6 class="title">Şehir</h6>
                </a>{" "}
              </header>
              <div class="filter-content collapse" id="collapse_aside1">
                <div class="card-body ">
                  <select id="city" class="ui dropdown" onChange={handleCity} style={{ width: "13em" }}>
                    <option value="">Şehirler</option>
                    <option value="Mardin">Mardin</option>
                    <option value="Diyarbakır">Diyarbakır</option>
                    <option value="Batman">Batman</option>
                    <option value="Ağrı">Ağrı</option>
                    <option value="Erzurum">Erzurum</option>
                  </select>
                  <a
                    style={{ margin: "1em 0em 0em 0em" }}
                    href
                    class="highlight-button btn btn-medium button xs-margin-bottom-five"
                    data-abc="true"
                  >
                    Uygula
                  </a>
                </div>
              </div>
            </article>
            <article class="filter-group">
              <header class="card-header">
                {" "}
                <a
                  href
                  data-toggle="collapse"
                  data-target="#collapse_aside2"
                  data-abc="true"
                  aria-expanded="false"
                  class="collapsed"
                >
                  {" "}
                  <i class="icon-control fa fa-chevron-down"></i>
                  <h6 class="title">Maaş Skalası</h6>
                </a>{" "}
              </header>
              <div class="filter-content collapse" id="collapse_aside2">
                <div class="card-body">
                  {" "}
                  <input
                    type="range"
                    class="custom-range"
                    min="0"
                    max="100"
                    name=""
                  />
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      {" "}
                      <label>Min</label>{" "}
                      <input
                        class="form-control"
                        placeholder="$0"
                        type="number"
                      />{" "}
                    </div>
                    <div class="form-group text-right col-md-6">
                      {" "}
                      <label>Max</label>{" "}
                      <input
                        class="form-control"
                        placeholder="$1,0000"
                        type="number"
                      />{" "}
                    </div>
                  </div>{" "}
                  <a
                    href
                    class="highlight-button btn btn-medium button xs-margin-bottom-five"
                    data-abc="true"
                  >
                    Uygula
                  </a>
                </div>
              </div>
            </article>
            <article class="filter-group">
              <header class="card-header">
                {" "}
                <a
                  href
                  data-toggle="collapse"
                  data-target="#collapse_aside3"
                  data-abc="true"
                  aria-expanded="false"
                  class="collapsed"
                >
                  {" "}
                  <i class="icon-control fa fa-chevron-down"></i>
                  <h6 class="title">Pozisyon</h6>
                </a>{" "}
              </header>
              <div class="filter-content collapse" id="collapse_aside3">
                <div class="card-body">
                  <Search style={{ margin: "0em 0em 0em 0em" }}></Search>
                  <div style={{ margin: "0.5em 0em 0em 2em" }}>
                    <label class="custom-control">
                      {" "}
                      <input
                        id="flexRadioDefault2"
                        type="radio"
                        name="flexRadioDefault"
                        class="custom-control-input form-check-input "
                      />
                      <div class="custom-control-label">Veri Tabanı Uzmanı</div>
                    </label>{" "}
                    <label class="custom-control">
                      {" "}
                      <input
                        id="flexRadioDefault2"
                        type="radio"
                        name="flexRadioDefault"
                        class="custom-control-input form-check-input "
                      />
                      <div class="custom-control-label">Yazılım Uzmanı</div>
                    </label>{" "}
                    <label class="custom-control">
                      {" "}
                      <input
                        id="flexRadioDefault2"
                        type="radio"
                        name="flexRadioDefault"
                        class="custom-control-input form-check-input "
                      />
                      <div class="custom-control-label">Muhasebe Uzmanı</div>
                    </label>{" "}
                  </div>
                </div>
                <a
                  style={{ margin: "0em 0em 1em 0em" }}
                  href
                  class="highlight-button btn btn-medium button xs-margin-bottom-five"
                  data-abc="true"
                >
                  Uygula
                </a>
              </div>
            </article>
            <article class="filter-group">
              <header class="card-header">
                {" "}
                <a
                  href
                  data-toggle="collapse"
                  data-target="#collapse_aside4"
                  data-abc="true"
                  class="collapsed"
                  aria-expanded="false"
                >
                  {" "}
                  <i class="icon-control fa fa-chevron-down"></i>
                  <h6 class="title">Tarih </h6>
                </a>{" "}
              </header>
              <div
                class="filter-content collapse form-check "
                id="collapse_aside4"
              >
                <div class="card-body">
                  {" "}
                  <label class="custom-control">
                    {" "}
                    <input
                      type="radio"
                      name="flexRadioDefault"
                      class="custom-control-input  "
                    />
                    <div class="custom-control-label">Tümü </div>
                  </label>{" "}
                  <label class="custom-control">
                    {" "}
                    <input
                      id="flexRadioDefault2"
                      type="radio"
                      name="flexRadioDefault"
                      class="custom-control-input form-check-input "
                    />
                    <div class="custom-control-label">Bügün İlanları</div>
                  </label>{" "}
                  <label class="custom-control">
                    {" "}
                    <input
                      type="radio"
                      name="flexRadioDefault"
                      class="custom-control-input form-check-input"
                    />
                    <div class="custom-control-label">Son 3 Gün</div>
                  </label>{" "}
                  <label class="custom-control">
                    {" "}
                    <input
                      type="radio"
                      name="flexRadioDefault"
                      class="custom-control-input form-check-input"
                    />
                    <div class="custom-control-label">Son 7 Gün</div>
                  </label>{" "}
                </div>
                <a
                  style={{ margin: "0em 0em 1em 0em" }}
                  href
                  class="highlight-button btn btn-medium button xs-margin-bottom-five"
                  data-abc="true"
                >
                  Uygula
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
