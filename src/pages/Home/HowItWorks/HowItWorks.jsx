import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { HiOutlineCurrencyBangladeshi } from "react-icons/hi2";

const steps = [
  {
    icon: <CiDeliveryTruck></CiDeliveryTruck>,
    title: "Booking Pick & Drop",
    subtitle:
      "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    icon: <HiOutlineCurrencyBangladeshi></HiOutlineCurrencyBangladeshi>,
    title: "Cash On Delivery",
    subtitle:
      "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    icon: <CiDeliveryTruck></CiDeliveryTruck>,
    title: "Delivery Hub",
    subtitle:
      "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    icon: <CiDeliveryTruck></CiDeliveryTruck>,
    title: "Booking SME & Corporate",
    subtitle:
      "From personal packages to business shipments — we deliver on time, every time.",
  },
];

const HowItWorks = () => {
  return (
    <div className="mt-10 p-20">
      <h3 className="text-3xl font-extrabold text-secondary">How it Works</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-7">
        {steps.map((step, index) => (
          <div key={index} className="p-6 bg-[#ffffffb3] rounded-2xl text-secondary space-y-5 ">
            <div>
              <span className="text-5xl">{step.icon}</span>
            </div>
            <h3 className="font-bold text-lg">{step.title}</h3>
            <p>{step.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
