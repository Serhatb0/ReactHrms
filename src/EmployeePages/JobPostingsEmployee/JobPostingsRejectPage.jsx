/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "semantic-ui-react";
import { getAllByPageIsActive } from "../../redux/actions/employeeJobPostingsActions";

export default function JobPostingsRejectPage() {
  const [activePage, setActivePage] = useState(1);
  const [pageSize] = useState(10);
  const [isActive] = useState(false);


  const employeeJobPostings = useSelector(state => state.employeeJobPostingsIsActive.employeeJobPostingsIsActive)
  const dispatch = useDispatch()

  useEffect(() => {

    dispatch(getAllByPageIsActive(activePage,pageSize,isActive))
  }, [activePage,pageSize,dispatch,isActive])

  const handleSelectedPage = (e, { activePage }) => {
    setActivePage(activePage);
    console.log(activePage);
  };


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
                  <th></th>
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
        <div id="addEmployeeModal" className="modal fade">
          <div className="modal-dialog">
            <div className="modal-content">
              <form>
                <div className="modal-header">
                  <h4 className="modal-title">Add Employee</h4>
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
                  <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label>Address</label>
                    <textarea
                      className="form-control"
                      required
                      defaultValue={""}
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone</label>
                    <input type="text" className="form-control" required />
                  </div>
                </div>
                <div className="modal-footer">
                  <input
                    type="button"
                    className="btn btn-default"
                    data-dismiss="modal"
                    defaultValue="Cancel"
                  />
                  <input
                    type="submit"
                    className="btn btn-success"
                    defaultValue="Add"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Edit Modal HTML */}
        <div id="editEmployeeModal" className="modal fade">
          <div className="modal-dialog">
            <div className="modal-content">
              <form>
                <div className="modal-header">
                  <h4 className="modal-title">Edit Employee</h4>
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
                  <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label>Address</label>
                    <textarea
                      className="form-control"
                      required
                      defaultValue={""}
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone</label>
                    <input type="text" className="form-control" required />
                  </div>
                </div>
                <div className="modal-footer">
                  <input
                    type="button"
                    className="btn btn-default"
                    data-dismiss="modal"
                    defaultValue="Cancel"
                  />
                  <input
                    type="submit"
                    className="btn btn-info"
                    defaultValue="Save"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Delete Modal HTML */}
        <div id="deleteEmployeeModal" className="modal fade">
          <div className="modal-dialog">
            <div className="modal-content">
              <form>
                <div className="modal-header">
                  <h4 className="modal-title">Delete Employee</h4>
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
                  <p>Are you sure you want to delete these Records?</p>
                  <p className="text-warning">
                    <small>This action cannot be undone.</small>
                  </p>
                </div>
                <div className="modal-footer">
                  <input
                    type="button"
                    className="btn btn-default"
                    data-dismiss="modal"
                    defaultValue="Cancel"
                  />
                  <input
                    type="submit"
                    className="btn btn-danger"
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
