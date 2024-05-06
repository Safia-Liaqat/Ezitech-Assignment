import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Card } from 'react-bootstrap';
import presidentImage from '../../assets/President-of-pakistan-259x299.png'
import AIImage from '../../assets/artificial-intelligence-3-69x69.png'
import BlockChain from '../../assets/blockchain-69x69.png'
import Amazon from '../../assets/aaaa-69x69.png'
import CyberSecurity from '../../assets/cccccc-69x69.png'
import Development from '../../assets/ffff-69x69.png'
import Designing from '../../assets/www-69x69.png'
import Animations from '../../assets/animation-68x68.png'
import ThreeD from '../../assets/3d-68x68.png'
import Marketing from '../../assets/social-media-1-63x63.png'
import IOS from '../../assets/aaaaaaaaaaaaaaaaaaaaaa-69x69.png'
import Architecture from '../../assets/ssss-69x69.png'
import Gaming from '../../assets/vvvv-69x69.png'
import PhoneCopy from '../../assets/phone-copy.webp'
import Appstore from '../../assets/appstore-copy.webp'
import PlaystoreLogo from '../../assets/1664287128google-play-store-logo-png.webp'
import StartLearning from '../../assets/startlearning.png'
import SignUp from '../../assets/signup.jpg'
import Selectcourse from '../../assets/selectcourse.jpg'


import './content.css'
import Courses from '../courses/Courses';
import Internship from '../internships/Internship';


