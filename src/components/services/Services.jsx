import React from "react";
import ServiceItem from "./ServiceItem";
import "./service.css";

const Services = () => {
    const servicesData = [
        {
          title: "WEB DESIGNING",
          description: "Crafting visually appealing and user-friendly websites that engage and inspire users.",
          icon: "/public/web-design.png",
        },
        {
          title: "WEB DEVELOPMENT",
          description: "Building robust and scalable web applications tailored to meet your business needs.",
          icon: "/public/laptop.png",
        },
        {
          title: "RESPONSIVE DESIGN",
          description: "Ensuring seamless user experiences across all devices with adaptive and responsive designs.",
          icon: "/public/smartphone-call.png",
        },
      ];
      
  return (
    <section className="services section " id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer</span>
      <div className="services__container container grid">
      {servicesData.map((service, index) => (
          <ServiceItem
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;