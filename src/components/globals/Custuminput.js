import React from "react";
import { useField } from "formik";

const Custominput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="my-2">
      <div className="my-2 capitalize ">
        <label className="text-gray-500 ">{label}</label>
      </div>
      <input
        {...field}
        {...props}
        className={
          meta.touched && meta.error
            ? "input-error  border-red-500  focus:ring-accent font-medium bg-primary border-2 rounded-none py-2 w-full"
            : "py-3 placeholder:text-gray-300 placeholder:px-2 border border-gray-300 rounded-none px-2  w-full focus:ring-accent"
        }
      />
      {meta.touched && meta.error && (
        <div className="error text-red-500 mt-2">{meta.error}</div>
      )}
    </div>
  );
};

export default Custominput;
