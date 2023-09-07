import React from "react";
import AdminMenu from "../AdminMenu";
import { Container, Row, Col } from "react-bootstrap";

const CategoryChat = () => {
  return (
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
              height={380}
              src="https://charts.mongodb.com/charts-baroque_database-gwsfe/embed/charts?id=645d401e-6e2f-4684-8ea5-41609fd3925a&maxDataAge=3600&theme=light&autoRefresh=true"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CategoryChat;
