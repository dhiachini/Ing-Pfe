import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllFormservices, deleteFormservice } from "../../../../../Redux/Actions/formserviceActions";
import { Tooltip as ReactTooltip } from "react-tooltip";
import Pagination from "@/components/property/Pagination";

const truncateDescription = (description, maxLength) => {
  if (description.length <= maxLength) {
    return description;
  }
  return description.substring(0, maxLength) + "...";
};

const PackageDataTable = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // Number of items to display per page

  // State for delete confirmation
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [formserviceToDelete, setFormserviceToDelete] = useState(null);

  useEffect(() => {
    dispatch(fetchAllFormservices());
  }, [dispatch]);

  const formserviceData = useSelector((state) => state.formservice.formserviceDate);

  // Ensure formserviceData is an array before mapping over it
  if (!Array.isArray(formserviceData)) {
    return (
      <div className="loading-text">
        Loading... {/* Optionally, add a loading indicator */}
      </div>
    );
  }

  // Pagination calculation
  const totalPages = Math.ceil(formserviceData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = formserviceData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleDeleteConfirmation = (formserviceId) => {
    setFormserviceToDelete(formserviceId);
    setShowDeleteConfirmation(true);
  };

  const confirmDelete = () => {
    dispatch(deleteFormservice(formserviceToDelete)).then(() => {
      setShowDeleteConfirmation(false);
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

      <table className="table-style3 table">
        <thead className="t-head">
          <tr>
            <th scope="col">Type de service</th>
            <th scope="col">Lieu de la Prestation</th>
            <th scope="col">Description du Besoin</th>
            <th scope="col">Date de création</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody className="t-body">
          {currentItems.map((formservice, index) => (
            <tr key={index}>
              <td>{formservice.servicetype}</td>
              <td>{formservice.prestationadress}</td>
              <td>{truncateDescription(formservice.description, 20)}</td>
              <td>{new Date(formservice.createdAt).toLocaleDateString()}</td>
              <td>
                <div className="d-flex">
                  <button
                    className="icon"
                    style={{ border: "none" }}
                    data-tooltip-id={`delete-${index}`}
                    onClick={() => handleDeleteConfirmation(formservice._id)}
                  >
                    <span className="flaticon-bin" />
                  </button>
                  <ReactTooltip
                    id={`delete-${index}`}
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
      <div className="mt30">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageClick={handlePageClick}
        />
      </div>

      {showDeleteConfirmation && (
        <div className="popup">
          <div className="popup-content">
            <p>Êtes-vous sûr de vouloir supprimer cette fiche service ?</p>
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

export default PackageDataTable;
