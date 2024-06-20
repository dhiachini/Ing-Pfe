import React from "react";

const PaginationTwo = ({ pageNumber, setPageNumber, data, pageCapacity }) => {
  const handlePrevious = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const handleNext = () => {
    if (pageNumber < Math.ceil(data.length / pageCapacity)) {
      setPageNumber(pageNumber + 1);
    }
  };

  return (
    <div className="mbp_pagination text-center">
      <ul className="page_navigation">
        <li className="page-item">
          <span className="page-link pointer" onClick={handlePrevious}>
            <span className="fas fa-angle-left" />
          </span>
        </li>
        {Array.from(
          { length: Math.ceil(data.length / pageCapacity) },
          (_, index) => (
            <li
              key={index + 1}
              onClick={() => setPageNumber(index + 1)}
              className={
                pageNumber === index + 1 ? "active page-item" : "page-item"
              }
            >
              <span className="page-link pointer">{index + 1}</span>
            </li>
          )
        )}
        <li className="page-item pointer">
          <span className="page-link" onClick={handleNext}>
            <span className="fas fa-angle-right" />
          </span>
        </li>
      </ul>
      <p className="mt10 pagination_page_count text-center">
        {(pageNumber - 1) * pageCapacity + 1}-
        {pageNumber * pageCapacity > data.length
          ? data.length
          : pageNumber * pageCapacity}
        de {data.length} annonces disponibles
      </p>
    </div>
  );
};

export default PaginationTwo;
