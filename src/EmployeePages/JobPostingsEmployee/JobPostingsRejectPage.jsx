/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { jobPostingSelector } from "../../redux/jobPostings/jobPostingsSlice";
import { fetchAllJobPostings, JobPostingsStatusChangeAsync } from "../../redux/jobPostings/services";

export default function JobPostingsRejectPage() {
  const [id, setId] = useState();
  const [employerID, setEmployerId] = useState(11);
  const [jobStatus, setJobStatus] = useState(true);

  const employeeJobPostings = useSelector(jobPostingSelector.selectAll);
  const status = useSelector(state => state.jobPostings.status);


  const filterJobPostings = employeeJobPostings.filter(
    (item) => item.status === false
  );
  const dispatch = useDispatch();
  const changeStatus = async () => {
    await dispatch(JobPostingsStatusChangeAsync({ id, employerID, jobStatus }));
  };

  
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchAllJobPostings());
    }
  }, [dispatch, status]);
  return (
    <div>
      <div>
        <div className="container">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-6">
                  <h2>Reddedilen Edilen İş İlanları</h2>
                </div>
              </div>
            </div>
            <table className="table table-striped table-hover">
              <thead>
                <tr>
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
                        href="#EmployeeAcceptModal2"
                        className="edit"
                        data-toggle="modal"
                      >
                        <i
                          onClick={() => setId(job.id)}
                          className="bi bi-check-circle"
                          data-toggle="tooltip"
                          title="Edit"
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

        <div id="EmployeeAcceptModal2" className="modal fade">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">İş İlanı Kabul Edilecek</h4>
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
                  data-dismiss="modal"
                  onClick={changeStatus}
                  type="submit"
                  className="btn btn-success"
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
