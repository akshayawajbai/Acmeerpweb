import React from "react";
import { FaLeaf, FaGem, FaRocket, FaCheck } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import bg from "../assets/img/bg/price_bg_1.jpg";
import { RiCloseCircleFill } from "react-icons/ri";
import { motion } from "framer-motion";
import "../css/Plan.css";

const containerVariants = {
  hidden: {},
  show: {}
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" } }
};

const Plan = () => {
  return (
    <>
      <div style={{ backgroundImage: `url(${bg})` }} className="pricing-container">
        <div className="container">
          <button className="yearly-toggle">
            Yearly
          </button>

          <div className="text-center mb-5">
            <div className="section-title">PRICING PLAN</div>
            <h1 className="main-title">Choose Our Plan</h1>
          </div>

          <motion.div
            className="row justify-content-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Basic Plan (left) */}
            <motion.div
              className="col-lg-4 col-md-6"
              variants={cardVariants}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
              whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(0,0,0,0.18)" }}
            >
              <div className="pricing-card text-center">
                <div className="popular-badge">FREE</div>
                <div className="plan-head">
                  {/* <FaLeaf className="card-icon" /> */}
                  <h3 className="plan-title mt-3">Basic Plan</h3>
                  <p className="plan-subtitle">Perfect plan to get started</p>
                </div>
                <div className="price">₹0</div>
                <p className="price-description">
                  A free plan grants you access to some cool features of Spend.In.
                </p>
                <ul className="feature-list">
                  <li className="feature-item">
                    <FaCheckCircle className="feature-icon" />
                    Free Online Demo
                  </li>
                  <li className="feature-item">
                    <FaCheckCircle className="feature-icon" />
                    Only Finance Module
                  </li>
                  <li className="feature-item">
                    <FaCheckCircle className="feature-icon" />
                    30 Days Trial
                  </li>
                  <li className="feature-item">
                    <RiCloseCircleFill className="feature-icon" />
                    With Head Office Features (Data Export)
                  </li>
                  <li className="feature-item">
                    <RiCloseCircleFill className="feature-icon" />
                    Free Online Support*
                  </li>
                </ul>
                <button className="btn btn-primary btn-get-plan">
                  Get Your Free Plan
                </button>
              </div>
            </motion.div>

            {/* Acmeplus Customer (center) */}
            <motion.div
              className="col-lg-4 col-md-6"
              variants={cardVariants}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0 }}
              whileHover={{ scale: 1.07, boxShadow: "0 12px 40px rgba(0,0,0,0.22)" }}
            >
              <div className="pricing-card text-center">
                <div className="popular-badge">ULTIMATE</div>
                <div className="offer">
                  <span className="popular-span" >
                    Popular
                  </span>
                </div>
                {/* <FaGem className="card-icon" /> */}
                <div className="plan-head">
                  <h3 className="plan-title mt-3">Acmeplus Customer</h3>
                  <p className="plan-subtitle">Best suits for great company!</p>
                </div>
                <div className="price">₹15,000</div>
                <p className="price-description">
                  If you a finance manager at big company, this plan is a perfect match.
                </p>
                <ul className="feature-list">
                  <li className="feature-item">
                    <FaCheckCircle className="feature-icon" />
                    20% AMC Per Year
                  </li>
                  <li className="feature-item">
                    <FaCheckCircle className="feature-icon" />
                    Free Online Demo
                  </li>
                  <li className="feature-item">
                    <FaCheckCircle className="feature-icon" />
                    Finance And Reports
                  </li>
                  <li className="feature-item">
                    <FaCheckCircle className="feature-icon" />
                    With Head Office Features (Data Export)
                  </li>
                  <li className="feature-item">
                    <FaCheckCircle className="feature-icon" />
                    Free Online Support*
                  </li>
                </ul>
                <button className="btn btn-primary btn-get-plan">
                  Get Your Free Plan
                </button>
              </div>
            </motion.div>

            {/* New Customer (right) */}
            <motion.div
              className="col-lg-4 col-md-6"
              variants={cardVariants}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
              whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(0,0,0,0.18)" }}
            >
              <div className="pricing-card text-center">
                <div className="popular-badge">PRO</div>
                {/* <FaRocket className="card-icon" /> */}
                <div className="plan-head">
                  <h3 className="plan-title mt-3">New Customer</h3>
                  <p className="plan-subtitle">Perfect plan for professionals*</p>
                </div>
                <div className="price">₹18,000</div>
                <p className="price-description">
                  For professional only! Start arranging your expenses with our ERP Solutions
                </p>
                <ul className="feature-list">
                  <li className="feature-item">
                    <FaCheckCircle className="feature-icon" />
                    20% AMC Per Year
                  </li>
                  <li className="feature-item">
                    <FaCheckCircle className="feature-icon" />
                    Free Online Demo
                  </li>
                  <li className="feature-item">
                    <FaCheckCircle className="feature-icon" />
                    Finance And Reports
                  </li>
                  <li className="feature-item">
                    <FaCheckCircle className="feature-icon" />
                    With Head Office Features (Data Export)
                  </li>
                  <li className="feature-item">
                    <FaCheckCircle className="feature-icon" />
                    Free Online Support*
                  </li>
                </ul>
                <button className="btn btn-primary btn-get-plan">
                  Get Your Free Plan
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Plan;