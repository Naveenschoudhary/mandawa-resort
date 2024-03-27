import React from "react";
import { Field, useField } from "formik";

const Selectinput = ({ label, options, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="my-2">
      <div className="my-2 font-helveticaregular capitalize ">
        <label>{label}</label>
      </div>
      <Field
        as="select"
        {...props}
        className={
          meta.touched && meta.error
            ? "input-error  border-red focus:ring-accent bg-primary border-2 rounded-sm py-2 w-full"
            : "py-2 border  rounded-sm px-2 w-full"
        }
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.key}
          </option>
        ))}
      </Field>
      {meta.touched && meta.error && (
        <div className="error text-red-500">{meta.error}</div>
      )}
    </div>
  );
};

export default Selectinput;
