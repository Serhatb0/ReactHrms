import React from "react";
import { useField } from "formik";
import { Label } from "semantic-ui-react";
export default function BiricikSelectInput({ ...props }) {
  const [field, meta] = useField(props);
  return (
    <div>
      <section error={meta.touched && !!meta.error}>
        <select {...field} {...props} ></select>
        {meta.touched && !!meta.error ? (
          <Label pointing basic color="red" content={meta.error}></Label>
        ) : null}
      </section>
    </div>
  );
}
