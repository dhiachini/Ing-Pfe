import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  Card,
  CardBody,
  Col,
  Container,
  Row,
  Input,
  Form,
  Label,
  CardHeader,
} from "reactstrap";
import BreadCrumb from "../Components/Common/BreadCrumb";
import moment from "moment";

function DetailsFicheservice() {
  const { id } = useParams();
  const [formData, setFormData] = useState({});
  const [formUser, setFormUser] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3700/api/formservices/${id}/user`)
      .then((response) => setFormUser(response))
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });

    axios
      .get(`http://localhost:3700/api/formserviceswithoutauth/${id}`)
      .then((response) => setFormData(response))
      .catch((error) => {
        console.error("Error fetching form data:", error);
      });
  }, [id]);

  return (
    <div className="page-content">
      <Container fluid>
        <BreadCrumb
          title="Détails fiche service"
          pageTitle="Liste fiches service"
        />
        <Row>
          <Col lg={8}>
            <Form>
              <Card>
                <CardBody>
                  <div className="mb-3">
                    <Row>
                      <Col lg={12}>
                        <Label className="form-label" htmlFor="Title">
                          Titre
                        </Label>
                        <Input
                          type="text"
                          className="form-control"
                          name="Title"
                          value={formData ? formData.title : ""}
                          readOnly
                        />
                      </Col>
                    </Row>
                  </div>
                  <div className="mb-3">
                    <Row>
                      <Col lg={12}>
                        <Label className="form-label" htmlFor="ServiceType">
                          Type de service
                        </Label>
                        <Input
                          type="text"
                          className="form-control"
                          name="ServiceType"
                          value={formData ? formData.servicetype : ""}
                          readOnly
                        />
                      </Col>
                    </Row>
                  </div>
                  <div className="mb-3">
                    <Row>
                      <Col lg={12}>
                        <Label
                          className="form-label"
                          htmlFor="PrestationAddress"
                        >
                          Adresse de prestation
                        </Label>
                        <Input
                          type="text"
                          className="form-control"
                          name="PrestationAddress"
                          value={formData ? formData.prestationadress : ""}
                          readOnly
                        />
                      </Col>
                    </Row>
                  </div>
                  <div className="mb-3">
                    <Row>
                      <Col lg={12}>
                        <Label className="form-label" htmlFor="Description">
                          Description
                        </Label>
                        <Input
                          type="textarea"
                          className="form-control"
                          name="Description"
                          value={formData ? formData.description : ""}
                          readOnly
                        />
                      </Col>
                    </Row>
                  </div>
                </CardBody>
              </Card>
            </Form>
          </Col>
          <Col lg={4}>
            <Card>
              <CardHeader>
                <h5 className="card-title mb-0">Envoyer par :</h5>
              </CardHeader>
              <CardBody>
                <div className="mb-3">
                  <Row>
                    <Col lg={6}>
                      <Label className="form-label" htmlFor="Fullname">
                        Nom complet
                      </Label>
                      <Input
                        type="text"
                        className="form-control"
                        name="Fullname"
                        value={formUser ? formUser.Fullname : ""}
                        readOnly
                      />
                    </Col>
                    <Col lg={6}>
                      <Label className="form-label" htmlFor="Companyname">
                        Nom de la société
                      </Label>
                      <Input
                        type="text"
                        className="form-control"
                        name="Companyname"
                        value={formUser ? formUser.Companyname : ""}
                        readOnly
                      />
                    </Col>
                  </Row>
                </div>
                <div className="mb-3">
                  <Row>
                    <Col lg={6}>
                      <Label className="form-label" htmlFor="Professionalemail">
                        E-mail professionnel
                      </Label>
                      <Input
                        type="text"
                        className="form-control"
                        name="Professionalemail"
                        value={formUser ? formUser.Professionalemail : ""}
                        readOnly
                      />
                    </Col>
                    <Col lg={6}>
                      <Label className="form-label" htmlFor="Phonenumber">
                        Téléphone
                      </Label>
                      <Input
                        type="text"
                        className="form-control"
                        name="Phonenumber"
                        value={
                          formUser
                            ? `${formUser.Telephonecode} ${formUser.Phonenumber}`
                            : ""
                        }
                        readOnly
                      />
                    </Col>
                  </Row>
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
                    value={
                      formData
                        ? moment(formData.createdAt).format(
                            "DD/MM/YYYY/  HH:MM"
                          )
                        : ""
                    }
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

export default DetailsFicheservice;
