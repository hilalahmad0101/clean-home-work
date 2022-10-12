import React from "react";
import { Col, Row } from "react-bootstrap";
import SiiderBar from "../MyAccount/SiderBar";

import "../MyAccount/MyAccount.css";

import Helping from "./Helping";


const HelpServices = () => {
  return (
    <>
      <div className="acount-wrapper">
        <div className="container">
          <Row className="m-0 p-0">
            <Col xl={4} lg={4} className="hide">
              <SiiderBar />
            </Col>

            <Col xl={8} lg={12} md={12}>
              <Helping/>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default HelpServices;
