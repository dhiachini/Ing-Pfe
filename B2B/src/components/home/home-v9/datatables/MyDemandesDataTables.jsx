import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOffers, deleteDemande } from "../../../../../Redux/Actions/offersActions";
import { Link } from "react-router-dom";
import { Tooltip as ReactTooltip } from "react-tooltip";
import Pagination from "@/components/property/Pagination";

const truncateDescription = (description, maxLength) => {
  if (description.length <= maxLength) {
    return description;
  }
  return description.substring(0, maxLength) + "...";
};

const MyDemandesDataTable = () => {
  useEffect(() => {
    localStorage.setItem("typeGetOne", 0);
  }, []);
  
  const dispatch = useDispatch();
  const { offers, loading, error } = useSelector((state) => state.offers);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of items to display per page

  // State for delete confirmation
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [demandeToDelete, setDemandeToDelete] = useState(null);

  useEffect(() => {
    dispatch(fetchOffers());
  }, [dispatch]);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur lors du chargement des demandes : {error}</p>;

  const maxLength = 30; // Set your desired maximum length for the description

  // Calculate pagination indexes
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = offers.slice(indexOfFirstItem, indexOfLastItem);

  // Add dateExpiration dynamically
  const offersWithExpiration = currentItems.map((property) => {
    const createdAt = new Date(property.createdAt);
    const dateExpiration = new Date(createdAt);
    dateExpiration.setDate(createdAt.getDate() + 15); // Add 15 days to createdAt
    return { ...property, dateExpiration };
  });

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const handleDeleteConfirmation = (demandeId) => {
    setDemandeToDelete(demandeId);
    setShowDeleteConfirmation(true);
  };

  const confirmDelete = () => {
    dispatch(deleteDemande(demandeToDelete)).then(() => {
      setShowDeleteConfirmation(false);
      // After deletion, fetch offers again to update the list
      dispatch(fetchOffers());
    });
  };

  const cancelDelete = () => {
    setShowDeleteConfirmation(false);
  };

  return (
    <div>
      <style>
        {`
        .popup {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 999;
        }
        
        .popup-content {
          background-color: white;
          padding: 20px;
          border-radius: 5px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
          text-align: center;
        }
        
        .popup-content p {
          margin-bottom: 20px;
        }
        
        .popup-buttons {
          display: flex;
          justify-content: space-around;
        }
        
        .popup-buttons button {
          padding: 10px 20px;
          font-size: 16px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        
        .popup-buttons .btn-danger {
          background-color: #dc3545;
          color: white;
          margin-right: 10px;
        }
        
        .popup-buttons .btn-secondary {
          background-color: #6c757d;
          color: white;
          margin-left: 10px;
        }
        `}
      </style>

      <table className="table-style3 table at-savesearch">
        <thead className="t-head">
          <tr>
            <th scope="col"></th>
            <th scope="col">Titre</th>
            <th scope="col">Description</th>
            <th scope="col">Date de publication</th>
            <th scope="col">Date d'expiration</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody className="t-body">
          {offersWithExpiration.map((property) => (
            <tr key={property._id}>
              <th scope="row">
                <div className="listing-style1 dashboard-style d-xxl-flex align-items-center mb-0">
                  <div className="list-thumb">
                    <img
                      className=""
                      src={property.images[0]} // Assuming first image in the array
                      alt="property"
                      width={100}
                    />
                  </div>
                </div>
              </th>
              <th scope="row">
                <div className="listing-style1 dashboard-style d-xxl-flex align-items-center mb-0">
                  <div className="list-content py-0 p-0 mt-2 mt-xxl-0 ">
                    <div className="h6 list-title">
                      <Link to={"/detailsoffre"}>{property.title}</Link>
                    </div>
                    <p className="list-text mb-0">{property.location}</p>
                    <div className="list-price">
                      <a href="#">{property.price}</a>
                    </div>
                  </div>
                </div>
              </th>
              <td className="vam">
                {truncateDescription(property.description, maxLength)}
              </td>
              <td className="vam">
                {new Date(property.createdAt).toLocaleDateString()}
              </td>
              <td className="vam">
                {new Date(property.dateExpiration).toLocaleDateString()}
              </td>
              <td className="vam">
                <div className="d-flex">
                  <button
                    className="icon"
                    style={{ border: "none", marginRight: "10px" }}
                    data-tooltip-id={`edit-${property._id}`}
                  >
                    <span className="fas fa-pen fa" />
                  </button>
                  <button
                    className="icon"
                    style={{ border: "none", marginLeft: "10px" }}
                    data-tooltip-id={`delete-${property._id}`}
                    onClick={() => handleDeleteConfirmation(property._id)}
                  >
                    <span className="flaticon-bin" />
                  </button>

                  <ReactTooltip
                    id={`edit-${property._id}`}
                    place="top"
                    content="Modifier"
                  />

                  <ReactTooltip
                    id={`delete-${property._id}`}
                    place="top"
                    content="Supprimer"
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination component */}
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(offers.length / itemsPerPage)}
        handlePageClick={handlePageClick}
      />

      {showDeleteConfirmation && (
        <div className="popup">
          <div className="popup-content">
            <p>Êtes-vous sûr de vouloir supprimer cette demande ?</p>
            <div className="popup-buttons">
              <button className="btn-danger" onClick={confirmDelete}>
                Supprimer
              </button>
              <button className="btn-secondary" onClick={cancelDelete}>
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyDemandesDataTable;
