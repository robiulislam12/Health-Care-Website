import React from "react";
import contact from '../../assets/contact.png';

export default function Contact() {
  return (
    <div className="container">
      <div className="py-10 w-100 grid lg:grid-cols-2 gap-4">
        <div>
          <h1 className="text-4xl mb-3">Requested to Appointment</h1>
          <form>
            <input
              type="text"
              placeholder="Name"
              className="border p-3 rounded bg-white my-2 w-100"
            />
            <br />
            <input
              type="email"
              placeholder="Email"
              required
              className="border p-3 rounded bg-white my-2 w-100"
            />
            <br />
            <input
              type="text"
              placeholder="Phone"
              req="true"
              className="border p-3 rounded bg-white my-2 w-100"
            />
            <br />
            <select required className="border p-3 rounded bg-white my-2 w-100 cursor-pointer">
              <option value="crutches">Crutches</option>
              <option value="x-ray">X-ray</option>
              <option value="pulmonary">Pulmonary</option>
              <option value="cardiology">Cardiology</option>
              <option value="dentalCare">DentalCare</option>
              <option value="neurology">Neurology</option>
            </select>
            <br />
            <textarea
              className="border p-3 rounded bg-white my-2 w-100"
              name="message"
              id="message"
              cols="4"
              rows="4"
              placeholder="Message"
            ></textarea>
            <br />
            <button
              className="submit-btn btn btn-danger btn-lg text-md mt-4"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="pl-5">
            <img src={contact} alt="" />
        </div>
      </div>
    </div>
  );
}
