import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './footer.css'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import FooterImage from '../assets/8-3-1441x555-copy-1438x554.webp'
import ArbitrageLogo from '../assets/shutterstock_1936430215-_FILEminimizer_-75x75.webp'
import IllustratorLogo from '../assets/5167842_cafe-75x75.webp'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaBehance } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='mt-4'>
        <footer className="footer bottom">
      <div className='text-center footer-heading'>
        <p>It's time to <span style={{color:'#4f78f8'}}>start</span> investing in <br/> yourself</p>
      </div>
      <footer className="footer">
      <div className="container">
        <div className="row mb-4">
          <img src={FooterImage} alt="" />
        </div>
        <div className="row mt-5" >
          <div className="col-md-3">
            <h4>ABOUT</h4>
            <p className='mt-4'>Ezitech Institute provides a platform for newcomers to launch their IT and freelancing careers. Our emphasis on practical information technology courses that are career and work oriented makes us the top computer institute in Rawalpindi, Islamabad, Pakistan.</p>
          </div>
          <div className="col-md-3">
            <h4>POPULAR COURSES</h4>
            <div className="row mt-4 footer-course-text">
              <div className="col-md-3"><img src={ArbitrageLogo} alt="" height='60px' width='60px' /></div>
              <div className="col-md-9">
              <a href='#'>Online Arbitrage <span>Mastermind 2.0 [R...</span>  </a>
              <p className='instructor-name mt-1'>By Hussain Ali</p>
              </div>
            </div>
            <div className="row mt-3 footer-course-text">
              <div className="col-md-3"><img src={IllustratorLogo} alt="" height='60px' width='60px' /></div>
              <div className="col-md-9">
              <a href='#'>Adobe Illustrator Course with with Proj... </a>
              <p className='instructor-name mt-1'>By Ayesha Shah</p>
              </div>
            </div>
          </div>

          <div className="col-md-2">
            <h4>PAGES</h4>
            <ul className='mt-4'>
              <li className='mb-3'>CONTACT US</li>
              <li className='mb-3'>SHOP</li>
              <li className='mb-3'>INTERNSHIP</li>
              <li className='mb-3'>CODELAB</li>
            </ul>
          </div>
          <div className="col-md-3">
          <h4>Contact </h4>
            <div className="row mt-3">
              <div className="col-md-3 footer-icons"><FaLocationDot /></div>
              <div className="col-md-9">
                <p className='mt-2'>Office #304-B Amna Plaza, near Radio Pakistan, Rawalpindi, Punjab 46000</p>
              </div>
            </div>

            <div className="row">
              <div className="col-md-3 footer-icon-phone"><FaPhone /> </div>
              <div className="col-md-9">
                <p className='mt-2'>+1234567890</p>
              </div>
            </div>

            <div className="row ">
              <div className="col-md-3 footer-icons"><IoMdMail /></div>
              <div className="col-md-9">
                <p className='mt-2'>info@ezitech.org</p>
              </div>
            </div>
          </div>

          
        </div>

        <div className="row text-center mt-5">
          <p>Copyright © 2024 Ezitech Institute | Design & Develop by <a href="#" className='text-white'>Eziline Software House</a></p>
        </div>
        <div className="d-flex flex-row g-5 p-5 footer-icons flex-row-reverse">
        <div className='ms-4'><a href="#"><FaLinkedinIn /></a></div>
         <div className='ms-4'><a href="#"><FaBehance /></a></div>
          <div className='ms-4'><a href="#"><FaFacebook /></a></div>
          

        </div>
      </div>
    </footer>
    </footer>
    </div>
  )
}

export default Footer