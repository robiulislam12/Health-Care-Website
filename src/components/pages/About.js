import React from "react";
import HeroArea from "../HeroArea";
import AboutImg from "../../assets/about2.png";
import Doctors from "../../assets/about.png";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="container">
      <HeroArea Img={AboutImg} />
      <div className="py-8">
        <h1 className="text-center text-4xl py-4">About Us</h1>
      </div>
      <div className="grid lg:grid-cols-2 gap-4 mb-5 ">
        <div>
          <img src={Doctors} alt="" />
        </div>
        <div>
          <h2 className="text-3xl">We are very friendly</h2>
          <p className="text-base">
            Health care is the maintenance or improvement of health via the
            prevention, diagnosis, treatment, recovery, or cure of disease,
            illness, injury, and other physical and mental impairments in
            people.
          </p>
          <p className="text-base">
            Health care is delivered by health professionals and allied health
            fields. Medicine, dentistry, pharmacy, midwifery, nursing,
            optometry, audiology, psychology, occupational therapy, physical
            therapy, athletic training, and other health professions are all
            part of health care. It includes work done in providing primary
            care, secondary care, and tertiary care, as well as in public
            health.
          </p>
          <p className="text-base">
            Access to health care may vary across countries, communities, and
            individuals, influenced by social and economic conditions as well as
            health policies. Providing health care services means "the timely
            use of personal health services to achieve the best possible health
            outcomes"
          </p>
          <Link to="/doctors">
            <button className="border rounded bg-green-500 text-white text-lg px-8 py-3 hover:bg-green-700 hover:text-black">
              See All Doctors
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
