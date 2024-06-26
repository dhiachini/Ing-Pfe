import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import moment from "moment";
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
const ListeDemandes = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3700/api/demandes/all"
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

    fetchData();
  }, []);

  const columns = [
    {
      name: <span className="font-weight-bold fs-13">Create Date</span>,
      selector: (row) => moment(new Date(row.createdAt)).format("DD/MM/YYYY"),
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13">Titre</span>,
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13">Pays</span>,
      selector: (row) => row.country,
      sortable: true,
    },

    {
      name: <span className="font-weight-bold fs-13">Catégorie</span>,
      selector: (row) => row.category,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13">Type de transaction</span>,
      selector: (row) => row.transactionType,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13">Prix / Capitale</span>,
      selector: (row) => {
        return (
          <>
            <span>
              {" "}
              {row.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
            </span>
            <span> {row.country === "Tunisie" ? "TND" : "DZD"}</span>
          </>
        );
      },
      sortable: true,
    },

    {
      name: <span className="font-weight-bold fs-13">Action</span>,
      sortable: true,

      cell: () => {
        return (
          <UncontrolledDropdown className="dropdown d-inline-block">
            <DropdownToggle
              className="btn btn-soft-secondary btn-sm"
              tag="button"
            >
              <i className="ri-more-fill align-middle"></i>
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-end">
              <DropdownItem href="#">
                <i className="ri-eye-fill align-bottom me-2 text-muted"></i>View
              </DropdownItem>
              <DropdownItem className="edit-item-btn">
                <i className="ri-pencil-fill align-bottom me-2 text-muted"></i>
                Edit
              </DropdownItem>
              <DropdownItem className="remove-item-btn">
                {" "}
                <i className="ri-delete-bin-fill align-bottom me-2 text-muted"></i>{" "}
                Delete{" "}
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        );
      },
    },
  ];

  return (
    <div className="page-content">
      <Card>
        <CardHeader className="d-flex justify-content-between align-items-center">
          <span>Liste des demandes</span>
          <div>
            <Link to="/addclient" className="btn btn-soft-success me-2">
              <i className="ri-add-circle-line align-middle me-1"></i> Ajouter
              demande
            </Link>
          </div>
        </CardHeader>
        <CardBody>
          <DataTable
            columns={columns}
            data={data}
            pagination
            // highlightOnHover={true}
          />
        </CardBody>
      </Card>
    </div>
  );
};

export default ListeDemandes;
