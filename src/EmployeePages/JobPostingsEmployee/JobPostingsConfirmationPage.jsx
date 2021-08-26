/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./css/JobPostingsConfirmationPage.css";
import {
  fetchAllJobPostings,
  JobPostingsStatusChangeAsync,
} from "../../redux/jobPostings/services";
import { jobPostingSelector } from "../../redux/jobPostings/jobPostingsSlice";

export default function JobPostingsConfirmationPage() {
  const dispatch = useDispatch();
  const [id, setId] = useState();
  const [employerID, setEmployerId] = useState(11);
  const [jobStatus, setJobStatus] = useState();


  const employeeJobPostings = useSelector(jobPostingSelector.selectAll);
  const status = useSelector((state) => state.jobPostings.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchAllJobPostings());
    }
  }, [dispatch, status]);

  const filterJobPostings = employeeJobPostings.filter(
    (item) => item.status === null
  );

  const changeStatus = async () => {

    await dispatch(JobPostingsStatusChangeAsync({id,employerID,jobStatus}));
  };

  // const handleSelectedPage = (e, { activePage }) => {
  //   setActivePage(activePage);
  // };
  return (
    <div>
      <div>
        <div className="container">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-6">
                  <h2>Bekleyen İş İlanları</h2>
                </div>
              </div>
            </div>
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>
                    <span className="custom-checkbox">
                      <input type="checkbox" id="selectAll" />
                      <label htmlFor="selectAll" />
                    </span>
                  </th>
                  <th>Şireket Adı</th>

                  <th>Web Adrres</th>
                  <th>Pozisyon</th>
                  <th>Son Başvuru Tarihi</th>
                  <th>Çalışma Türü</th>
                  <th>Konum</th>
                  <th>Max-Min</th>
                  <th>Onaylam</th>

                </tr>
              </thead>
              <tbody>
                {filterJobPostings.map((job) => (
                  <tr key={job.id}>
                    <td></td>
                    <td>{job.companyName}</td>
                    <td>{job.webAddress}</td>
                    <td>{job.positionName}</td>
                    <td>{job.applicationDeadline}</td>
                    <td>{job.typesOfWorkName}</td>
                    <td>{job.cityName}</td>
                    <td>
                      {job.minSalary} - {job.maxSalary}
                    </td>
                    <td style={{ width: "130px" }}>
                      <a
                        href="#EmployeeAcceptModal"
                        className="edit"
                        data-toggle="modal"
                        onClick={() => setId(job.id)}
                      >
                        <i
                        onClick={()=> setJobStatus(true)}
                          className="bi bi-check-circle"
                          data-toggle="tooltip"
                          title="Edit"
                        ></i>
                      </a>
                      <a
                         onClick={() => setId(job.id)}
                        href="#EmployeeRejectModal"
                        className="delete"
                        data-toggle="modal"
                      >
                        <i
                                onClick={()=> setJobStatus(false)}
                          className="bi bi-x-circle"
                          data-toggle="tooltip"
                          title="Delete"
                        ></i>
                      </a>
                      <a
                        href="#eyeEmployeeModal"
                        className="eye"
                        data-toggle="modal"
                      >
                        <i
                          className="bi bi-eye-fill"
                          data-toggle="tooltip"
                          title="eye"
                        ></i>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* Edit Modal HTML */}
        <div id="EmployeeAcceptModal" className="modal fade">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">İş İlana Kabul Edilecek</h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  ×
                </button>
              </div>
              <div className="modal-body">
                <label>Onaylıyormusunuz?</label>
              </div>
              <div className="modal-footer">
                <input
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                  defaultValue="İptal Et"
                />
                <button
                  onClick={changeStatus}
                  type="submit"
                  className="btn btn-success"
                  data-dismiss="modal"

                >
                  Evet
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="EmployeeRejectModal" className="modal fade">
          <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">r
                  <h4 className="modal-title">İş Ilanı Rededilecek</h4>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-hidden="true"
                  >
                    ×
                  </button>
                </div>
                <div className="modal-body">
                  <p>Neden İş İlanını Reddettiniz?</p>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
                <div className="modal-footer">
                  <input
                    type="button"
                    className="btn btn-danger"
                    data-dismiss="modal"
                    defaultValue="Cancel"
                  />
                  <button
                  onClick={changeStatus}
                  type="submit"
                  className="btn btn-success"
                  data-dismiss="modal"

                >
                  Evet
                </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
