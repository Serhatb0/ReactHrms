/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import "./css/JobPostingsConfirmationPage.css";
import { Pagination } from "semantic-ui-react";
export default function JobPostingsConfirmationPage() {

  const [activePage, setActivePage] = useState(1);
  const [pageSize] = useState(10);
  const [employeeJobPostings, setemployeeJobPostings] = useState([])
  const dispatch = useDispatch()



  const handleSelectedPage = (e, { activePage }) => {
    setActivePage(activePage);
  };
  return (
    <div>
      <div>
        <div className="container">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-6">
                  <h2>
                   Bekleyen İş İlanları
                  </h2>
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
                </tr>
              </thead>
              <tbody>
              {employeeJobPostings.map((job)=>(
                 <tr>
                 <td></td>
                 <td>{job.employer.companyName}</td>
                 <td>{job.employer.webAddress}</td>
                 <td>{job.jobPosition.positionName}</td>
                 <td>{}</td>
                 <td>{job.city.cityName}</td>
                 <td>{job.minSalary} - {job.maxSalary}</td>
                 <td style={{width:"130px"}}>
                    <a
                      href="#EmployeeAcceptModal"
                      className="edit"
                      data-toggle="modal"
                    >
                      <i
                        className="bi bi-check-circle"
                        data-toggle="tooltip"
                        title="Edit"
                      >
              
                      </i>
                    </a>
                    <a
                      href="#EmployeeRejectModal"
                      className="delete"
                      data-toggle="modal"
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
            <div className="clearfix">
              <div className="hint-text">
                Showing <b>5</b> out of <b>25</b> entries
              </div>
              <Pagination
                        firstItem={null}
                        lastItem={null}
                        activePage={activePage}
                        onPageChange={handleSelectedPage}
                        totalPages={5}
                      />
            </div>
          </div>
        </div>
        {/* Edit Modal HTML */}
        <div id="EmployeeAcceptModal" className="modal fade">
          <div className="modal-dialog">
            <div className="modal-content">
              <form>
                <div className="modal-header">
                  <h4 className="modal-title">Biricik A.ş</h4>
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
                    type="submit"
                    className="btn btn-success"
    
                  >Evet</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div id="EmployeeRejectModal" className="modal fade">
          <div className="modal-dialog">
            <div className="modal-content">
              <form>
                <div className="modal-header">
                  <h4 className="modal-title">Biricik A.ş</h4>
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
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="modal-footer">
                  <input
                    type="button"
                    className="btn btn-danger"
                    data-dismiss="modal"
                    defaultValue="Cancel"
                  />
                  <input
                    type="submit"
                    className="btn btn-success"
                    defaultValue="Delete"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
