import { Link } from "react-router-dom";
import React from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";

const propertyData = [
  {
    id: 1,
    title: "Document 1",
    imageSrc: "/images/listings/list-1.jpg",
    datePublished: "December 31, 2022",
    description: "Description conseil juridique",
    status: "Pending",
  },
  {
    id: 2,
    title: "Document 2",
    imageSrc: "/images/listings/list-2.jpg",
    datePublished: "December 31, 2022",
    description: "Description conseil juridique",
    status: "Published",
  },
  {
    id: 3,
    title: "Document 3",
    imageSrc: "/images/listings/list-3.jpg",
    datePublished: "December 31, 2022",
    description: "Description conseil juridique",
    status: "Processing",
  },
];



const ConseilsjuridiqueDataTable = () => {
  return (
    <table className="table-style3 table at-savesearch">
      <thead className="t-head">
        <tr>
          <th scope="col">Titre</th>
          <th scope="col">Date de publication</th>

          <th scope="col">Description</th>
          <th scope="col">Télécharger</th>
        </tr>
      </thead>
      <tbody className="t-body">
        {propertyData.map((property) => (
          <tr key={property.id}>
            <th scope="row">
              <div className="listing-style1 dashboard-style d-xxl-flex align-items-center mb-0">
                <div className="list-thumb">
                  <img
                    className="w-100"
                    src={property.imageSrc}
                    alt="property"
                  />
                </div>
                <div className="list-content py-0 p-0 mt-2 mt-xxl-0 ps-xxl-4">
                  <div className="h6 list-title">
                    <Link to={`/single-v1/${property.id}`}>
                      {property.title}
                    </Link>
                  </div>
                  <p className="list-text mb-0">{property.location}</p>
                  <div className="list-price">
                    <a href="#">{property.price}</a>
                  </div>
                </div>
              </div>
            </th>
            <td className="vam">{property.datePublished}</td>

            <td className="vam">{property.description}</td>
            <td className="vam">
              <div className="d-flex">
                <button
                  className="icon"
                  style={{ border: "none" }}
                  data-tooltip-id={`edit-${property.id}`}
                >
                  <span className="fas fa-download fa" />
                </button>

                <ReactTooltip
                  id={`edit-${property.id}`}
                  place="top"
                  content="Edi"
                />
                <ReactTooltip
                  id={`delete-${property.id}`}
                  place="top"
                  content="Delete"
                />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ConseilsjuridiqueDataTable;
