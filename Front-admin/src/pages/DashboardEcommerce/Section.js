import React from 'react';
import { Col, Row } from 'reactstrap';
import Flatpickr from "react-flatpickr";

const Section = () => {

    const sidebar = () => {
        const element = document.getElementById("layout-rightside-coll");
        element.classList.toggle("d-none");
    };

    return (
        <React.Fragment>
            <Row className="mb-3 pb-1">
                <Col xs={12}>
                    <div className="d-flex align-items-lg-center flex-lg-row flex-column">
                        <div className="flex-grow-1">
                            <h4 className="fs-16 mb-1">Bonjour, administrateur !</h4>
                            <p className="text-muted mb-0">Voici ce qui se passe avec votre plateforme aujourd'hui.</p>
                        </div>
                        <div className="mt-3 mt-lg-0">
                            <form action="#">
                                
                            </form>
                        </div>
                    </div>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Section;