import React from 'react';
import { Col, Label, Input, InputGroup, Container, Row, Card, CardBody } from 'reactstrap'; // Importing required components from reactstrap
import BreadCrumb from '../Components/Common/BreadCrumb';
import UiContent from "../Components/Common/UiContent";
import PreviewCardHeader from '../Components/Common/PreviewCardHeader';
import { BrowserDefaults } from "../pages/Forms/FormValidation/FormValidationCode";
import { Link } from 'react-router-dom'; 
const AddClient = () => {
  return (

    <React.Fragment>
    <UiContent />
    <div className="page-content">
      
      <Container fluid={true}>
        <BreadCrumb title="Add new client" pageTitle="Liste Clients" />
        <Row>
          <Col lg={12}>
            <Card>
              <PreviewCardHeader title="Add new client" />
              <CardBody>

                <div className="live-preview">
                  <form className="row g-3">
                    <Col md={4}>
                      <Label for="validationDefault01" className="form-label">First name</Label>
                      <Input type="text" className="form-control" id="validationDefault01" defaultValue="Mark" required />
                    </Col>
                    <Col md={4}>
                      <Label for="validationDefault02" className="form-label">Last name</Label>
                      <Input type="text" className="form-control" id="validationDefault02" defaultValue="Otto" required />
                    </Col>
                    <Col md={4}>
                      <Label for="validationDefaultUsername" className="form-label">Username</Label>
                      <InputGroup>
                        <span className="input-group-text" id="inputGroupPrepend2">@</span>
                        <Input type="text" className="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2"
                          required />
                      </InputGroup>
                    </Col>
                    <Col md={6}>
                      <Label for="validationDefault03" className="form-label">City</Label>
                      <Input type="text" className="form-control" id="validationDefault03" required />
                    </Col>
                    <Col md={3}>
                      <Label for="validationDefault04" className="form-label">State</Label>
                      <select className="form-select" id="validationDefault04" required>
                        <option disabled defaultValue="">Choose...</option>
                        <option>...</option>
                      </select>
                    </Col>
                    <Col md={3}>
                      <Label for="validationDefault05" className="form-label">Zip</Label>
                      <Input type="text" className="form-control" id="validationDefault05" required />
                    </Col>
                    <Col xs={12}>
                      <div className="form-check">
                        <Input className="form-check-input" type="checkbox" defaultValue="" id="invalidCheck2" required />
                        <Label className="form-check-label" for="invalidCheck2">
                          Agree to terms and conditions
                        </Label>
                      </div>
                    </Col>
                    <Col xs={12}>
                    <Link to="/clients">
                          <button className="btn btn-primary" type="submit">Confirm</button>
                        </Link>
                    </Col>
                  </form>
                </div>
                <div className="d-none code-view">
                  <pre className="language-markup" style={{ "height": "352px" }}>
                    <code>
                      <BrowserDefaults />
                    </code>
                  </pre>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        </Container>
      </div>
    </React.Fragment>

  );
};

export default AddClient;
