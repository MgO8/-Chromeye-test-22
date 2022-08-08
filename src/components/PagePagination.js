import React from 'react';

const PagePagination = ({ peoplePerPage, totalPeople, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPeople / peoplePerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="Pagination">
      {pageNumbers.map(number => {
        // currentpage button style 
        let className = 'Pagination__button';
        if (currentPage === number) {
          className += '-active';
        }
        return (
          <div key={number}>
            <button onClick={() => paginate(number)} className={className}>
              {number}
            </button>
          </div>
        )
      })}
    </div>
  );
};

export default PagePagination;