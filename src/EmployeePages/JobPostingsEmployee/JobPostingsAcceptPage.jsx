/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { jobPostingSelector } from "../../redux/jobPostings/jobPostingsSlice";
import { fetchAllJobPostings, JobPostingsStatusChangeAsync } from "../../redux/jobPostings/services";

export default function JobPostingsAcceptPage() {
  const [id, setId] = useState();
  const [employerID, setEmployerId] = useState(11);
  const [jobStatus, setJobStatus] = useState(false);

  const employeeJobPostings = useSelector(jobPostingSelector.selectAll)
  const status = useSelector(state => state.jobPostings.status)


 const dispatch = useDispatch()
  
  const filterJobPostings = employeeJobPostings.filter(item =>item.status === true)
  const changeStatus = async () => {

    await dispatch(JobPostingsStatusChangeAsync({id,employerID,jobStatus}));
  };

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchAllJobPostings());
    }
  }, [dispatch, status]);
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
                  <h2>Kabul Edilen İş İlanları</h2>
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
              {filterJobPostings.map((job)=>(
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
                 <td style={{width:"130px"}}>
                    <a
                      href="#EmployeeRejectModal1"
                      className="delete"
                      data-toggle="modal"
                      onClick={()=> setId(job.id)}
                    >
                      <i
                        className="bi bi-x-circle"
                        data-toggle="tooltip"
                        title="Delete"
                      >
                       
                      </i>
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
                      >
                       
                      </i>
                    </a>
                  </td>
               </tr>
              ))}

               
              </tbody>
            </table>
          
          </div>
        </div>
      
        <div id="EmployeeRejectModal1" className="modal fade">
          <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">İş İlanı Kaldırılacak</h4>
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
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="modal-footer">
                  <input
                    type="button"
                    className="btn btn-danger"
                    data-dismiss="modal"
                    defaultValue="Cancel"
                  />
                  <input
                  onClick={changeStatus}
                  data-dismiss="modal"

                    type="submit"
                    className="btn btn-success"
                    defaultValue="Delete"
                  />
                </div>
            </div>
          </div>
        </div>
    
      </div>
    </div>
  );
}
