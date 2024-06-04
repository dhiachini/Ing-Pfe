import React, { useState, useEffect } from "react";
import axios from "axios";
import BreadCrumb from "../Components/Common/BreadCrumb";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Card,
  CardBody,
  Col,
  Container,
  CardHeader,
  Row,
  Input,
  Form,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Badge,
} from "reactstrap";

function DetailsDemandesCompte() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3700/api/accountrequests/${id}`)
      .then((response) => setData(response))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const openFullScreen = (imageUrl) => {
    setSelectedImage(imageUrl);
    toggleModal();
  };
  const handleAccepterAction = async () => {
    try {
      await axios.put(`http://localhost:3700/api/accountrequests/${id}/accept`);
      // Do something after accepting the request, like refreshing the data
      // You might need to fetch data again or update the state to reflect the changes
      // For example:
      // fetchData();
      // Or:
      setData({ ...data, Status: "Acceptée" });

      // Show success message
      toast.success("Demande de compte acceptée", { autoClose: 1500 });
    } catch (error) {
      console.error("Error accepting request:", error);
    }
  };

  const handleRefuserAction = async () => {
    try {
      await axios.put(`http://localhost:3700/api/accountrequests/${id}/refuse`);
      // Do something after refusing the request, like refreshing the data
      // You might need to fetch data again or update the state to reflect the changes
      // For example:
      // fetchData();
      // Or:
      setData({ ...data, Status: "Refusée" });

      // Show success message
      toast.error("Demande de compte refusée ", { autoClose: 1500 });
    } catch (error) {
      console.error("Error refusing request:", error);
    }
  };
  function getBadgeColor(status) {
    switch (status) {
      case "Refusée":
        return "danger";
      case "En attente":
        return "primary";
      case "Acceptée":
        return "success";
      default:
        return "secondary";
    }
  }

  return (
    <div className="page-content">
      <Container fluid>
        <BreadCrumb
          title="Détails demandes de compte administrateur"
          pageTitle="Liste demandes de comptes"
        />

        <Row>
          <Col lg={8}>
            <Form>
              <Card>
                <CardBody>
                  {data && Object.keys(data).length > 0 && (
                    <>
                      <div className="mb-3">
                        <Row>
                          <Col lg={6}>
                            <div className="mb-3">
                              <Label className="form-label" htmlFor="Fullname">
                                Nom complet
                              </Label>
                              <Input
                                type="text"
                                className="form-control"
                                name="Fullname"
                                value={data.Fullname || ""}
                                readOnly
                              />
                            </div>
                          </Col>
                          <Col lg={6}>
                            <div className="mb-3">
                              <Label
                                className="form-label"
                                htmlFor="Companyname"
                              >
                                Nom de la société
                              </Label>
                              <Input
                                type="text"
                                className="form-control"
                                name="Companyname"
                                value={data.Companyname || ""}
                                readOnly
                              />
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <div className="mb-3">
                        <Row>
                          <Col lg={6}>
                            <div className="mb-3">
                              <Label
                                className="form-label"
                                htmlFor="Professionalemail"
                              >
                                E-mail professionnel
                              </Label>
                              <Input
                                type="text"
                                className="form-control"
                                name="Professionalemail"
                                value={data.Professionalemail || ""}
                                readOnly
                              />
                            </div>
                          </Col>
                          <Col lg={6}>
                            <div className="mb-3">
                              <Label
                                className="form-label"
                                htmlFor="Phonenumber"
                              >
                                Téléphone
                              </Label>
                              <Input
                                type="text"
                                className="form-control"
                                name="Phonenumber"
                                value={data.Phonenumber || ""}
                                readOnly
                              />
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <div className="mb-3">
                        <Row>
                          <Col lg={6}>
                            <div className="mb-3">
                              <Label
                                className="form-label"
                                htmlFor="Websiteurl"
                              >
                                Site web
                              </Label>
                              <Input
                                type="text"
                                className="form-control"
                                name="Websiteurl"
                                value={data.Websiteurl || ""}
                                readOnly
                              />
                            </div>
                          </Col>
                          <Col lg={6}>
                            <div className="mb-3">
                              <Label className="form-label" htmlFor="Adresse">
                                Adresse
                              </Label>
                              <Input
                                type="text"
                                className="form-control"
                                name="Adresse"
                                value={data.Adresse || ""}
                                readOnly
                              />
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <div className="mb-3">
                        <Row>
                          <Col lg={6}>
                            <div className="mb-3">
                              <Label className="form-label" htmlFor="Country">
                                Pays/Ville
                              </Label>
                              <Input
                                type="text"
                                className="form-control"
                                name="Country"
                                value={data.Country || ""}
                                readOnly
                              />
                            </div>
                          </Col>
                          <Col lg={6}>
                            <div className="mb-3">
                              <Label
                                className="form-label"
                                htmlFor="Taxregistrationnumber"
                              >
                                Matricule fiscale
                              </Label>
                              <Input
                                type="text"
                                className="form-control"
                                name="Taxregistrationnumber"
                                value={data.Taxregistrationnumber || ""}
                                readOnly
                              />
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </>
                  )}
                </CardBody>
              </Card>

              <Card>
                <CardHeader>
                  <h5 className="card-title mb-0">Patente</h5>
                </CardHeader>
                <CardBody>
                  <figure className="figure mb-0">
                    <img
                      className="figure-img img-fluid rounded"
                      alt="Patente"
                      src={data.Patent}
                      onClick={() => openFullScreen(data.Patent)}
                    />
                    <figcaption className="figure-caption text-end"></figcaption>
                  </figure>
                </CardBody>
              </Card>

              <Modal isOpen={modalOpen} toggle={toggleModal} size="xl">
                <ModalHeader toggle={toggleModal}>Patente</ModalHeader>
                <ModalBody className="text-center">
                  <img
                    src={selectedImage}
                    alt="Patente"
                    className="img-fluid"
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="secondary" onClick={toggleModal}>
                    Fermer
                  </Button>
                </ModalFooter>
              </Modal>

              <div className="text-end mb-3">
                <button
                  type="button"
                  className="btn btn-success w-sm"
                  onClick={handleAccepterAction}
                >
                  Accepter
                </button>

                <button
                  type="button"
                  className="btn btn-danger w-sm ms-2"
                  onClick={handleRefuserAction}
                >
                  Refuser
                </button>
              </div>
            </Form>
          </Col>
          <Col lg={4}>
            <Card>
              <CardHeader>
                <h5 className="card-title mb-0">Etat</h5>
              </CardHeader>
              <CardBody>
                <div className="mb-3">
                  <Label
                    htmlFor="choices-publish-status-input"
                    className="form-label"
                  >
                    Status
                  </Label>
                  <div className="mb-3">
                    <Badge
                      color={getBadgeColor(data.Status)}
                      style={{ fontSize: "15px", padding: "10px" }}
                    >
                      {data.Status}
                    </Badge>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <h5 className="card-title mb-0">Date de création</h5>
              </CardHeader>
              <CardBody>
                <div>
                  <Label
                    htmlFor="datepicker-publish-input"
                    className="form-label"
                  >
                    Date et heure de publication
                  </Label>
                  <Input
                    type="text"
                    className="form-control"
                    id="datepicker-publish-input"
                    name="creationDate"
                    value={data.createdAt || ""}
                    readOnly
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default DetailsDemandesCompte;
