import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Card } from 'react-bootstrap';
import { FaClock, FaEye } from 'react-icons/fa'; // Import clock and eye icons
import { BsStarFill } from 'react-icons/bs';
import FlutterDevelopment from '../../assets/Flutter-Development-300x225.jpg'

const Courses = ({ title, description, duration, views, stars, price, image }) => {
  return (
    <div>
        <div className="container mt-4 mb-4">
      <Row>
        <Col lg={3}>
        <div className="card-course">
        <img src={FlutterDevelopment} />
        <div className="card-body-course">
          <div>
            
          </div>
          <span className="course-title">IOS & AND </span>
          <p className="course-description">
          Flutter & Dart - The Complete Course With Projects
          </p>
          <div className="d-flex justify-content-between align-items-center mb-3 course-duration">
            <div className="d-flex align-items-center">
              <FaClock className="me-1" /> 3 Months
            </div>
            <div><span className="mx-3"><FaEye className="me-1" /> 8139</span></div>
          </div>
          <hr />
          <div className="d-flex align-items-center mb-3">
            <div className="stars">
              <BsStarFill className="me-1" />
              <BsStarFill className="me-1" />
              <BsStarFill className="me-1" />
              <BsStarFill className="me-1" />
              <BsStarFill className="me-1" />
            </div>
            <span className="ms-2">0.0</span>
          </div>
          <p className="card-text"><strong>PKR 37,000</strong></p>
        </div>
      </div>
        </Col>
      </Row>
    </div>



    <>
    <img src={image} className="card-img-top" alt="Course Image" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="d-flex align-items-center">
            <FaClock className="me-1" /> {duration}
          </div>
          <div><span className="mx-3"><FaEye className="me-1" /> {views}</span></div>
        </div>
        <hr />
        <div className="d-flex align-items-center mb-3">
          <div className="stars">
            {[...Array(stars)].map((_, index) => (
              <BsStarFill key={index} className="me-1" />
            ))}
          </div>
          <span className="ms-2">0.0</span>
        </div>
        <p className="card-text"><strong>{price}</strong></p>
      </div>
    </>
    </div>
  )
}

export default Courses