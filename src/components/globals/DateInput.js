import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

const Dateinput = (props) => {
  const handleValueChange = (newValue) => {
    props.setDate(newValue);
  };
  const blockedDates = ["2023-06-01", "2023-06-02", "2023-06-04"];
  const filterDate = (date) => {
    const formattedDate = date.toISOString().split("T")[0];
    return !blockedDates.includes(formattedDate);
  };
  return (
    <div className="w-full border-none ">
      <Datepicker
        minDate={new Date()}
        containerClassName="px-0 w-full"
        inputClassName={
          "${props.class} block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-none dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-accent/40 dark:focus:border-accent/40 focus:ring-accent/40 focus:outline-none focus:ring focus:ring-opacity-40"
        }
        primaryColor={"yellow"}
        value={props.date}
        onChange={handleValueChange}
        disabledDates={[
          {
            startDate: "2023-05-01",
            endDate: "2023-05-05",
          },
          {
            startDate: "2023-05-21",
            endDate: "2023-05-26",
          },
        ]}
      />
    </div>
  );
};

export default Dateinput;
