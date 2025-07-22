import React, { useEffect, useRef, useState } from 'react';
import {
  FaClock, FaLock, FaDollarSign, FaUsers,
  FaChartLine, FaCloud, FaCogs, FaHeadset
} from 'react-icons/fa';
import '../css/Cards.css';

import Service1 from '../assets/img/icon/service_1_1.svg';
import Service2 from '../assets/img/icon/service_1_2.svg';
import Service3 from '../assets/img/icon/service_1_3.svg';

const cardData = [
  {
    icon: <img src={Service1} className="icon-svg" />,
    title: 'Easy to Use',
    text: `It is Created for users who have not formal Accounting Training, so anyone who has basic computing skills can use the solution and be an expert.`,
  },
  {
    icon: <img src={Service2} className="icon-svg" />,
    title: 'Ease of Reporting',
    text: `The ability to Generate Reports as they are needed, enables you to better manage the income and expenses of your organization.`,
  },
  {
    icon: <img src={Service3} className="icon-svg" />,
    title: 'Save your Time',
    text: `Accounting need no longer take up large amount of Valuable time. This is especially important to the NPO members who must allot time for each of the many responsibilities they have.`,
  },
  {
    icon: <img src={Service1} className="icon-svg" />,
    title: 'Highly Secure',
    text: `Secure data management and retrieval. Data can only be accessed by authorized personnel using a unique id and encrypted password.`,
  },
  {
    icon: <img src={Service2} className="icon-svg" />,
    title: 'Affordable Pricing',
    text: `Acme.erp offers one of the lowest Total Cost of Ownership (TCO) and highest Return on Investment (ROI) for enterprise software in the financial sector. Our solutions and services will be affordable for colleges of any magnitude.`,
  }, {
    icon: <img src={Service3} className="icon-svg" />,
    title: 'Customer Support',
    text: `We offer 24/7 customer support to its clients. An expert team of professionals are always on call to solve all your problems as they arise.`,
  },
];

const Cards = () => {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      scrollToCard((currentIndex + 1) % cardData.length);
      setCurrentIndex((prev) => (prev + 1) % cardData.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const scrollToCard = (index) => {
    const container = scrollRef.current;
    if (container) {
      const card = container.children[index];
      const offset = card.offsetLeft - container.offsetWidth / 2 + card.offsetWidth / 2;
      container.scrollTo({
        left: offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="container py-5 cards-container">
      <div className="text-center mb-5">
        <p style={{ color: "#004868" }} className=" fw-semibold">Key Benefits of Using Acme.erp</p>
        <h2 className="fw-bold">Why Choose Acme.erp</h2>
      </div>
      <div className="cards-scroll-wrapper" ref={scrollRef}>
        {cardData.map((card, idx) => (
          <div key={idx} className="card text-center card-hover">
            <div className="card-body">
              <span className="card-icon">
                <span className="icon-inner">{card.icon}</span>
              </span>
              <h5 className="card-title fw-semibold"><span>{card.title}</span></h5>
              <p className="card-text">{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
