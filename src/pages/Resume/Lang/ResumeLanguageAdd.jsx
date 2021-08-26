import { Form, Formik } from "formik";
import * as Yup from "yup";
import {addLanguageAsync  } from "../../../redux/languages/services";
import React from "react";
import BiricikSelectInput from "../../../utilities/customFormControls/BiricikSelectInput";
import { useDispatch } from "react-redux";
function ResumeLanguageAdd() {
	const dispatch = useDispatch()
  const initialValues = {
	candidateId:13,
    languageName: "",
    languageLevel: 1,
  };

  const schema = Yup.object({
    languageName: Yup.string().required("Zorunlu Alan"),
    languageLevel: Yup.string().required("Zorunlu Alan"),
  });
  return (
	
    <Formik
	initialValues={initialValues}
	validationSchema={schema}
	onSubmit={async (values) => {
		await dispatch(addLanguageAsync(values))
	}}
	>
     <Form>
      <div>
        <div id="LanguageAddModal" className="modal fade">
          <div className="modal-dialog">
            <div className="modal-content">
              <form>
                <div className="modal-header">
                  <h4 className="modal-title">Yabancı Dil Bilgileri</h4>
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
                  <BiricikSelectInput
                    class="form-select"
                    aria-label="Default select example"
                    name="languageName"
                  >
                    <option selected>Yabancı Dil*</option>
                    <option>İngilizce</option>
                    <option>Arapça</option>
                    <option>Türkçe</option>
                  </BiricikSelectInput>
                  <label style={{ float: "left", margin: "1em 0em 0em 0em" }}>
                    <b>Dil Seviyesi</b>
                  </label>
                  <BiricikSelectInput
                    class="form-select"
                    aria-label="Default select example"
                    name="languageLevel"
                  >
                    <option selected>Seviye*</option>
                    <option value="1">Başlangıç</option>
                    <option value="2">Temel</option>
                    <option value="3">Orta</option>
                    <option value="4">İyi</option>
                    <option value="5">İleri</option>
                
                  </BiricikSelectInput>
                </div>
              </form>

              <div className="modal-footer">
                <input
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                  defaultValue="Cancel"
                />
				
                <button type="submit" className="btn btn-success">
                  Kaydet
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
	  </Form>
    </Formik>
  );
}

export default ResumeLanguageAdd;
