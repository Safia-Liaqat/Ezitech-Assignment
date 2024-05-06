import React from 'react'
import Courses from './Courses';

const CoursePagination = ({cards}) => {
    const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 5; // Display 5 cards per page

  // Calculate indexes for pagination
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  // Handle page navigation
  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);
  const goToPage = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="container">
      <div className="row">
        {currentCards.map((card, index) => (
          <div className="col-md-4" key={index}>
            <Courses {...card}  />
          </div>
        ))}
      </div>
      <nav aria-label="Page navigation">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button className="page-link" onClick={prevPage}>Previous</button>
          </li>
          {Array.from({ length: Math.ceil(cards.length / cardsPerPage) }).map((_, index) => (
            <li className={`page-item ${currentPage === index + 1 ? 'active' : ''}`} key={index}>
              <button className="page-link" onClick={() => goToPage(index + 1)}>{index + 1}</button>
            </li>
          ))}
          <li className={`page-item ${currentPage === Math.ceil(cards.length / cardsPerPage) ? 'disabled' : ''}`}>
            <button className="page-link" onClick={nextPage}>Next</button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default CoursePagination