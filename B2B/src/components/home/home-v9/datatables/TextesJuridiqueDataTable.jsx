import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Tooltip as ReactTooltip } from "react-tooltip";
import axios from "axios";
import Pagination from "@/components/property/Pagination";



const TextesJuridiqueDataTable = ({ currentPage, totalPages, handlePageClick }) => {
  const [textesJuridiques, setTextesJuridiques] = useState([]);
  const itemsPerPage = 5; // Number of items to display per page

  useEffect(() => {
    const fetchTextesJuridiques = async () => {
      try {
        const response = await axios.get(`http://localhost:3700/api/textejuridique`);
        setTextesJuridiques(response.data); // Assuming response.data is an array of objects
      } catch (error) {
        console.error("Error fetching textes juridiques:", error);
      }
    };

    fetchTextesJuridiques();
  }, [currentPage]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(); // Adjust the format as needed
  };

  const handleDownload = async (texte) => {
    try {
      const response = await axios.get(`http://localhost:3700/api/textejuridique/${texte._id}/download`);
      const fileUrl = response.data.fileUrl;

      // Open the file in a new tab
      window.open(fileUrl, "_blank");
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };

  return (
    <>
      <table className="table-style3 table at-savesearch">
        <thead className="t-head">
          <tr>
            <th scope="col">Titre</th>
            <th scope="col">Pays</th>
            <th scope="col">Date de publication</th>
            <th scope="col">Description</th>
            <th scope="col">Télécharger PDF</th>
          </tr>
        </thead>
        <tbody className="t-body">
          {textesJuridiques.map((texte) => (
            <tr key={texte._id}>
              <td>
                <div className="listing-style1 dashboard-style d-flex align-items-center mb-0">
                  <div className="list-content py-0 p-0 mt-2">
                    <div className="h6 list-title">
                      <Link to={`/single-v1/${texte._id}`}>{texte.title}</Link>
                    </div>
                    <div className="list-price">
                      <a href="#">{texte.price}</a>
                    </div>
                  </div>
                </div>
              </td>
              <td>{texte.pays}</td>
              <td>{formatDate(texte.createdAt)}</td>
              <td>{texte.description}</td>
              <td className="text-center">
                <div className="d-flex justify-content-center">
                  <button
                    className="icon"
                    style={{ border: "none" }}
                    onClick={() => handleDownload(texte)}
                    data-tooltip-id={`download-${texte._id}`}
                  >
                    <span className="fas fa-download fa" />
                  </button>
                  <ReactTooltip
                    id={`download-${texte._id}`}
                    place="top"
                    content="Télécharger PDF"
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageClick={handlePageClick}
      />
    </>
  );
};

export default TextesJuridiqueDataTable;
