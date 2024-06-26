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

const ListeConseils = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3700/api/conseiljuridique"
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

  const DeleteFunc = async(id) => {
    try {
      const response = await axios.delete(
        "http://localhost:3700/api/conseiljuridique/"+id
      ).then((res) => {
        fetchData();
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  } 
  useEffect(() => {
    fetchData();
  }, []);

  const columns = [
    {
      name: <span className="font-weight-bold fs-13">Date de création</span>,
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
      selector: (row) => row.pays,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13">Description</span>,
      selector: (row) => row.description,
      sortable: true,
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
              <DropdownItem href="#">
                <i className="ri-eye-fill align-bottom me-2 text-muted"></i>Visualiser
              </DropdownItem>
              <DropdownItem className="edit-item-btn">
                <i className="ri-pencil-fill align-bottom me-2 text-muted"></i>
                Modifier
              </DropdownItem>
              <DropdownItem className="remove-item-btn"  onClick={() => {DeleteFunc(row._id)}}>
                {" "}
                <i className="ri-delete-bin-fill align-bottom me-2 text-muted"></i>{" "}
                supprimer{" "}
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
          <span>Liste des conseils juridique </span>
          <div>
            <Link to="/addclient" className="btn btn-soft-success me-2">
              <i className="ri-add-circle-line align-middle me-1"></i> Ajouter
              conseil juridique
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

export default ListeConseils;
