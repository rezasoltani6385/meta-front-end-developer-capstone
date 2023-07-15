import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faPinterest } from '@fortawesome/free-brands-svg-icons'

import logo from './icons_assets/Logo .svg'

function Footer() {
  return (
    <>
      <footer className="text-center text-lg-start bg-light text-muted">
        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 d-flex align-items-center">
                <img src={logo} alt='Logo'/>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  Doormat Navigation
                </h6>
                <p>
                  <a href="#" className="text-reset">Home</a>
                </p>
                <p>
                  <a href="#" className="text-reset">About</a>
                </p>
                <p>
                  <a href="#" className="text-reset">Menu</a>
                </p>
                <p>
                  <a href="#" className="text-reset">Reservations</a>
                </p>
                <p>
                  <a href="#" className="text-reset">Order Online</a>
                </p>
                <p>
                  <a href="#" className="text-reset">Login</a>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p><i className="fas fa-home me-3"></i> New York, NY, US</p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  info@example.com
                </p>
                <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
                <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Social Media Links</h6>
                <a href='#'  className="text-reset" style={{marginRight: '2%'}}>
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href='#'  className="text-reset" style={{marginRight: '2%'}}>
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href='#'  className="text-reset" style={{marginRight: '2%'}}>
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href='#'  className="text-reset" style={{marginRight: '2%'}}>
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href='#'  className="text-reset" style={{marginRight: '2%'}}>
                  <FontAwesomeIcon icon={faPinterest} />
                </a>
              </div>
            </div>
          </div>
        </section>
        <div className="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.05);"}}>
          © 2023 Copyright:
          <a className="text-reset fw-bold" href="https://www.linkedin.com/in/rezasoltani6385/">Reza Soltani</a>
        </div>
      </footer>
    </>
  )
}

export default Footer
