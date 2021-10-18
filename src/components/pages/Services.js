import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Services() {
  const { serviceId } = useParams();

  const [services, setServices] = useState([]);
  const [service, setService] = useState({});

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  useEffect(() => {
    const result = services.find((ser) => ser?._id === serviceId);
    setService(result);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [services]);

  return (
    <div className="container py-10">
      <div className="grid lg:grid-cols-2 gap-4  md:py-10">
        <div>
          <h2 className="lg:text-5xl md:text-4xl">WelCome to Our <span style={{color:'#0CB8B6'}}>{service?.serviceName}</span></h2>
          <h4 className="text-lg py-4">{service?.shortDescription}</h4>
          <p>
          {service?.description}
          </p>
        </div>
        <div className="pl-10">
          <img src={service?.picture} alt="" />
        </div>
      </div>
    </div>
  );
}