const Content = () => {
  return (
    <div className='main-content'>
         <Container className='award-section'>
  <div className='heading'>
    <h2 className='text-center'>Best IT Services Award 2023</h2>
  </div>
  <Row className="">
    <Col lg={4} xs={12} className=" mb-3 mb-lg-0" >
      <img src={presidentImage} alt="" className="img-fluid"  width={'100%'} height='450px'/>
    </Col>
    <Col>
      <div className='paragraph'>
      <p className=''>
        <span className='bold-text'>Ezitech Is affiliated With </span>.  <a href='#'> Eziline Software House</a> Eziline has been awarded the prestigious Best
        Software House in IT sector award by the President of Pakistan. This is an incredible achievement 
        and a testament to the hard work and dedication of the entire team at Eziline Software House. 
        The award is a great recognition of the company’s achievements in the field of IT and serves as a 
        major milestone in its journey towards success.
      </p>
      <p>
        This award is a huge source of motivation and inspiration for the entire team at Eziline Software House. 
        <span className='bold-text'> It is a validation of the company’s commitment to innovation, excellence, and customer satisfaction.</span> The award acknowledges the hard work and dedication of every member of the team who has contributed to the success of the company.
      </p>

      <p>
        <span className='bold-text'>Ismail Shah, the CEO of Eziline Software House Pvt Ltd</span>, received the Best Services Award in the IT sector from the President of Pakistan, Dr. Arif Alvi, in recognition of his remarkable contributions to the country’s technology industry.
      </p>

      <div>       
      <Button variant="primary" className='btn'>Eziline Profile</Button>
      </div>
      </div>
      
    </Col>
  </Row>
</Container>


    <Container className='container'>
            <div className=''>
            <p className='text-center heading'>
            How it works?
            </p>
            </div>     
            <div className="course-section-body">
            <Row >
        <Col lg={4} >
        <div className="text-center">
        <div className=" d-flex flex-column align-items-center">
          <img src={SignUp }  className="card-img-to" style={{ width: '200px', height: '150px', objectFit: 'cover' }} />
           <div className='text-details mt-4'>
           <h5 className="courseTitle ">Sign up</h5>
          <p>Enter your name, email, and contact details to get started. It truly is that simple!</p>
           </div>
          </div>
        </div>
        </Col>
        <Col lg={4} >
        <div className="text-center">
        <div className="d-flex flex-column align-items-center">
          <img src={ Selectcourse} className="card-img-top" alt="Your Image" style={{ width: '290px', height: '150px', objectFit: 'cover' }} />
          <div className='text-details mt-4'>
          <h5 className="courseTitle ">Select course</h5>
          <p>Browse our extensive and ever-expanding variety of courses for professional development.</p>
          </div>
          </div>
        </div>
        </Col>
        <Col lg={4}>
        <div className="text-center">
        <div className=" d-flex flex-column align-items-center">
          <img src={ StartLearning} className="card-img-top" alt="Your Image" style={{ width: '250px', height: '170px', objectFit: 'cover' }} />
           <div className="text-details mt-2">
           <h5 className="courseTitle ">Start Learning</h5>
          <p>Do the tasks, and your teacher will evaluate them before providing you with thorough</p>
           </div>
          </div>
        </div>
        </Col>
      </Row>
            </div>
    </Container>




    <Container className='container'>
            <div className='heading'>
            <h2 className='text-center'>
            What new trends and technology will you discover?
            </h2>
            </div>
            <p>
            Today's technology is developing quickly, and our new technological trends are enabling and advancing, speeding up the pace of development.
            </p>
            
      <Row >
        <Col lg={2} xs={6} md={4} sm={6}>
        <div className="card text-center">
        <div className="card-body d-flex flex-column align-items-center">
          <img src={ AIImage} className="card-img-top" alt="Your Image" style={{ width: '90px', height: '90px', objectFit: 'cover' }} />
          <h5 className="card-title mt-4">ML & AI</h5>
        </div>
        </div>
        </Col>
        <Col lg={2} xs={6} md={4} sm={6}>
        <div className="card text-center">
        <div className="card-body d-flex flex-column align-items-center">
          <img src={ BlockChain} className="card-img-top" alt="Your Image" style={{ width: '90px', height: '90px', objectFit: 'cover' }} />
          <h5 className="card-title mt-4">Block Chain</h5>
        </div>
        </div>
        </Col>
        <Col lg={2} xs={6} md={4} sm={6}>
        <div className="card text-center">
        <div className="card-body d-flex flex-column align-items-center">
          <img src={ Amazon} className="card-img-top" alt="Your Image" style={{ width: '90px', height: '90px', objectFit: 'cover' }} />
          <h5 className="card-title mt-4">Amazon</h5>
        </div>
        </div>
        </Col>
        <Col lg={2} xs={6} md={4} sm={6}>
        <div className="card text-center">
        <div className="card-body d-flex flex-column align-items-center">
          <img src={ CyberSecurity} className="card-img-top" alt="Your Image" style={{ width: '90px', height: '90px', objectFit: 'cover' }} />
          <h5 className="card-title mt-4">Cyber Security</h5>
        </div>
        </div>
        </Col>
        <Col lg={2} xs={6} md={4} sm={6}>
        <div className="card text-center">
        <div className="card-body d-flex flex-column align-items-center">
          <img src={ Development} className="card-img-top" alt="Your Image" style={{ width: '90px', height: '90px', objectFit: 'cover' }} />
          <h5 className="card-title mt-4">Development</h5>
        </div>
        </div>
        </Col>
        <Col lg={2} xs={6} md={4} sm={6}>
        <div className="card text-center">
        <div className="card-body d-flex flex-column align-items-center">
          <img src={ Designing} className="card-img-top" alt="Your Image" style={{ width: '90px', height: '90px', objectFit: 'cover' }} />
          <h5 className="card-title mt-4">Designing</h5>
        </div>
        </div>
        </Col>
      </Row>

      <Row className='mt-4'>
        <Col lg={2} xs={6} md={4}>
        <div className="card text-center">
        <div className="card-body d-flex flex-column align-items-center">
          <img src={ Gaming} className="card-img-top" alt="Your Image" style={{ width: '90px', height: '90px', objectFit: 'cover' }} />
          <h5 className="card-title mt-4">Gaming</h5>
        </div>
        </div>
        </Col>
        <Col lg={2} xs={6} md={4}>
        <div className="card text-center">
        <div className="card-body d-flex flex-column align-items-center">
          <img src={ Architecture} className="card-img-top" alt="Your Image" style={{ width: '90px', height: '90px', objectFit: 'cover' }} />
          <h5 className="card-title mt-4">Architecture</h5>
        </div>
        </div>
        </Col>
        <Col lg={2} xs={6} md={4}>
        <div className="card text-center">
        <div className="card-body d-flex flex-column align-items-center">
          <img src={ IOS} className="card-img-top" alt="Your Image" style={{ width: '90px', height: '90px', objectFit: 'cover' }} />
          <h5 className="card-title mt-4">IOS & AND</h5>
        </div>
        </div>
        </Col>
        <Col lg={2} xs={6} md={4}>
        <div className="card text-center">
        <div className="card-body d-flex flex-column align-items-center">
          <img src={ Marketing} className="card-img-top" alt="Your Image" style={{ width: '90px', height: '90px', objectFit: 'cover' }} />
          <h5 className="card-title mt-4">Marketing</h5>
        </div>
        </div>
        </Col>
        <Col lg={2} xs={6} md={4}>
        <div className="card text-center">
        <div className="card-body d-flex flex-column align-items-center">
          <img src={ ThreeD} className="card-img-top" alt="Your Image" style={{ width: '90px', height: '90px', objectFit: 'cover' }} />
          <h5 className="card-title mt-4">3D</h5>
        </div>
        </div>
        </Col>
        <Col lg={2} xs={6} md={4}>
        <div className="card text-center">
        <div className="card-body d-flex flex-column align-items-center">
          <img src={ Animations} className="card-img-top" alt="Your Image" style={{ width: '90px', height: '90px', objectFit: 'cover' }} />
          <h5 className="card-title mt-4">Animations</h5>
        </div>
        </div>
        </Col>
      </Row>

    </Container>

   <Internship/>





  <Container >
  <Row>
    <Col lg={6}>
      <div className="container-circle mt-4" >
        <div className="circle"></div>
        <div className="content">
          <img src={PhoneCopy} alt="" width={'550px'}  height={'880px'}/>
        </div>
      </div>
    </Col>
    <Col className='theme-punch ms-4'>
    <div className='theme-punchheading'>    
    <p>Learning  <span style={{color:'rgb(61, 118, 210)'}}>anytime</span> from anywhere</p>
    </div>
    <div className='themepunch-description'>
      <p>Increase the mobility level with Eziline Technology as LMS APP. Take your courses in your pocket
       and access them whenever you want without any limits. Make your  learning more engaging and productive using modern
       LMS app.
      </p>

       <div className='mt-5'>
       <div>
       <img src={Appstore} alt="" height='70px' />
        <img src={PlaystoreLogo} alt="" height={'70px'} width={'220px'} className='ms-4'/>
       </div>
       </div>
    </div>

    </Col>
  </Row>
</Container>

    </div>
  )
}

export default Content