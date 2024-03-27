import React, { useState } from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { AiOutlineSync } from "react-icons/ai";
import * as Yup from "yup"; // Import Yup

import Selectinput from "./SelectInput";
import Custominput from "./Custuminput";

const accomodation = [
  {
    key: "Standard Room",
    value: "Standard Room",
  },
];

// Define Yup schema for validation
const bookingSchema = Yup.object().shape({
  startDate: Yup.date()
    .min(new Date(), "Start date must be after today")
    .required("Start Date is required"),
  endDate: Yup.date()
    .min(Yup.ref("startDate"), "End date must be after start date")
    .required("End Date is required"),
  adults: Yup.number()
    .min(1, "At least one adult is required")
    .required("Number of adults is required"),
  children: Yup.number().required("Number of children is required"),
  department: Yup.string().required("Room selection is required"),
});

const BookingFrom = () => {
  const [loading, setLoading] = useState(false);
  const handleSubmit = (values) => {
    alert(JSON.stringify(values)); // Just for testing, replace with actual logic
  };

  return (
    <Formik
      initialValues={{
        startDate: "",
        endDate: "",
        adults: 1,
        children: 0,
        department: "", // Added department field
      }}
      validationSchema={bookingSchema} // Use the Yup schema for validation
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, values, errors }) => (
        <div className="form-group z-2">
          <Form className="form-custom" autoComplete="off">
            <Custominput
              label="Check In"
              name="startDate"
              type="date"
              placeholder="Start Date"
              className="w-full bg-primary"
            />
            <Custominput
              label="Check Out"
              name="endDate"
              type="date"
              placeholder="End Date"
              className="w-full bg-primary"
            />
            <Custominput
              label="Adults"
              name="adults"
              type="number"
              placeholder="Adults"
              className="w-full bg-primary"
            />
            <Custominput
              label="Children"
              name="children"
              type="number"
              placeholder="Children"
              className="w-full bg-primary"
            />
            <Selectinput
              label="Select Room"
              options={accomodation}
              id="department"
              name="department"
            />
            <button
              className={
                loading
                  ? "bg-accent/20 py-2 my-4 text-white flex justify-center w-full rounded-sm text-center"
                  : "py-2 my-4 bg-accent text-white text-md flex justify-center w-full rounded-sm text-center"
              }
              type="submit"
              disabled={isSubmitting}
            >
              {loading ? (
                <AiOutlineSync className="text-center animate-spin text-md" />
              ) : (
                "Add Booking"
              )}
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default BookingFrom;
