/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Css/JobAdvertisementPage.css";
import { Grid, Pagination } from "semantic-ui-react";
import JobAdvertisementSideBarPage from "./JobAdvertisementSideBarPage";
import { Link } from "react-router-dom";
import {
  getJobPostingsByPageFilter,
  getJobPostingsByPageFilterLenght,
} from "../../redux/actions/jobPostingsActions";
export default function JobAdvertisementPage() {
  const [activePage, setActivePage] = useState(1);
  const [pageSize] = useState(10);
  const [filter, setFilter] = useState({});
  const [minSalary, setMinSalary] = useState({  minSalary: "0"})
  const [maxSalary, setMaxSalary] = useState({  maxSalary: "0"})
  const [max, setMax] = useState(99999)
  const [min, setMin] = useState(0)

  const jobPostingspageFilter = useSelector(
    (state) => state.jobPostingspageFilter.jobPostingsPageFilter
  );

  const jobPostingspageFilterLenght = useSelector(
    (state) => state.jobPostingsPageFilterLenght.jobPostingsPageFilterLenght
  );


  const dispatch = useDispatch();
  useEffect(() => {
   

    dispatch(getJobPostingsByPageFilter(max,min,activePage, pageSize, filter,));
    dispatch(getJobPostingsByPageFilterLenght(max,min,activePage, pageSize, filter ));
  }, [filter, activePage, pageSize,]);

  

  const handleSelectedPage = (e, { activePage }) => {
    setActivePage(activePage);
  };
 
 

  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <JobAdvertisementSideBarPage
              setFilter={setFilter}
              setMaxSalary={setMaxSalary}
              setMinSalary = {setMinSalary}
              minSalary={minSalary}
              maxSalary={maxSalary}
              setMin={setMin}
              setMax={setMax}
            ></JobAdvertisementSideBarPage>
          </Grid.Column>
          <Grid.Column width={12}>
            <div class="container" style={{ marginTop: "4.5em" }}>
              <div class="row">
                <div class="col-12">
                  <div class="card card-margin">
                    <div class="card-body">
                      <div class="row search-body">
                        <div class="col-lg-12">
                          <div class="search-result">
                            <div class="result-header">
                              <div class="row">
                                <div class="col-lg-6">
                                  <div class="records">
                                    Gosterilen: <b>1-{pageSize}</b> of{" "}
                                    <b>{jobPostingspageFilterLenght}</b> Sonuç
                                  </div>
                                </div>
                                <div class="col-lg-6">
                                  <div class="result-actions">
                                    <div class="result-sorting">
                                      <span>Sırala:</span>
                                      <select
                                        class="form-control border-0"
                                        id="exampleOption"
                                      >
                                        <option value="1">Sırala</option>
                                        <option value="2">Names (A-Z)</option>
                                        <option value="3">Names (Z-A)</option>
                                      </select>
                                    </div>
                                    <div class="result-views">
                                      <button
                                        type="button"
                                        class="btn btn-soft-base btn-icon"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          stroke-width="2"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          class="feather feather-list"
                                        >
                                          <line
                                            x1="8"
                                            y1="6"
                                            x2="21"
                                            y2="6"
                                          ></line>
                                          <line
                                            x1="8"
                                            y1="12"
                                            x2="21"
                                            y2="12"
                                          ></line>
                                          <line
                                            x1="8"
                                            y1="18"
                                            x2="21"
                                            y2="18"
                                          ></line>
                                          <line
                                            x1="3"
                                            y1="6"
                                            x2="3"
                                            y2="6"
                                          ></line>
                                          <line
                                            x1="3"
                                            y1="12"
                                            x2="3"
                                            y2="12"
                                          ></line>
                                          <line
                                            x1="3"
                                            y1="18"
                                            x2="3"
                                            y2="18"
                                          ></line>
                                        </svg>
                                      </button>
                                      <button
                                        type="button"
                                        class="btn btn-soft-base btn-icon"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          stroke-width="2"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          class="feather feather-grid"
                                        >
                                          <rect
                                            x="3"
                                            y="3"
                                            width="7"
                                            height="7"
                                          ></rect>
                                          <rect
                                            x="14"
                                            y="3"
                                            width="7"
                                            height="7"
                                          ></rect>
                                          <rect
                                            x="14"
                                            y="14"
                                            width="7"
                                            height="7"
                                          ></rect>
                                          <rect
                                            x="3"
                                            y="14"
                                            width="7"
                                            height="7"
                                          ></rect>
                                        </svg>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="result-body">
                              <div class="table-responsive">
                                <table class="table widget-26">
                                  <tbody>
                                    {jobPostingspageFilter.map((job) => (
                                      <tr key={job.jobPostingsId}>
                                        <td>
                                          <div class="widget-26-job-emp-img">
                                            <img
                                              src="data:image/jpeg;base64,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"
                                              alt="Company"
                                            />
                                          </div>
                                        </td>
                                        <td>
                                          <div class="widget-26-job-title">
                                            <a href>
                                              <Link
                                                to={`/jobadvertisement/${job.jobPostingsId}`}
                                              >
                                                {job.companyName}
                                              </Link>
                                            </a>
                                            <p class="m-0">
                                              <a
                                                href="//#"
                                                class="employer-name"
                                              ></a>{" "}
                                              <span class="text-muted time">
                                                5 Gün Once Eklendi
                                              </span>
                                            </p>
                                          </div>
                                        </td>
                                        <td>
                                          <div class="widget-26-job-info">
                                            <p class="type m-0">
                                              {job.typesOfWorkName}
                                            </p>
                                            <p class="text-muted m-0">
                                              <span class="location">
                                                <i className="location arrow    icon"></i>{" "}
                                                {job.cityName}
                                              </span>
                                            </p>
                                          </div>
                                        </td>
                                        <td>
                                          <div class="widget-26-job-salary">
                                            $ {job.minSalary} - {job.maxSalary}
                                          </div>
                                        </td>
                                        <td>
                                          <div class="widget-26-job-category bg-soft-danger">
                                            <i class="indicator bg-danger"></i>
                                            <span>
                                              {" "}
                                              {job.positionName}
                                            </span>
                                          </div>
                                        </td>
                                        <td>
                                          <div class="widget-26-job-starred">
                                            <a href className="icon-bookmarks">
                                              <i className="bi bi-bookmarks"></i>
                                            </a>
                                          </div>
                                        </td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Pagination
                        firstItem={null}
                        lastItem={null}
                        activePage={activePage}
                        onPageChange={handleSelectedPage}
                        totalPages={Math.ceil(
                          parseInt(jobPostingspageFilterLenght) / pageSize
                        )}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
