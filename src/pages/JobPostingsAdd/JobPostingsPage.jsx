import { useFormik } from "formik";
import React, { useEffect } from "react";
import "./Css/JobPostingPage.css";
import * as Yup from "yup";
import { fetchCity } from "../../redux/Cities/services";
import { citySelector } from "../../redux/Cities/citySlice";
import { jobPositionSelector } from "../../redux/jobPositions/jobPositionSlice";
import { fetchJobPosition } from "../../redux/jobPositions/services";
import { typeOfWorkSelector } from "../../redux/typeOfWork/typeOfWorkSlice";
import { fetchTypeOfWork} from "../../redux/typeOfWork/services";
import { addJobPostingAsync} from "../../redux/jobPostings/services";



import { Form } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
export default function JobPostingsPage() {
  const dispatch = useDispatch();

  const cities = useSelector(citySelector.selectAll);
  const jobPositions = useSelector(jobPositionSelector.selectAll);
  const typesOfWorks = useSelector(typeOfWorkSelector.selectAll);


  const status = useSelector((state) => state.city.status);
  const jobPositionStatus = useSelector((state) => state.jobPosition.status);
  const typeOfWorkStatus = useSelector((state) => state.typeOfWork.status);


  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCity());
    }
    if (jobPositionStatus === "idle") {
      dispatch(fetchJobPosition());
    }
    if(typeOfWorkStatus === 'idle'){
      dispatch(fetchTypeOfWork());
    }
  }, [dispatch, status, jobPositionStatus,typeOfWorkStatus]);

  const initialValues = {
    applicationDeadline: "",
    cityId: "",
    emloyerId: "4",
    jobDescription: "",
    jobPositionId: "",
    maxSalary: "",
    minSalary: "",
    numberOfOpenPositions:"",
    typesOfWorkId: "",
  };

  const validationSchema = Yup.object({
    applicationDeadline: Yup.string().required("Zorunlu Alan"),
    cityId: Yup.string().required("Zorunlu Alan"),

    jobDescription: Yup.string().required("Zorunlu Alan"),

    jobPositionId: Yup.string().required("Zorunlu Alan"),
    maxSalary: Yup.string().required("Zorunlu Alan"),
    minSalary: Yup.string().required("Zorunlu Alan"),
    numberOfOpenPositions: Yup.string().required("Zorunlu Alan"),

    typesOfWorkId: Yup.string().required("Zorunlu Alan"),
  });

  const EducationAdd = () => {
    const { handleSubmit, handleChange } = useFormik({
      initialValues: initialValues,
      validationSchema,
      onSubmit:async (values) => {
        await dispatch(addJobPostingAsync(values))
      },
    });

    return (
      <Form onSubmit={handleSubmit}>
        <h3 class="register-heading">İş İlanı Yayınla</h3>
        <div class="row register-form">
          <div class="col-md-6">
            <div class="form-group">
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="İş Tanıtımı"
                name="jobDescription"
                onChange={handleChange}
              ></textarea>
            </div>

            <div class="form-group">
              <label>Min Maaş</label>{" "}
              <input
                class="form-control"
                placeholder="$0"
                type="number"
                name="minSalary"
                onChange={handleChange}
              />{" "}
              <label>Max Maaş</label>{" "}
              <input
                class="form-control"
                placeholder="$1,0000"
                type="number"
                name="maxSalary"
                onChange={handleChange}
              />{" "}
            </div>
            <div class="form-group">
              <label>Son Başvuru Tarihi</label>{" "}
              <input
                name="applicationDeadline"
                onChange={handleChange}
                class="form-control"
                type="date"
                id="example-date-input"
              />
            </div>
          </div>

          <div class="col-md-6">
            <div class="form-group">
              <label>Pozisyon</label>{" "}
              <select
                name="jobPositionId"
                onChange={handleChange}
                class="form-control"
              >
                <option class="hidden" selected disabled>
                  Pozisyon
                </option>
                {jobPositions.map((jobPosition) => (
                  <option key={jobPosition.id} value={jobPosition.id}>
                    {jobPosition.positionName}
                  </option>
                ))}
              </select>
            </div>
            <div class="form-group">
              <label>Çalışma Şekli</label>{" "}
              <select
                name="typesOfWorkId"
                onChange={handleChange}
                class="form-control"
              >
                <option class="hidden" selected disabled>
                  Çalışma Şekli
                </option>
                {typesOfWorks.map(typeOfWork=>(
                <option key={typeOfWork.id} value={typeOfWork.id}>{typeOfWork.typesOfWorkName}</option>

                ))}
              </select>
            </div>
            <div class="form-group">
              <label>Şehir</label>{" "}
              <select
                name="cityId"
                onChange={handleChange}
                class="form-control"
              >
                <option class="hidden" selected disabled>
                  Şehir
                </option>
                {cities.map((city) => (
                  <option key={city.id} value={city.id}>
                    {city.cityName}
                  </option>
                ))}
              </select>
            </div>
            <div class="form-group">
              <label>Açık Pozisyon Adedi</label>{" "}
              <input
                class="form-control"
                placeholder="0"
                type="number"
                name="numberOfOpenPositions"
                onChange={handleChange}
              />{" "}
            </div>
          </div>
          <button
            type="submit"
            class="btn btn-outline-success"
            style={{ marginLeft: "1em" }}
          >
            İlanı Paylaş
          </button>
        </div>
      </Form>
    );
  };

  return (
    <div style={{ margin: "6em 0em 0em 0em" }}>
      <div class="container register">
        <div class="row">
          <div class="col-md-3 register-left">
            <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
            <h3>Merhaba</h3>
            <p>İş İlanınızı Ekleyin</p>

            <br />
          </div>

          <div class="col-md-9 register-right">
            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <EducationAdd />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
