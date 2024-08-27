import React from 'react';
import MapImage from '../../assets/map-icon.png';
import PhoneImage from '../../assets/ctacall2.png';
import MailImage from '../../assets/mail-icon.png';
import ClockImage from '../../assets/clock-icon.png';

const ContactDetails = () => {
  const contactItems = [
    { icon: MapImage, title: 'Visit Us', detail: 'Bengaluru,IN' },
    { icon: PhoneImage, title: 'Call Us', detail: '+91 95370 95563' },
    { icon: MailImage, title: 'Email Us', detail: 'contact@neuform.in' },
    { icon: ClockImage, title: 'Business Hours', detail: 'Mon-Sat: 8:00am - 8:00pm' },
  ];

  return (
    <section className=" text-accent_red  w-full mt-10 ">
      <div className="container mx-auto px-4 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={item.icon} alt={item.title} className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-800 font-semibold">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;