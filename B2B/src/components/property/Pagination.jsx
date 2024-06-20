import React from "react";

const Pagination = ({ currentPage, totalPages, handlePageClick }) => {
  const generatePageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5; // You can set the maximum number of page numbers to show in the pagination

    const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  const renderPageNumbers = generatePageNumbers().map((page) => (
    <li
      key={page}
      className={`page-item${page === currentPage ? " active" : ""}`}
    >
      <span
        className="page-link pointer"
        onClick={() => handlePageClick(page)}
      >
        {page}
      </span>
    </li>
  ));

  return (
    <div className="mbp_pagination text-center">
      <ul className="page_navigation">
        <li className={`page-item${currentPage === 1 ? " disabled" : ""}`}>
          <span
            className="page-link pointer"
            onClick={() => handlePageClick(currentPage - 1)}
          >
            <span className="fas fa-angle-left" />
          </span>
        </li>
        {renderPageNumbers}
        <li className={`page-item${currentPage === totalPages ? " disabled" : ""}`}>
          <span
            className="page-link pointer"
            onClick={() => handlePageClick(currentPage + 1)}
          >
            <span className="fas fa-angle-right" />
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
