import React from 'react';

const PagePagination = ({ peoplePerPage, totalPeople, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPeople / peoplePerPage); i++) {
    pageNumbers.push(i);
  }
  
  return (
    <div className="Pagination">
        {pageNumbers.map(number => (
          <div key={number}>
            <button onClick={() => paginate(number)} className="Pagination__button">
              {number}
            </button>
          </div>
        ))}
    </div>
  );
};

export default PagePagination;