import React from "react";
import HeroArea from "../HeroArea";
import WhyChoseUs from "../WhyChoseUs";
import Img1 from "../../assets/1.svg";
import Img2 from "../../assets/2.svg";
import Img3 from "../../assets/3.svg";
import Services from "../Services";
import HeroImg from "../../assets/hero-img.png";
import Blogs from "../Blogs";

export default function Home() {
  return (
    <>
      <div className="container">
        <HeroArea Img={HeroImg} />

        {/* Why Chose you */}
        <div className="py-8">
          <h1 className="text-center text-4xl py-4">Why You Chose Us</h1>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:gird-cols-1 gap-4">
            <WhyChoseUs
              img={Img1}
              title="Emergency Service"
              text="Lorem Ipsum is simply is very dummy text of the printings and type setting"
            />
            <WhyChoseUs
              img={Img2}
              title="Easy Appointment"
              text="Get our text demo is simply dummy text of the printings and type for content"
            />
            <WhyChoseUs
              img={Img3}
              title="24/7 Service"
              text="Lorem Ipsum is simply is very dummy text of the printings and type setting"
            />
          </div>
        </div>

        {/* Services  */}
        <div className="py-8">
          <h1 className="text-center text-4xl py-4">Our Services</h1>
          <Services />
        </div>

        {/* Blog Service */}
        <div className="py-8">
          <h1 className="text-center text-4xl py-4">Our Blogs</h1>
          <Blogs />
        </div>
      </div>
    </>
  );
}
