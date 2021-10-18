import React from "react";

export default function SingleDoctor({doctor}) {
  const {name, img, designation} = doctor;
  return (
    <div>
      <div className="single-doctor">
        <div className="doctor-profile">
          <img src={img} alt="" />
        </div>
        <div className="doctor-info pt-3">
          <h3 className="text-3xl">
            {name}
          </h3>
          <span className="text-base">{designation}</span>
        </div>
      </div>
    </div>
  );
}
