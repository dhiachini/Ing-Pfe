import { Link } from "react-router-dom";
import React from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";

const propertyData = [
  {
    id: 1,
    title: "Offre 1",
    imageSrc: "/images/listings/list-1.jpg",
    datePublished: "December 31, 2022",
    dateExipartion: "November 1, 2024",
    description: "Description offre",
    status: "Pending",
  },
  {
    id: 2,
    title: "Offre 2",
    imageSrc: "/images/listings/list-2.jpg",
    datePublished: "December 31, 2022",
    dateExipartion: "November 1, 2024",
    description: "Description offre",
    status: "Published",
  },
  {
    id: 3,
    title: "Offre 3",
    imageSrc: "/images/listings/list-3.jpg",
    datePublished: "December 31, 2022",
    dateExipartion: "November 1, 2024",
    description: "Description offre",
    status: "Processing",
  },
];

const MyoffresDataTable = () => {
  return (
    <table className="table-style3 table at-savesearch">
      <thead className="t-head">
        <tr>
          <th scope="col">Titre</th>
          <th scope="col">Date de publication</th>
          <th scope="col">Description</th>
          <th scope="col">Date d'expiration</th>
          <th scope="col">Action</th>
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
                    <Link to={'/detailsoffre'}>
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

            <td className="vam">{property.dateExipartion}</td>
            <td className="vam">
              <div className="d-flex">
                <button
                  className="icon"
                  style={{ border: "none" }}
                  data-tooltip-id={`edit-${property.id}`}
                >
                  <span className="fas fa-pen fa" />
                </button>
                <button
                  className="icon"
                  style={{ border: "none" }}
                  data-tooltip-id={`delete-${property.id}`}
                >
                  <span className="flaticon-bin" />
                </button>

                <ReactTooltip
                  id={`edit-${property.id}`}
                  place="top"
                  content="Modifier"
                />

                <ReactTooltip
                  id={`delete-${property.id}`}
                  place="top"
                  content="Supprimer"
                />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MyoffresDataTable;
