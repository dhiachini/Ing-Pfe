import React, { useState } from "react";
import {
  Card,
  CardBody,
  Col,
  Container,
  Row,
  CardHeader,
  Collapse,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import classnames from "classnames";
import BreadCrumb from "../Components/Common/BreadCrumb";
import { Link } from "react-router-dom";
import avatar3 from "../assets/images/users/avatar-3.jpg";

const ProjectDetails = (props) => {
  const [col1, setCol1] = useState(true);
  const [col2, setCol2] = useState(true);
  const [col3, setCol3] = useState(true);
  const [col4, setCol4] = useState(true);
  const [modal, setModal] = useState(false); // State for modal

  const toggleCol1 = () => setCol1(!col1);
  const toggleCol2 = () => setCol2(!col2);
  const toggleCol3 = () => setCol3(!col3);
  const toggleCol4 = () => setCol4(!col4);

  const toggleModal = () => setModal(!modal); // Function to toggle the modal

  document.title = "Project Details | Velzon - React Admin & Dashboard Template";
  
  return (
    <div className="page-content">
      <Container fluid>
        <BreadCrumb title="Project Details" pageTitle="Liste Client" />

        <Row>
          <Col xl={9}>
            <Card>
              <CardHeader>
                <div className="d-flex align-items-center">
                  <h5 className="card-title flex-grow-1 mb-0">Client ID #VL2667</h5>
                  <div className="flex-shrink-0">
                    <Link to="/apps-invoices-details" className="btn btn-success btn-sm">
                      <i className="ri-download-2-fill align-middle me-1"></i> Invoice
                    </Link>
                  </div>
                </div>
              </CardHeader>
             
              {/* Add more content related to Project Details */}
            </Card>

            <Card>
              <CardHeader>
                <div className="d-sm-flex align-items-center">
                  <h5 className="card-title flex-grow-1 mb-0">Project Status</h5>
                  <div className="flex-shrink-0 mt-2 mt-sm-0">
                    <Button color="primary" onClick={toggleModal}>
                      Add Project to client
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                <div className="profile-timeline">
                  <div className="accordion accordion-flush" id="projectStatusAccordion">
                    <div className="accordion-item border-0" onClick={toggleCol1}>
                      <div className="accordion-header" id="statusHeadingOne">
                        <Link
                          to="#"
                          className={classnames(
                            "accordion-button",
                            "p-2",
                            "shadow-none",
                            { collapsed: !col1 }
                          )}
                        >
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0 avatar-xs">
                              <div className="avatar-title bg-success rounded-circle">
                                <i className="ri-shopping-bag-line"></i>
                              </div>
                            </div>
                            <div className="flex-grow-1 ms-3">
                              <h6 className="fs-15 mb-0 fw-semibold">
                                Order Placed - <span className="fw-normal">Wed, 15 Dec 2021</span>
                              </h6>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <Collapse
                        id="statusCollapseOne"
                        className="accordion-collapse"
                        isOpen={col1}
                      >
                        <div className="accordion-body ms-2 ps-5 pt-0">
                          <h6 className="mb-1">An order has been placed.</h6>
                          <p className="text-muted">Wed, 15 Dec 2021 - 05:34PM</p>
                          <h6 className="mb-1">Seller has processed your order.</h6>
                          <p className="text-muted mb-0">Thu, 16 Dec 2021 - 5:48AM</p>
                        </div>
                      </Collapse>
                    </div>
                    <div className="accordion-item border-0" onClick={toggleCol2}>
                      <div className="accordion-header" id="statusHeadingTwo">
                        <Link
                          to="#"
                          className={classnames(
                            "accordion-button",
                            "p-2",
                            "shadow-none",
                            { collapsed: !col2 }
                          )}
                          href="#statusCollapseTwo"
                        >
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0 avatar-xs">
                              <div className="avatar-title bg-success rounded-circle">
                                <i className="mdi mdi-gift-outline"></i>
                              </div>
                            </div>
                            <div className="flex-grow-1 ms-3">
                              <h6 className="fs-15 mb-1 fw-semibold">
                                Packed - <span className="fw-normal">Thu, 16 Dec 2021</span>
                              </h6>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <Collapse
                        id="statusCollapseTwo"
                        className="accordion-collapse"
                        isOpen={col2}
                      >
                        <div className="accordion-body ms-2 ps-5 pt-0">
                          <h6 className="mb-1">Your item has been picked up by the courier partner.</h6>
                          <p className="text-muted mb-0">Fri, 17 Dec 2021 - 9:45AM</p>
                        </div>
                      </Collapse>
                    </div>
                    <div className="accordion-item border-0" onClick={toggleCol3}>
                      <div className="accordion-header" id="statusHeadingThree">
                        <Link
                          to="#"
                          className={classnames(
                            "accordion-button",
                            "p-2",
                            "shadow-none",
                            { collapsed: !col3 }
                          )}
                          href="#statusCollapseThree"
                        >
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0 avatar-xs">
                              <div className="avatar-title bg-success rounded-circle">
                                <i className="ri-truck-line"></i>
                              </div>
                            </div>
                            <div className="flex-grow-1 ms-3">
                              <h6 className="fs-15 mb-1 fw-semibold">
                                Shipping - <span className="fw-normal">Thu, 16 Dec 2021</span>
                              </h6>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <Collapse
                        id="statusCollapseThree"
                        className="accordion-collapse"
                        isOpen={col3}
                      >
                        <div className="accordion-body ms-2 ps-5 pt-0">
                          <h6 className="fs-14">RQK Logistics - MFDS1400457854</h6>
                          <h6 className="mb-1">Your item has been shipped.</h6>
                          <p className="text-muted mb-0">Sat, 18 Dec 2021 - 4.54PM</p>
                        </div>
                      </Collapse>
                    </div>
                    <div className="accordion-item border-0" onClick={toggleCol4}>
                      <div className="accordion-header" id="statusHeadingFour">
                        <Link
                          to="#"
                          className="accordion-button p-2 shadow-none"
                        >
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0 avatar-xs">
                              <div className="avatar-title bg-light text-success rounded-circle">
                                <i className="ri-takeaway-fill"></i>
                              </div>
                            </div>
                            <div className="flex-grow-1 ms-3">
                              <h6 className="fs-14 mb-0 fw-semibold">
                                Out For Delivery -{" "}
                                <span className="fw-normal">Fri, 24 Dec 2021</span>
                              </h6>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="accordion-item border-0">
                      <div className="accordion-header" id="statusHeadingFive">
                        <Link
                          className="accordion-button p-2 shadow-none"
                          to="#"
                        >
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0 avatar-xs">
                              <div className="avatar-title bg-light text-success rounded-circle">
                                <i className="mdi mdi-package-variant"></i>
                              </div>
                            </div>
                            <div className="flex-grow-1 ms-3">
                              <h6 className="fs-14 mb-0 fw-semibold">
                                Delivered -{" "}
                                <span className="fw-normal">Sat, 25 Dec 2021</span>
                              </h6>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col xl={3}>
            <Card>
              <CardHeader>
                <div className="d-flex">
                  <h5 className="card-title flex-grow-1 mb-0">
                    Client Details
                  </h5>
                  <div className="flex-shrink-0">
                    <Link to="#" className="link-secondary">
                      View Profile
                    </Link>
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                <ul className="list-unstyled mb-0 vstack gap-3">
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0">
                        <img
                          src={avatar3}
                          alt=""
                          className="avatar-sm rounded"
                        />
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h6 className="fs-14 mb-1">Joseph Parkers</h6>
                        <p className="text-muted mb-0">Customer</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <i className="ri-mail-line me-2 align-middle text-muted fs-16"></i>
                    josephparker@gmail.com
                  </li>
                  <li>
                    <i className="ri-phone-line me-2 align-middle text-muted fs-16"></i>
                    +(256) 245451 441
                  </li>
                </ul>
              </CardBody>
            </Card>
            
            <Card>
              {/* Add Billing Address content */}
            </Card>
            
            <Card>
              {/* Add Payment Details content */}
            </Card>
          </Col>
        </Row>
      </Container>

      {/* The Modal Pop-up */}
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Add Project</ModalHeader>
        <ModalBody>
          {/* Add your form or content for adding a project here */}
          {/* For example, you can have form fields for project details */}
          <form>
            <div className="mb-3">
              <label htmlFor="projectName" className="form-label">Project Name</label>
              <input type="text" className="form-control" id="projectName" />
            </div>
            {/* Add more form fields as needed */}
            <div className="mb-3">
              <label htmlFor="projectName" className="form-label">ID client</label>
              <input type="text" className="form-control" id="projectName" />
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggleModal}>Save Project</Button>{' '}
          <Button color="secondary" onClick={toggleModal}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ProjectDetails;
