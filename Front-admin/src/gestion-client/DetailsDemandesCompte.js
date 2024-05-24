import React, { useState, useEffect } from "react";
import axios from "axios";
import BreadCrumb from "../Components/Common/BreadCrumb";
import { useParams } from "react-router-dom";
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
} from "reactstrap";

function DetailsDemandesCompte() {
  const { id } = useParams();

  const [formValues, setFormValues] = useState({});

  useEffect(() => {
    axios.get(`api/accountrequests/${id}`).then((res) => {
      setFormValues(res.data);
      // console.log(res.data);
    });
  }, []);

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
                            value={formValues.Fullname}
                          />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="mb-3">
                          <Label className="form-label" htmlFor="Companyname">
                            Nom de la société
                          </Label>
                          <Input
                            type="text"
                            className="form-control"
                            name="Companyname"
                            value={formValues.Companyname}
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
                            value={formValues.Professionalemail}
                          />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="mb-3">
                          <Label className="form-label" htmlFor="Phonenumber">
                            Téléphone
                          </Label>
                          <Input
                            type="text"
                            className="form-control"
                            name="Phonenumber"
                            value={formValues.Phonenumber}
                          />
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div className="mb-3">
                    <Row>
                      <Col lg={6}>
                        <div className="mb-3">
                          <Label className="form-label" htmlFor="Websiteurl">
                            Site web
                          </Label>
                          <Input
                            type="text"
                            className="form-control"
                            name="website"
                            value={formValues.Websiteurl}
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
                            value={formValues.Adresse}
                          />
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div className="mb-3">
                    <Row>
                      <Col lg={6}>
                        <div className="mb-3">
                          <Label className="form-label" htmlFor="City">
                            Pays/Ville
                          </Label>
                          <Input
                            type="text"
                            className="form-control"
                            name="City"
                            value={formValues.City}
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
                            value={formValues.Taxregistrationnumber}
                          />
                        </div>
                      </Col>
                    </Row>
                  </div>
                </CardBody>
              </Card>

              <Card>
                <CardHeader>
                  <h5 className="card-title mb-0">Patente</h5>
                </CardHeader>
                <CardBody>
                  <figure className="figure">
                    <img className="figure-img img-fluid rounded" alt="..." />
                    <figcaption className="figure-caption"></figcaption>
                  </figure>

                  <figure className="figure mb-0">
                    <img className="figure-img img-fluid rounded" alt="..." />
                    <figcaption className="figure-caption text-end"></figcaption>
                  </figure>
                </CardBody>
              </Card>

              <div className="text-end mb-3">
                <button type="submit" className="btn btn-success w-sm">
                  Accepter
                </button>

                <button type="button" className="btn btn-danger w-sm ms-2">
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
                  <Input
                    type="text"
                    className="form-control"
                    id="choices-publish-status-input"
                    name="status"
                    defaultValue={formValues.status}
                  />
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
                    defaultValue={formValues.creationDate}
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
