import React from "react";
import serviceImg from "../../../assets/service.png";

const services = [
  {
    id: 1,
    image: serviceImg,
    title: "Express  & Standard Delivery",
    subtitle:
      "We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4-6 hours from pick-up to drop-off.",
    isActive: false,
  },
  {
    id: 2,
    image: serviceImg,
    title: "Nationwide Delivery",
    subtitle:
      "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48-72 hours.",
    isActive: true,
  },
  {
    id: 3,
    image: serviceImg,
    title: "Fulfillment Solution",
    subtitle:
      "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    isActive: false,
  },
  {
    id: 4,
    image: serviceImg,
    title: "Cash on Home Delivery",
    subtitle:
      "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    isActive: false,
  },
  {
    id: 5,
    image: serviceImg,
    title: "Corporate Service / Contract In Logistics",
    subtitle:
      "Customized corporate services which includes warehouse and inventory management support.",
    isActive: false,
  },
  {
    id: 6,
    image: serviceImg,
    title: "Parcel Return",
    subtitle:
      "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    isActive: false,
  },
];

const OurServices = () => {
  return (
    <div className="mt-10 p-20 bg-secondary rounded-3xl">
      <div className="space-y-2 max-w-2xl mx-auto text-center">
        <h3 className="text-3xl font-extrabold text-white">Our Services</h3>
        <p className="text-white/50">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-7">
        {services.map((service) => (
          <div className={`p-7 text-center text-secondary ${service.isActive ? 'bg-primary': 'bg-white'} rounded-2xl space-y-5`}>
            <div className="flex justify-center">
              <img src={serviceImg} alt="" />
            </div>
            <h3 className="font-bold text-xl">{service.title}</h3>
            <p className="text-[#606060]">{service.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
