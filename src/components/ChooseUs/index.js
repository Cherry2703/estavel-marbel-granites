import React from "react";


import { FaRegAddressCard } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { GiStonePile } from "react-icons/gi";
import { IoIosHome } from "react-icons/io";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoCheckmarkDoneOutline } from "react-icons/io5";





import "./index.css";

const ChooseUs = () => {
  const features = [
    {
      title: "Rigorous Quality Control",
      description:
        "Multi-level inspections ensure every stone meets the highest durability and aesthetic standards.",
        icon:<IoCheckmarkDoneOutline/>
    },
    {
      title: "Certified Suppliers & Compliance",
      description:
        "Sourced from certified suppliers, every stone complies with global and local regulations.",
        icon:<FaRegAddressCard/>
    },
    {
      title: "Expert Guidance and Support",
      description:
        "StonePedia’s specialists provide expert advice on material selection, application, and maintenance.",
        icon:<IoMdPerson/>
    },
    {
      title: "Comprehensive High-Quality Stones",
      description:
        "Reliable, on-time delivery of stones directly to your project site, ensuring seamless logistics.",
        icon:<GiStonePile/>
    },
    {
      title: "Doorstep Delivery",
      description:
        "Reliable, on-time delivery of stones directly to your project site, ensuring seamless logistics.",
        icon:<IoIosHome/>
    },
    {
      title: "Guaranteed Order Fulfillment",
      description:
        "Accurate and timely order processing to meet all project timelines without delays.",
        icon:<IoDocumentTextOutline/>
    },
  ];

  return (
    <div className="choose-us-section">
        <h3 className="heading"><span></span>Refined Stone Sourcing<span></span></h3>
      <h2 className="choose-us-title">Why StonePedia ?</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-content-heading-icon">

                <span className="icon-feature">{feature.icon}</span>
                <h3 className="feature-title">{feature.title}</h3>

            </div>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseUs;





