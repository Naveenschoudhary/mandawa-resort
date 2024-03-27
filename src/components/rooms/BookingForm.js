import React from "react";
import ReservationForm from "./Reservation";
import { Passions_Conflict } from "next/font/google";
const passions_conflict = Passions_Conflict({
  weight: "400",
  subsets: ["latin"],
});

const BookingFormComp = () => {
  return (
    <div className="bg-primary py-4 md:py-8">
      <div className="flex  flex-col md:flex-row container">
        <div className=" md:flex-1">
          <div className="pr-8">
            <h5 className={` my-4 text-4xl font-bold`}>Terms of Booking</h5>
            <p className="mr-8">
              Ad nisi voluptate officia non qui ea veniam id incididunt
              consequat elit aute labore est. Labore occaecat laborum ullamco
              culpa enim voluptate Lorem deserunt officia laborum. Incididunt
              minim adipisicing sint sunt reprehenderit ipsum. Duis enim dolor
              eiusmod sunt do laborum est exercitation ut incididunt fugiat.
            </p>
            <p>
              Ad nisi voluptate officia non qui ea veniam id incididunt
              consequat elit aute labore est. Labore occaecat laborum ullamco
              culpa enim voluptate Lorem deserunt officia laborum. Incididunt
              minim adipisicing sint sunt reprehenderit ipsum. Duis enim dolor
              eiusmod sunt do laborum est exercitation ut incididunt fugiat.
            </p>
            <h5 className="my-4 font-bold">Account Details</h5>
            <p className="mr-8 my-2">
              <b>Address :</b>Mandawa Resort, Fatehpur Road, Mandawa, District
              Jhunjhnu, Rajasthan{" "}
            </p>
            <p className="mr-8 my-2">
              <b>Phone :</b>97720 88555{" "}
            </p>
            <p className="mr-8 my-2">
              <b>Account Number :</b>0000000000 (test)
            </p>
            <p className="mr-8 my-2">
              <b>IFSC Code :</b>SBINOO16021 (test)
            </p>
            <p className="mr-8 my-2">
              <b>Account holder :</b>Mandawa Resort (test)
            </p>
            <p className="mr-8 my-2">
              <b>UPI Handle :</b>xxxx@ybl (test)
            </p>
            <p className="my-8">
              <b>Note :</b>Ad nisi voluptate officia non qui ea veniam id
              incididunt consequat elit aute labore est. Labore occaecat laborum
              ullamco culpa enim voluptate Lorem deserunt officia laborum.
              Incididunt minim adipisicing sint sunt reprehenderit ipsum. Duis
              enim dolor eiusmod sunt do laborum est exercitation ut incididunt
              fugiat.
            </p>
          </div>
        </div>
        <div className=" md:flex-1">
          <ReservationForm />
        </div>
      </div>
    </div>
  );
};

export default BookingFormComp;
