import React from 'react';
import liveTrackingImg from '../../../assets/live-tracking.png';
import safeDeliveryImg from '../../../assets/safe-delivery.png';

const services = [
  {
    src: liveTrackingImg,
    title: 'Live Parcel Tracking',
    subtitle:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
  },
  {
    src: safeDeliveryImg,
    title: '100% Safe Delivery',
    subtitle:
      'We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.',
  },
  {
    src: safeDeliveryImg,
    title: '24/7 Call Center Support',
    subtitle:
      'Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.',
  },
];

const HelpedServices = () => {
  return (
    <div className="mt-25 py-20 border-t border-b border-secondary border-dashed">
      <div className="grid grid-cols-1 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-2xl p-7 grid grid-cols-12 gap-x-10 items-center">
            <div className='col-span-2'>
              <img className='' src={service.src} alt="" />
            </div>

            <div className="border-l border-secondary border-dashed h-3/4 col-span-1"></div>

            <div className='col-span-9'>
              <h1 className='text-xl font-extrabold text-secondary mb-2'>{service.title}</h1>
              <p className='text-secondary'>{service.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelpedServices;
