import React from "react";
import AdminMenu from "../AdminMenu";
import { Container, Row, Col } from "react-bootstrap";
const ProductChat = () => {
  return (
    <div>
      <div className="mt-20">
        <Container fluid className="m-3 p-3">
          <Row>
            <Col md={2}>
              <AdminMenu />
            </Col>
            <Col md={10} className="flex justify-center">
              <iframe
                style={{
                  background: "#FFFFFF",
                  border: "none",
                  borderRadius: 2,
                  boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
                }}
                width={540}
                height={480}
                src="https://charts.mongodb.com/charts-baroque_database-gwsfe/embed/charts?id=645d4d96-d4d9-43f8-877f-2dd9709648fe&maxDataAge=3600&theme=light&autoRefresh=true"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ProductChat;
