import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../css/Contact.css';

const EMAIL_TIMEOUT_MS = 60 * 60 * 1000; 


const getSubmittedEmails = () => {
  const stored = localStorage.getItem('submittedEmails');
  return stored ? JSON.parse(stored) : [];
};

const cleanupOldEmails = () => {
  const now = Date.now();
  const validEmails = getSubmittedEmails().filter(
    (entry) => now - entry.timestamp < EMAIL_TIMEOUT_MS
  );
  localStorage.setItem('submittedEmails', JSON.stringify(validEmails));
  return validEmails;
};

const isEmailAlreadySubmitted = (email) => {
  const emails = cleanupOldEmails();
  return emails.some((entry) => entry.email === email);
};

const saveSubmittedEmail = (email) => {
  const emails = cleanupOldEmails();
  emails.push({ email, timestamp: Date.now() });
  localStorage.setItem('submittedEmails', JSON.stringify(emails));
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateName = (name) => name.trim() !== '';
  const validateOrganization = (org) => org.trim() !== '';
  const validateEmail = (email) => /^\S+@\S+\.\S+$/.test(email);
  const validatePhone = (phone) => /^[+\d]?(?:[\d\s-]{9,14}\d)$/.test(phone.trim());
  const validateMessage = (message) => message.trim() !== '';

  const validateForm = () => {
    const newErrors = {};
    if (!validateName(formData.name)) newErrors.name = 'Name is required';
    if (!validateOrganization(formData.organization)) newErrors.organization = 'Organization is required';
    if (!validateEmail(formData.email)) newErrors.email = 'Invalid email address';
    if (!validatePhone(formData.phone)) newErrors.phone = 'Invalid phone number';
    if (!validateMessage(formData.message)) newErrors.message = 'Message cannot be empty';
    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setErrors((prev) => ({ ...prev, [name]: '' }));
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    if (isEmailAlreadySubmitted(formData.email)) {
      toast.warn(' This email has already submitted a message. Please wait. The ACME team will call you shortly..', {
        position: "top-center",
        autoClose: 4000
      });
      return;
    }

    setIsSubmitting(true);

 emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  {
    to_email: 'acmeerp@boscosofttech.com',
    cc_email: 'Alex@boscosofttech.com',
    bcc_email: 'joeni@boscosofttech.com,chinna@boscosofttech.com,bharathwaj050@gmail.com',
    name: formData.name,
    organization: formData.organization,
    email: formData.email,
    phone: formData.phone,
    message: formData.message
  },
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
)


a
      .then(() => {
        toast.success(' Thank you! Your message has been sent.', {
          position: "top-center",
          autoClose: 3000
        });
        saveSubmittedEmail(formData.email);
        setFormData({
          name: '',
          organization: '',
          email: '',
          phone: '',
          message: ''
        });
        setErrors({});
      })
      .catch(() => {
        toast.error(' Oops! Something went wrong. Please try again.', {
          position: "top-center",
          autoClose: 4000
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <>
      <ToastContainer />
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        rel="stylesheet"
      />

      <div className="container-fluid py-5" style={{ minHeight: '100vh' }}>
        <div className="container">
          <div className="contact-header">
            <p className="contact-subtitle">Contact with us!</p>
          </div>

          <div className="row mb-5">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="contact-card h-100">
                <div className="contact-icon"><i className="fas fa-map-marker-alt"></i></div>
                <h3 className="contact-title">Our Office Address</h3>
                <div className="contact-info">
                  <strong>Bosco Soft Technologies Pvt.Ltd.</strong><br />
                  231/77, SHC Complex, Vaniyambadi Road, Tirupattur<br />
                  Tirupattur Dist - 635 601, Tamil Nadu, India.
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="contact-card h-100">
                <div className="contact-icon"><i className="fas fa-phone"></i></div>
                <h3 className="contact-title">Call Us Anytime</h3>
                <div className="contact-info">
                  <strong>Ph.: +91 96 26 800 800</strong>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="contact-card h-100">
                <div className="contact-icon"><i className="fas fa-envelope"></i></div>
                <h3 className="contact-title">Send An Email</h3>
                <div className="contact-info">
                  <strong>acmeerp@boscosofttech.com</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="row contact-bg">
            <div className="col-lg-8">
              <div className="trial-section position-relative">
                <h2 className="trial-title">Join now for a free trial</h2>
                <form onSubmit={handleSubmit} noValidate>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="input-group">
                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                        <input
                          type="text"
                          className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                          placeholder="Your Name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="input-group">
                        <span className="input-group-text"><i className="fas fa-building"></i></span>
                        <input
                          type="text"
                          className={`form-control ${errors.organization ? 'is-invalid' : ''}`}
                          placeholder="Organization Name"
                          name="organization"
                          value={formData.organization}
                          onChange={handleInputChange}
                          required
                        />
                        {errors.organization && <div className="invalid-feedback">{errors.organization}</div>}
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="input-group">
                        <span className="input-group-text"><i className="fas fa-envelope"></i></span>
                        <input
                          type="email"
                          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                          placeholder="Email Address"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="input-group">
                        <span className="input-group-text"><i className="fas fa-phone"></i></span>
                        <input
                          type="tel"
                          className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                          placeholder="Phone Number"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                        />
                        {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="input-group">
                      <span className="input-group-text"><i className="fas fa-comment"></i></span>
                      <textarea
                        className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                        rows="4"
                        placeholder="Your Message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      ></textarea>
                      {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                    </div>
                  </div>

                  <button type="submit" className="btn btn-send" disabled={isSubmitting}>
                    <i className="fas fa-paper-plane me-2"></i>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="map-container mt-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.165905176398!2d78.6327365!3d12.5861156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3badaaea950786f3%3A0x5f3b489cca9a30a2!2sBosco%20Soft%20Technologies%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1720502076000!5m2!1sen!2sin&maptype=satellite"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bosco Soft Technologies Location"
              style={{ width: '100%', height: '400px', border: '0' }}
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
