import React from 'react';
import Link from 'next/link';

const Contact = () => {
  return (   
      <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">

        <div className="section-header">
          <h2>Contact</h2>
          <p>Need Help? <span>Contact Us</span></p>
        </div>

        <div className="row gy-4">

          <div className="col-md-6">
            <div className="info-item  d-flex align-items-center">
              <i className="icon bi bi-map flex-shrink-0"></i>
              <div>
                <h3>Our Address</h3>
                <p>Nii Kplen 4 Street Adenta</p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="info-item d-flex align-items-center">
              <i className="icon bi bi-envelope flex-shrink-0"></i>
              <div>
                <h3>Email Us</h3>
                <p>makufoodsgh@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="info-item  d-flex align-items-center">
              <i className="icon bi bi-telephone flex-shrink-0"></i>
              <div>
                <h3>Call Us</h3>
                <p>+233 501 231 858</p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="info-item  d-flex align-items-center">
              <i className="icon bi bi-share flex-shrink-0"></i>
              <div>
                <h3>Opening Hours</h3>
                <div><strong>Mon-Sat:</strong> 08AM - 20PM;
                  <strong>Sunday:</strong> Closed
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact


