/* eslint-disable jsx-a11y/anchor-is-valid */
import { useFormik } from "formik";
import { Button, Form, Label, Modal } from "semantic-ui-react";
import { validationSchema } from "./Validation/ResumeEducationValidation";
import { addEducationAsync } from "../../../redux/educations/services";
import { useDispatch } from "react-redux";

let initialValues = {
  episode: "",
  graduationYear: "",
  id: "13",
  schoolName: "",
  schoolStatus: true,
  startOfSchool: "",
};

export const EducationAdd = ({ setAddOpen, addOpen }) => {
  const dispatch = useDispatch();
  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    initialValues: initialValues,
    validationSchema,
    onSubmit: async (values) => {
      await dispatch(addEducationAsync(values));
      setAddOpen(false);
     
    },
  });

  return (
    <Modal
      dimmer={"blurring"}
      centered={true}
      size={"mini"}
      style={{
        height: "auto",
        top: "auto",
        left: "auto",
        bottom: "auto",
        right: "auto",
      }}
      onClose={() => setAddOpen(false)}
      onOpen={() => setAddOpen(true)}
      open={addOpen}
    >
      <Modal.Header>Eğitim Bilgileri</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <Form onSubmit={handleSubmit}>
            <Form.Input
              id="web"
              value={values.schoolName}
              placeholder="Okul Adı"
              name="schoolName"
              onChange={handleChange}
              values={values.schoolName}
            />
            {!!errors.schoolName && touched.schoolName ? (
              <Label pointing basic color="red">
                {errors.schoolName}
              </Label>
            ) : null}
            <Form.Input
              id="web"
              value={values.episode}
              placeholder="Bolüm"
              name="episode"
              onChange={handleChange}
              values={values.episode}
            />
            {!!errors.episode && touched.episode ? (
              <Label pointing basic color="red">
                {errors.episode}
              </Label>
            ) : null}
            <Form.Input
              id="web"
              value={values.startOfSchool}
              placeholder="Okul Başlangıç Tarihi"
              name="startOfSchool"
              onChange={handleChange}
              values={values.startOfSchool}
            />
            {!!errors.startOfSchool && touched.startOfSchool ? (
              <Label pointing basic color="red">
                {errors.startOfSchool}
              </Label>
            ) : null}
            <Form.Input
              id="web"
              value={values.graduationYear}
              placeholder="Mezuniyet Tarihi"
              name="graduationYear"
              onChange={handleChange}
              values={values.graduationYear}
            />
            {!!errors.graduationYear && touched.graduationYear ? (
              <Label pointing basic color="red">
                {errors.graduationYear}
              </Label>
            ) : null}
            <Modal.Actions>
              <Button color="black" onClick={() => setAddOpen(false)}>
                İptal
              </Button>

              <Button
                content="Kaydet"
                labelPosition="right"
                icon="checkmark"
                type="submit"
                positive
              />
            </Modal.Actions>
          </Form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};
