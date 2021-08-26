/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { employerSelector } from '../../redux/employers/employerSlice';
import { employerStatusChangeAsync, fetchEmployer } from '../../redux/employers/services';

function EmployerRejectPage() {
	const [employeeId, setEmployeeId] = useState(12)
	const [employerId, setEmployerId] = useState()
	const [employerStatus, setEmployerStatus] = useState();
	const dispatch = useDispatch()
	const employers = useSelector(employerSelector.selectAll)
	const status = useSelector(state => state.employer.status)

	const filterEmployer = employers.filter(item =>item.staffApproval === false);
	useEffect(() => {
		if(status === 'idle'){
			dispatch(fetchEmployer());
		}
	}, [dispatch,status])
	const changeStatus = async () => {

		await dispatch(employerStatusChangeAsync({employerId,employeeId,employerStatus}));
	  };
	return (
		<div>
		<div>
		  <div className="container">
			<div className="table-wrapper">
			  <div className="table-title">
				<div className="row">
				  <div className="col-sm-6">
					<h2>Reddedilen İş Verenler</h2>
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
					<th>Email</th>

  
				  </tr>
				</thead>
				<tbody>
				 {filterEmployer.map(employer =>(
					 	<tr key={employer.id}>
						 <td></td>
						 <td>{employer.companyName}</td>
						 <td>{employer.webAddress}</td>
						 <td>{employer.email}</td>
					   
						
						 <td style={{ width: "130px" }}>
						   <a
							 href="#EmployeeAcceptModal"
							 className="edit"
							 data-toggle="modal"
							 onClick={()=> setEmployerStatus(true)}
						   >
							 <i
							   className="bi bi-check-circle"
							   data-toggle="tooltip"
							   title="Edit"
							   onClick={()=> setEmployerId(employer.id)}
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
				  <h4 className="modal-title">İş Veren Kabul Edilecek</h4>
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
		 
		</div>
	  </div>
	)
}

export default EmployerRejectPage
