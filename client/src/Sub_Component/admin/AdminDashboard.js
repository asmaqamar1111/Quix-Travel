import React from "react";
import Layout from "../../Main_Component/Layout";
import { Col, Container, Row } from "react-bootstrap";
import { useAuth } from "../../context/Author";
import AdminMenu from "./AdminMenu";
import { FiUsers } from "react-icons/fi";
import { BsBox } from "react-icons/bs";
import { RiBarChartLine } from "react-icons/ri";
import UsersChat from "./Chats/UsersChat";
import OrderTable from "./Chats/OrderTable";

const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"Admin Dashboard - BAROQUE"}>
      <div className="mt-20">
        <Container fluid className="m-3 p-3">
          <Row>
            <Col md={2}>
              <AdminMenu />
            </Col>
            <Col>
              <Row>
                <Col>
                  <div className="absolute right-10  text-center top-30 mt-12 w-[400px] text-2xl font-bold text-black hover:drop-shadow  bg-cyan-200 rounded-lg p-3">
                    <p>
                      Admin Name:
                      <br />
                      <p className="text-lg ">{auth?.user?.name}</p>
                    </p>

                    <p>
                      Admin Email:
                      <br />
                      <p className="text-lg ">{auth?.user?.email}</p>
                    </p>
                    <p>
                      Admin Contact:
                      <br />
                      <p className="text-lg ">{auth?.user?.phone}</p>
                    </p>
                  </div>
                </Col>
                <Col>
                  <p className="relative">
                    <p className="bg-cyan-200 p-4 mt-5 w-20 rounded-full hover:drop-shadow-lg cursor-pointer">
                      <FiUsers className=" text-white text-3xl z-10" />
                    </p>{" "}
                    <span className="font-bold text-lg ml-6">16%</span>
                    <p className="text-gray text-base ml-6">Users</p>
                  </p>
                  <p>
                    <p className="bg-yellow-400 p-4 w-20 rounded-full hover:drop-shadow-lg cursor-pointer">
                      <BsBox className=" text-white text-3xl z-10" />
                    </p>
                    <span className="font-bold text-lg ml-6">45%</span>
                    <p className="text-gray text-base ml-6">Products</p>
                  </p>
                  <p className="absolute top-[345px] left-[770px]">
                    <p className="bg-rose-300 p-4 w-20 rounded-full hover:drop-shadow-lg cursor-pointer">
                      <RiBarChartLine className=" text-white text-3xl z-10" />
                    </p>
                    <span className="font-bold text-lg ml-6">19%</span>
                    <p className="text-gray text-base ml-6">Orders</p>
                  </p>
                </Col>
              </Row>
              <Row className="absolute top-[180px] left-[300px]">
                <UsersChat />
              </Row>

              <div className="relative top-[100px]">
                <OrderTable />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
