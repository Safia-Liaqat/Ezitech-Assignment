import React from 'react'

const CourseCard = () => {
  return (
    <div>
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

export default CourseCard