import React from "react";
import Layout from "../../Main_Component/Layout";
import { Col, Container, Row } from "react-bootstrap";
import AdminMenu from "./AdminMenu";

const Ecommerce = () => {
  return (
    <div>
      {" "}
      <Layout title={"Dashboard - Baroque"}>
        <Container fluid className=" p-3 ">
          <Row className="mt-20">
            <Col md={2}>
              <AdminMenu />
            </Col>
            <Col md={10}></Col>
          </Row>
        </Container>
      </Layout>
    </div>
  );
};

export default Ecommerce;
