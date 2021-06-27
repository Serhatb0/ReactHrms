/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./css/JobPostingsConfirmationPage.css";

export default function JobPostingsConfirmationPage() {
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
                <tr>
                  <td>
                    <span className="custom-checkbox">
                      <input
                        type="checkbox"
                        id="checkbox1"
                        name="options[]"
                        defaultValue={1}
                      />
                      <label htmlFor="checkbox1" />
                    </span>
                  </td>
                  <td>Thomas Hardy</td>
                  <td>thomashardy@mail.com</td>
                  <td>Veri Tabanı Uzmanı</td>
                  <td>2021-05-08</td>
                  <td>Tam Zamanlı</td>
                  <td>Mardin</td>
                  <td>500-559</td>
             
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
