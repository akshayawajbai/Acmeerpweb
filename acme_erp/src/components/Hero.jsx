import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import { motion } from 'framer-motion';
import hero from '../assets/img/hero/acount1.png';
import { useNavigate } from 'react-router-dom';
import '../css/Hero.css';

const Hero = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="hero-section">
      <div className="container-fluid">
        <div className="row px-5 align-items-center min-vh-100 py-5">
          {/* Left Content */}
          <div className="col-lg-7 col-md-12 pe-lg-5">
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                className="welcome-tag mb-3"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Welcome to Acme.erp
              </motion.div>

              <motion.h1
                className="hero-title mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
              >
                Simplify Accounting for
                <br />
                <span style={{ color: "#004867" }}>Purpose-Driven</span>
                <br />
                Organizations
              </motion.h1>

              <motion.p
                className="hero-description mb-5"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.7 }}
              >
                Acme.erp is an easy-to-use accounting software built for NGOs, non-profits, and religious
                institutions. Manage your finances clearly, save time, and stay focused on your mission.
              </motion.p>

              <motion.div
                className="hero-buttons align-items-center d-flex flex-wrap gap-3"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                <motion.button
                  className="btn btn-primary btn-trial"
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => navigate('/contact')}
                >
                  Free Trial
                </motion.button>
                <motion.button
                  className="btn btn-demo d-flex"
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setShowModal(true)}
                >
                  <motion.div
                    className="play-icon me-2 align-items-center"
                    style={{ animation: 'pulsePlay 1.2s infinite' }}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 1.2 }}
                  >
                    <FaPlay size={12} />
                  </motion.div>
                  Watch Demo Video
                </motion.button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Illustration */}
          <div className="col-lg-5">
            <div className="d-flex justify-content-center">
              <motion.img
                src={hero}
                alt="Accounting Illustration"
                className="hero-image"
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="hero-bg-elements">
        <motion.div className="floating-circle circle-1" animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} />
        <motion.div className="floating-circle circle-2" animate={{ y: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }} />
        <div className="circle-3"></div>
        <div className="square-1"></div>
        <motion.div className="ring-2" animate={{ rotate: [0, 360] }} transition={{ repeat: Infinity, duration: 12, ease: "linear" }} />
        <motion.div className="ring-1" animate={{ rotate: [0, -360] }} transition={{ repeat: Infinity, duration: 18, ease: "linear" }} />
        <div className="bg-wave"></div>
        <div className="bg-gradient-circle"></div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={() => setShowModal(false)}>✖</button>
            <div className="video-placeholder">
              <p>Demo video</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
