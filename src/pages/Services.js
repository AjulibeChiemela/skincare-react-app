import React from "react";
import { services } from "../data/data";
import "./Services.scss";

const Services = () => {
  return (
    <div>
      <div className="services">
        {services.map((service) => {
          return (
            <div key={service.id} className="service-wrap">
              <img src={service.img_url} alt={service.serviceType} />
              <h3>{service.serviceType}</h3>
              {/* <Link to={`/products/${product.id}`}>View Product</Link> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
