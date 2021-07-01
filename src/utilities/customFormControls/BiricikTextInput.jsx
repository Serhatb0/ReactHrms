import React from "react";
import { useField } from "formik";
import {  Label } from "semantic-ui-react";

export default function BiricikTextInput({ ...props }) {
  const [field, meta] = useField(props);
  
  return (
    <section  error={meta.touched &&  !!meta.error}>
      <input 
      {...field} {...props} />
      {meta.touched &&  !!meta.error? (
            <Label pointing basic color="red" content={meta.error}></Label>
      ):null}
    </section>
  );
}