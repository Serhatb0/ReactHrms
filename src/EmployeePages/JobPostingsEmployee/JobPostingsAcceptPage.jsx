/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function JobPostingsAcceptPage() {
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
                <tr>
                  <td></td>
                  <td>Thomas Hardy</td>
                  <td>thomashardy@mail.com</td>
                  <td>Veri Tabanı Uzmanı</td>
                  <td>2021-05-08</td>
                  <td>Tam Zamanlı</td>
                  <td>Mardin</td>
                  <td>500-559</td>
                </tr>
              </tbody>
            </table>
            <div className="clearfix">
              <div className="hint-text">
                Showing <b>5</b> out of <b>25</b> entries
              </div>
              <ul className="pagination">
                <li className="page-item disabled">
                  <a href="#">Previous</a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    2
                  </a>
                </li>
                <li className="page-item active">
                  <a href="#" className="page-link">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    4
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    5
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    Next
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
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
