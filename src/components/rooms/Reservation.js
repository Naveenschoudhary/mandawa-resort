import React, { useEffect, useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useRouter } from "next/router";
import moment from "moment";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Dateinput from "../globals/DateInput";

const emailRegex = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);
const phoneRegex = new RegExp(/^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/);

const experiance = [
  {
    label: "Haritage Walk",
    value: "Haritage Walk",
  },
  {
    label: "Yoga and Meditation",
    value: "Yoga and Meditation",
  },
  {
    label: "Rooftop Sunset",
    value: "Rooftop Sunset",
  },
  {
    label: "Muszical Blzae Night",
    value: "Muszical Blzae Night",
  },
  {
    label: "Cooking Class",
    value: "Cooking Class",
  },
  {
    label: "Cultural gypsy Night",
    value: "Cultural gypsy Night",
  },
  {
    label: "Heena Art",
    value: "Heena Art",
  },
  {
    label: "Camel Cart Safari",
    value: "Camel Cart Safari",
  },
  {
    label: "Puppet Show",
    value: "Puppet Show",
  },
  {
    label: "Desert Sunset",
    value: "Desert Sunset",
  },
  {
    label: "Sleep Under the stars",
    value: "Sleep Under the stars",
  },
  {
    label: "Candle light rooftop dinner",
    value: "Candle light rooftop dinner",
  },
];

const ReservationForm = (props) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const animatedComponents = makeAnimated();
  const accommodationData = [
    {
      label: "Standard Rooms",
      value: "Standard Rooms",
    },
    {
      label: "Dulex Room",
      value: "Dulex Room",
    },
    {
      label: "Super Dulex Rooms",
      value: "Super Dulex Rooms",
    },
    {
      label: "Party Place",
      value: "Party Place",
    },
  ];
  const [value, setvalue] = useState(1);
  const [selectedRoom, setSelectedRoom] = useState({});
  const [date, setDate] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });
  let getNumberOfDays = moment(date.endDate).diff(
    moment(date.startDate),
    "days"
  );
  const selected = accommodationData.filter(
    (data) => data.value === router.query.roomType
  );
  const initalValue = {
    name: "",
    phoneNumber: "",
    email: "",
    message: "",
    roomType: selected ? selected : "",
    message: "",
    error: {},
  };
  const [form, setForm] = useState(initalValue);

  const calculatePrice = (value) => {
    setSelectedRoom(value);
  };
  const handleReservation = async (e) => {
    alert("Reservation");
  };
  return (
    <div className="bg-[#F9FAFB] p-8 rounded-lg">
      <form onSubmit={handleReservation}>
        <div className="-mx-2 md:items-center md:flex">
          <div className="flex-1 px-2">
            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
              First Name
            </label>
            <input
              type="text"
              placeholder="John "
              className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-none dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-accent/40 dark:focus:border-accent/40 focus:ring-accent/40 focus:outline-none focus:ring focus:ring-opacity-40"
              // required={true}
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value, error: {} })
              }
            />
            <div className="text-red-700 py-2  text-md font-normal">
              {form.error && form.error.name && form.error.name}
            </div>
          </div>
          {/* 
          <div className="flex-1 px-2 mt-4 md:mt-0">
            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Doe"
              className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-none dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-accent/40 dark:focus:border-accent/40 focus:ring-accent/40 focus:outline-none focus:ring focus:ring-opacity-40"
              required={true}
            />
          </div> */}
        </div>

        <div className="mt-4">
          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
            Email address ( Your booking details are mailed here )
          </label>
          <input
            type="text"
            placeholder="johndoe@example.com"
            className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-none dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-accent/40 dark:focus:border-accent/40 focus:ring-accent/40 focus:outline-none focus:ring focus:ring-opacity-40"
            // required={true}
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value, error: {} })
            }
          />
          <div className="text-red-700 py-2  text-md font-normal">
            {form.error && form.error.email && form.error.email}
          </div>
        </div>
        <div className="mt-4">
          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
            Phone Number
          </label>
          <input
            type="text"
            placeholder="+919521434232"
            className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-none dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-accent/40 dark:focus:border-accent/40 focus:ring-accent/40 focus:outline-none focus:ring focus:ring-opacity-40"
            value={form.phoneNumber}
            onChange={(e) =>
              setForm({ ...form, phoneNumber: e.target.value, error: {} })
            }
          />
          <div className="text-red-700 py-2  text-md font-normal">
            {form.error && form.error.phoneNumber && form.error.phoneNumber}
          </div>
        </div>
        <div className="mt-4">
          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
            Reservation Dates
          </label>
          <Dateinput
            setValue={setvalue}
            date={date}
            setDate={setDate}
            label="Check Out"
            class=" z-1000 "
            style={{ padding: "0px", width: "100%" }}
          />
          <div className="text-red-700 py-2  text-md font-normal">
            {form.error && form.error.startDate && form.error.startDate}
          </div>
        </div>
        <div className="mt-4">
          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
            Room Type
          </label>
          <Select
            components={animatedComponents}
            classNamePrefix="react-select"
            options={accommodationData}
            // defaultValue={selected}
            value={form.roomType}
            onChange={(value) => {
              calculatePrice(value);
              setForm({ ...form, roomType: value, error: {} });
            }}
          />
          <div className="text-red-700 py-2  text-md font-normal">
            {form.error && form.error.roomType && form.error.roomType}
          </div>
        </div>
        {/* <div className="mt-4">
          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
            Experiances
          </label>
          <Select
            // closeMenuOnSelect={false}
            components={animatedComponents}
            classNamePrefix="react-select"
            // defaultValue={[colourOptions[4], colourOptions[5]]}
            isMulti
            options={experiance}
            onChange={(value) => {
              setForm({ ...form, experiance: value });
            }}
          />
        </div> */}
        <div className="w-full mt-4">
          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
            Message
          </label>
          <textarea
            className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-none md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-accent/40 dark:focus:border-accent/40 focus:ring-accent/40 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          ></textarea>
        </div>
        {selectedRoom && selectedRoom.title && (
          <div className="flex justify-between text-md py-4 bg-white my-4 px-2">
            <div>{selectedRoom.title}</div>
            <div className="flex gap-2">
              <span>{getNumberOfDays}</span>X<span>{selectedRoom.price}</span>
            </div>
            <div>{Number(selectedRoom.price) * getNumberOfDays}</div>
          </div>
        )}

        <button
          type="submit"
          className={`${
            Object.keys(form.error).length === 0 ? `bg-accent/50` : "bg-accent"
          } w-full  px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform text-accent/50 rounded-none hover:bg-accent/60 hover:text-white focus:outline-none focus:ring focus:ring-accent/30 focus:ring-opacity-50`}
          disabled={Object.keys(form.error).length !== 0}
        >
          {loading ? (
            <AiOutlineLoading3Quarters className="animate-spin" />
          ) : (
            "Request Reservation"
          )}
        </button>
      </form>
    </div>
  );
};

export default ReservationForm;
