import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Card,
  CardBody,
  CardHeader,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import { Link } from "react-router-dom";

const ListeDemandescompte = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    

    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3700/api/accountrequests"
      );
      console.log("API Response:", response);

      if (Array.isArray(response)) {
        console.log("API Response Data:", response);
        setData(response);
      } else {
        console.error("Response data is not an array:", response);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleAccepterAction = async (id) => {
    try {
      await axios.put(`http://localhost:3700/api/accountrequests/${id}/accept`);

      toast.success("Demande de compte acceptée", { autoClose: 1500 });
      fetchData()
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const handleRefuserAction = async (id) => {
    try {
      await axios.put(`http://localhost:3700/api/accountrequests/${id}/refuse`);

      toast.error("Demande de compte refusée ", { autoClose: 1500 });
      fetchData()
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const columns = [
    {
      name: <span className="font-weight-bold fs-13">Nom de la société</span>,
      selector: (row) => row.Companyname,
      sortable: true,
    },
    {
      name: (
        <span className="font-weight-bold fs-13">E-mail professionnel</span>
      ),
      selector: (row) => row.Professionalemail,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13">Date de création</span>,
      selector: (row) => new Date(row.createdAt).toLocaleDateString(),
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13">Status</span>,
      sortable: true,
      selector: (row) => {
        switch (row.Status) {
          case "Re-open":
            return (
              <span className="badge badge-soft-info"> {row.Status} </span>
            );
          case "En attente":
            return (
              <span className="badge badge-soft-secondary"> {row.Status} </span>
            );
          case "Refusée":
            return (
              <span className="badge badge-soft-danger"> {row.Status} </span>
            );
          case "Acceptée":
            return (
              <span className="badge badge-soft-success"> {row.Status} </span>
            );
          default:
            return (
              <span className="badge badge-soft-success"> {row.Status} </span>
            );
        }
      },
    },
    {
      name: <span className="font-weight-bold fs-13">Action</span>,
      sortable: true,
      cell: (row) => {
        return (
          <UncontrolledDropdown className="dropdown d-inline-block">
            <DropdownToggle
              className="btn btn-soft-secondary btn-sm"
              tag="button"
            >
              <i className="ri-more-fill align-middle"></i>
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-end">
              <DropdownItem className="dropdown-item">
                <Link to={`/detailsdemandecompte/${row._id}`}>
                  <i className="ri-eye-fill align-bottom me-2 text-muted"></i>{" "}
                  Visualiser
                </Link>
              </DropdownItem>
              <DropdownItem
                onClick={() => handleAccepterAction(row._id)}
                // href="/demandescompte"
              >
                <i className="ri-pencil-fill align-bottom me-2 text-muted"></i>{" "}
                Accepter
              </DropdownItem>
              <DropdownItem
                className="remove-item-btn"
                onClick={() => handleRefuserAction(row._id)}
                // href="/demandescompte"
              >
                <i className="ri-delete-bin-fill align-bottom me-2 text-muted"></i>{" "}
                Refuser
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        );
      },
    },
  ];

  document.title =
    "Liste demandes de compte administrateur || Plateforme d'échange Algéro - Tunisienne";
  return (
    <div className="page-content">
      <Card>
        <CardHeader className="d-flex justify-content-between align-items-center">
          <span>Liste demande des comptes</span>
          <div>
            <Link to="/addreclamation" className="btn btn-soft-success me-2">
              <i className="ri-add-circle-line align-middle me-1"></i> Ajouter
              demande de compte
            </Link>
          </div>
        </CardHeader>
        <CardBody>
          <DataTable columns={columns} data={data} pagination />
        </CardBody>
      </Card>
    </div>
  );
};

export default ListeDemandescompte;
