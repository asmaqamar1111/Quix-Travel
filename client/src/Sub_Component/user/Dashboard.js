import React from "react";
import Layout from "../../Main_Component/Layout";
import { Col, Container, Row } from "react-bootstrap";
import UserMenu from "./UserMenu";
import { useAuth } from "../../context/Author";

const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"Dashboard - BAROQUE"}>
      <div className="mt-32">
        <Container fluid className="m-3 p-3">
          <Row>
            <Col md={3}>
              <UserMenu />
            </Col>
            <Col md={9}>
              <div className="text-center  ml-64 mt-20 w-[400px] text-2xl font-bold text-black hover:drop-shadow  bg-cyan-200 rounded-lg p-3">
                <p>
                  Name:
                  <br />
                  <p className="text-lg ">{auth?.user?.name}</p>
                </p>

                <p>
                  Email:
                  <br />
                  <p className="text-lg ">{auth?.user?.email}</p>
                </p>
                <p>
                  Contact:
                  <br />
                  <p className="text-lg ">{auth?.user?.phone}</p>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

export default Dashboard;
