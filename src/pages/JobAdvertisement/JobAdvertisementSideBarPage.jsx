/* eslint-disable no-redeclare */
import React, { useEffect, useState } from "react";
import { Dropdown } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import NumberInput from "semantic-ui-react-numberinput";
import { fetchCity } from "../../redux/Cities/services";
import { citySelector } from "../../redux/Cities/citySlice";
import { jobPositionSelector } from "../../redux/jobPositions/jobPositionSlice";
import { fetchJobPosition } from "../../redux/jobPositions/services";

import "./Css/jobAdvertisemenSideBarPage.css";
import { statusChange } from "../../redux/jobPostings/jobPostingsSlice";
export default function JobAdvertisementSideBarPage({
  setFilter,
  setMaxSalary,
  setMinSalary,
  minSalary,
  maxSalary,
  setMin,
  setMax,
}) {
  const dispatch = useDispatch();

  const [jobPosition, setJobPosition] = useState([]);
  const [city, setCity] = useState([]);

  const cities = useSelector(citySelector.selectAll);
  const jobPositions = useSelector(jobPositionSelector.selectAll);

  const status = useSelector((state) => state.city.status);
  const jobPositionStatus = useSelector((state) => state.jobPosition.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCity());
    }
    if (jobPositionStatus === "idle") {
      dispatch(fetchJobPosition());
    }
  }, [dispatch, status, jobPositionStatus]);

  const { currentValuesCity } = city;

  const { currentValues } = jobPosition;

  const handleChange = (e, { value }) => {
    setJobPosition({ currentValues: value });
  };
  const handleChangeCity = (e, { value }) => {
    setCity({ currentValuesCity: value });
  };

  const changeMinSalary = (newValue) => {
    setMinSalary({ minSalary: newValue });
  };

  const changeMaxSalary = (newValue) => {
    setMaxSalary({ maxSalary: newValue });
  };

  const jobPositionClik = () => {
    dispatch(statusChange());
    if (currentValues !== undefined || currentValuesCity !== undefined) {
      var selectedjobPositions = currentValues;
      var selectedCity = currentValuesCity;
    }
    if (currentValues === undefined) {
      var selectedjobPositions = [null];
    } else {
      if (currentValues.length === 0) {
        var selectedjobPositions = [null];
      }
    }
    if (currentValuesCity === undefined) {
      var selectedCity = [null];
    } else {
      if (currentValuesCity.length === 0) {
        var selectedCity = [null];
      }
    }

    if (maxSalary.maxSalary === "0") {
      setMax(9999999);
    } else {
      setMax(maxSalary.maxSalary);
    }

    setMin(parseInt(minSalary.minSalary));

    setFilter({
      cityId: [...selectedCity],
      jobPositionId: [...selectedjobPositions],
    });
  };
  console.log(currentValues);

  return (
    <div>
      <div class="container-fluid mt-100">
        <div
          class=" justify-content-center"
          style={{ margin: "6em 0em 0em 0em" }}
        >
          <div className="card m-0 p-0">
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
                  <Dropdown
                    style={{ maxHeight: "7rem" }}
                    options={cities.map((city) => {
                      return {
                        text: city.cityName,
                        key: city.id,
                        value: city.id,
                      };
                    })}
                    placeholder="Şehirler"
                    search
                    selection
                    fluid
                    multiple
                    onChange={handleChangeCity}
                  />
                  <a
                    style={{ margin: "1em 0em 0em 0em" }}
                    href
                    class="highlight-button btn btn-medium button xs-margin-bottom-five"
                    data-abc="true"
                    onClick={jobPositionClik}
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
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      {" "}
                      <label>Min</label>{" "}
                      <NumberInput
                        value={minSalary.minSalary}
                        onChange={changeMinSalary}
                      />
                    </div>
                    <div class="form-group" style={{ marginLeft: "0.4em" }}>
                      {" "}
                      <label>Max</label>{" "}
                      <NumberInput
                        value={maxSalary.maxSalary}
                        onChange={changeMaxSalary}
                      />
                    </div>
                  </div>{" "}
                  <a
                    href
                    class="highlight-button btn btn-medium button xs-margin-bottom-five"
                    data-abc="true"
                    onClick={jobPositionClik}
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
                <div className="card-body ">
                  <div className="">
                    {" "}
                    <Dropdown
                      id="jobPositions"
                      style={{ maxHeight: "7rem" }}
                      options={jobPositions.map((job) => {
                        return {
                          text: job.positionName,
                          key: job.id,
                          value: job.id,
                        };
                      })}
                      placeholder="İş Pozisyonları"
                      search
                      selection
                      fluid
                      multiple
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <a
                  style={{ margin: "0em 0em 1em 0em" }}
                  href
                  class="highlight-button btn btn-medium button xs-margin-bottom-five"
                  data-abc="true"
                  onClick={jobPositionClik}
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
