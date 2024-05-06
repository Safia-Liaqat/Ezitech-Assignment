import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Logo from '../assets/EZITECH-LOGO-white.png';
import { FaRegHeart } from 'react-icons/fa';
import { IoIosSearch } from 'react-icons/io';
import EZIBLOGS from '../assets/EZIBLOGS-DG.png';
import Whiteezipos from '../assets/white-ezipos.png';
import WhiteLogo from '../assets/white-lgooo-01.png';
import { IoMdHeart } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaBehance } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { GrYoutube } from "react-icons/gr";import { IoLogoInstagram } from "react-icons/io5";


import './navbar.css';

const NavBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const [showCertifications, setShowCertifications] = useState(false);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <div>
   <div class="top-bar">
  <div class="container">
    <div class="d-flex flex-row ">
      <div class=" contact-info ms-4">
        <span ><span className='top-bar-icon'><FaPhone /> </span><span className='me-2'>+92 3455555396</span></span>
        <span><span className='top-bar-icon'><IoLocationSharp /> </span>Office #304-B Amna Plaza, Rawalpindi, Pakistan</span>
        <span > <span className='top-bar-clock-icon'><FaRegClock /></span>Mon - Fri 8.00 - 20.00</span>
      </div>
      <div class=" social-icons ms-4">
        <a href="#"><FaFacebook /></a> 
        <a href="#"><FaBehance /> </a>
        <a href="#"><IoLogoInstagram /></a>
        <a href="#"><FaLinkedinIn /></a>
        <a href="#"><GrYoutube /></a>
        <span className='ms-5'><IoPerson /> Login</span>
        <span class="divider">|</span>
        <span>Register</span>
      </div>
    </div>
  </div>
</div>

      <div className="header-container">
        <Navbar expand="lg" bg="body-tertiary" variant="light">
          <div className="container">
            <Navbar.Brand href="#">
              <img src={Logo} alt="" width="200px" height="80px" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto navbar-elements">
                <Nav.Link href="#" className='navbar-elements'>Home</Nav.Link>
                <Nav.Link href="#">About Us</Nav.Link>
                <NavDropdown title="Certifications"
                className='certifications-dropdown'
                show={showCertifications}
                onMouseEnter={() => setShowCertifications(true)}
                onMouseLeave={() => setShowCertifications(false)} >
              <NavDropdown.Item  className='nav-drodown-items' href="#">Free Courses</NavDropdown.Item>
              <NavDropdown.Item className='nav-drodown-items' href="#">Onsite Courses</NavDropdown.Item>
            </NavDropdown>
                <Nav.Link href="#">Internships</Nav.Link>
                <Nav.Link href="#">Seminars</Nav.Link>
                <Nav.Link href="#">Intern Portal</Nav.Link>
              </Nav>
              <span class="nav-divider"></span>
              <Nav>
                <span className="navbar-text">
                  <span className="heart-icon">
                    <FaRegHeart />
                  </span>
                  <span className="search-icon">
                    <IoIosSearch />
                  </span>
                </span>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
        <div class="horizontal-line"></div>
        <div className="header-body container">
          <div className="headerbody-container text-center">
            <div className="row">
              <div className="col-lg-12">
                <div>
                <h2 className='header-heading mb-4'>
                    <p className='headerHEading'>Learn the fundamentals with our</p>
                     <div className='d-flex flex-row justify-content-center'>
                     <p className='headerHEading'>Experts in</p>
                    <div className="animation  mt-3">
                      <div className="first"><div>Social Skills</div></div>
                      <div className="second"><div>Marketing</div></div>
                      <div className="third"><div>Programming</div></div>
                      <div className="third"><div>Web Design</div></div>
                    </div>
                     </div>
                  </h2>
                  <h4 className='header-description mb-4'>Utilize Effective Training To Reach Your Potential!</h4>
                </div>
                <div className='search-bar mb-4'>
                  <input
                    className='search-input'
                    type="text"
                    placeholder="Search here"
                    onChange={handleInputChange}
                    value={searchValue} />
                  <span className="searchIcon ">
                    <IoIosSearch/> {/* Assuming IoIosSearch is the icon component */}
                  </span>
                </div>
                 <div>
                  <p className='Header-sub-text'>Explore our more usefull products <span className='heartIcon ms-1'><IoMdHeart /></span></p>
                 </div>
              </div>
            </div>
            <div className=" mt-4 logos d-flex flex-row justify-content-center">
              <div className="ms-3 ">
                <img src={EZIBLOGS} alt="" height='50px' width='280px' />
              </div>
              <div className="ms-4 mt-1">
                <img src={Whiteezipos} alt=""  height='40px' width='200px'/>
              </div>
              <div className="ms-4 ">
              <img src={EZIBLOGS} alt="" height='50px' width='280px'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
