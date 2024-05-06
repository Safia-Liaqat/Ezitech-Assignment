import React from 'react'
import './internship.css'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { FcBusinessman } from "react-icons/fc";
import { BiSolidMessage } from "react-icons/bi";
import WebDesign from '../../assets/web-design-511x511.png'
import Graphicdesigning from '../../assets/development-511x511 (1).png'
import DigitalMarketing from '../../assets/digital-marketing-511x511.png'
import FlutterDevelopment from '../../assets/app-development-511x511.png'
import MachineLearning from '../../assets/web-services-511x511.png'
import WebServices from '../../assets/clean-code-511x511.png'



const Internship = () => {
  return (
    <div className='coursewrapper'>
     <Container>
        <div className="text-center font-weight-bold" style={{fontWeight:'800', fontSize:'37px'}}>
            <p>Perfect Internship's For You</p>
        </div>
     <Row> 
        <Col lg={4} >
        <div className='internship-card-wrraper'>
        <div className="internship-card ">
        <div className=" d-flex flex-column ">
            <div className="card-header">
              <div className="header-body">
              <Row>
               <Col lg={8}>
                 <h3 className='course-Title'>HTML/CSS Javascript</h3>
                 <hr />
                 <p>Ezitech Institue</p>
                </Col>
                <Col lg={4}>
                    <img src={WebDesign} alt="" height={'80px'} width='100px'/>
                </Col>
               </Row>
              </div>
            </div>
            <div className="cardBody mt-3">
               <Row>
              <p> <span className='employe-icon'><FcBusinessman /></span> <span className='employment-text'>Employment-</span> <span className='employement-type'>Hybrid</span></p>
               </Row>
               <Row>
                <p><span className='location-icon'><BiSolidMessage /> </span> <span className='employment-text'> Location -</span>
               <span className='employement-type'>Rawalpindi</span></p>
               </Row>
               <Row>
                <p> <span className='location-icon'><BiSolidMessage /> </span> <span className='employment-text'> Job Type -</span>
               <span className='employement-type'>Full Time</span><span className='employement-type ms-2'>Part Time</span></p>
               </Row>
            </div>
            <div className="text-center mb-3">
                <Button className='primary'> Read More</Button>
            </div>
        </div>
        </div>
        </div>
        </Col>
        
        <Col lg={4} >
        <div className='internship-card-wrraper'>
        <div className="internship-card ">
        <div className=" d-flex flex-column ">
            <div className="card-header">
              <div className="header-body">
              <Row>
               <Col lg={8}>
                 <h3 className='course-Title'>GRAPHIC DESIGNING</h3>
                 <hr />
                 <p>Ezitech Institue</p>
                </Col>
                <Col lg={4}>
                    <img src={Graphicdesigning} alt="" height={'80px'} width='100px'/>
                </Col>
               </Row>
              </div>
            </div>
            <div className="cardBody mt-3">
               <Row>
              <p> <span className='employe-icon'><FcBusinessman /></span> <span className='employment-text'>Employment-</span> <span className='employement-type'>Hybrid</span></p>
               </Row>
               <Row>
                <p><span className='location-icon'><BiSolidMessage /> </span> <span className='employment-text'> Location -</span>
               <span className='employement-type'>Rawalpindi</span></p>
               </Row>
               <Row>
                <p> <span className='location-icon'><BiSolidMessage /> </span> <span className='employment-text'> Job Type -</span>
               <span className='employement-type'>Full Time</span><span className='employement-type ms-2'>Part Time</span></p>
               </Row>
            </div>
            <div className="text-center mb-3">
                <Button className='primary'> Read More</Button>
            </div>
        </div>
        </div>
        </div>
        </Col>
        
        <Col lg={4} >
        <div className='internship-card-wrraper'>
        <div className="internship-card ">
        <div className=" d-flex flex-column ">
            <div className="card-header">
              <div className="header-body">
              <Row>
               <Col lg={8}>
                 <h3 className='course-Title'>DIGITAL MARKETING</h3>
                 <hr />
                 <p>Ezitech Institue</p>
                </Col>
                <Col lg={4}>
                    <img src={DigitalMarketing} alt="" height={'80px'} width='100px'/>
                </Col>
               </Row>
              </div>
            </div>
            <div className="cardBody mt-3">
               <Row>
              <p> <span className='employe-icon'><FcBusinessman /></span> <span className='employment-text'>Employment-</span> <span className='employement-type'>Hybrid</span></p>
               </Row>
               <Row>
                <p><span className='location-icon'><BiSolidMessage /> </span> <span className='employment-text'> Location -</span>
               <span className='employement-type'>Rawalpindi</span></p>
               </Row>
               <Row>
                <p> <span className='location-icon'><BiSolidMessage /> </span> <span className='employment-text'> Job Type -</span>
               <span className='employement-type'>Full Time</span><span className='employement-type ms-2'>Part Time</span></p>
               </Row>
            </div>
            <div className="text-center mb-3">
                <Button className='primary'> Read More</Button>
            </div>
        </div>
        </div>
        </div>
        </Col>
        <Col lg={4} >
        <div className='internship-card-wrraper'>
        <div className="internship-card ">
        <div className=" d-flex flex-column ">
            <div className="card-header">
              <div className="header-body">
              <Row>
               <Col lg={8}>
                 <h3 className='course-Title'>FLUTTER DEVELOPMENT</h3>
                 <hr />
                 <p>Ezitech Institue</p>
                </Col>
                <Col lg={4}>
                    <img src={FlutterDevelopment} alt="" height={'80px'} width='100px'/>
                </Col>
               </Row>
              </div>
            </div>
            <div className="cardBody mt-3">
               <Row>
              <p> <span className='employe-icon'><FcBusinessman /></span> <span className='employment-text'>Employment-</span> <span className='employement-type'>Hybrid</span></p>
               </Row>
               <Row>
                <p><span className='location-icon'><BiSolidMessage /> </span> <span className='employment-text'> Location -</span>
               <span className='employement-type'>Rawalpindi</span></p>
               </Row>
               <Row>
                <p> <span className='location-icon'><BiSolidMessage /> </span> <span className='employment-text'> Job Type -</span>
               <span className='employement-type'>Full Time</span><span className='employement-type ms-2'>Part Time</span></p>
               </Row>
            </div>
            <div className="text-center mb-3">
                <Button className='primary'> Read More</Button>
            </div>
        </div>
        </div>
        </div>
        </Col>    
        
        
        <Col lg={4} >
        <div className='internship-card-wrraper'>
        <div className="internship-card ">
        <div className=" d-flex flex-column ">
            <div className="card-header">
              <div className="header-body">
              <Row>
               <Col lg={8}>
                 <h3 className='course-Title'>MACHINE LEARNING</h3>
                 <hr />
                 <p>Ezitech Institue</p>
                </Col>
                <Col lg={4}>
                    <img src={MachineLearning} alt="" height={'80px'} width='100px'/>
                </Col>
               </Row>
              </div>
            </div>
            <div className="cardBody mt-3">
               <Row>
              <p> <span className='employe-icon'><FcBusinessman /></span> <span className='employment-text'>Employment-</span> <span className='employement-type'>Hybrid</span></p>
               </Row>
               <Row>
                <p><span className='location-icon'><BiSolidMessage /> </span> <span className='employment-text'> Location -</span>
               <span className='employement-type'>Rawalpindi</span></p>
               </Row>
               <Row>
                <p> <span className='location-icon'><BiSolidMessage /> </span> <span className='employment-text'> Job Type -</span>
               <span className='employement-type'>Full Time</span><span className='employement-type ms-2'>Part Time</span></p>
               </Row>
            </div>
            <div className="text-center mb-3">
                <Button className='primary'> Read More</Button>
            </div>
        </div>
        </div>
        </div>
        </Col>    

        
        <Col lg={4} >
        <div className='internship-card-wrraper'>
        <div className="internship-card ">
        <div className=" d-flex flex-column ">
            <div className="card-header">
              <div className="header-body">
              <Row>
               <Col lg={8}>
                 <h3 className='course-Title'>MERN Development</h3>
                 <hr />
                 <p>Ezitech Institue</p>
                </Col>
                <Col lg={4}>
                    <img src={WebServices} alt="" height={'80px'} width='100px'/>
                </Col>
               </Row>
              </div>
            </div>
            <div className="cardBody mt-3">
               <Row>
              <p> <span className='employe-icon'><FcBusinessman /></span> <span className='employment-text'>Employment-</span> <span className='employement-type'>Hybrid</span></p>
               </Row>
               <Row>
                <p><span className='location-icon'><BiSolidMessage /> </span> <span className='employment-text'> Location -</span>
               <span className='employement-type'>Rawalpindi</span></p>
               </Row>
               <Row>
                <p> <span className='location-icon'><BiSolidMessage /> </span> <span className='employment-text'> Job Type -</span>
               <span className='employement-type'>Full Time</span><span className='employement-type ms-2'>Part Time</span></p>
               </Row>
            </div>
            <div className="text-center mb-3">
                <Button className='primary'> Read More</Button>
            </div>
        </div>
        </div>
        </div>
        </Col>    
        <div className='text-center mt-5 mb-5'>
          <button className='btn text-white'>Learn More</button>
        </div>
    </Row>
     </Container>
    </div>
  )
}

export default Internship