import React, { useEffect, useState } from "react";
import Layout from "../../Main_Component/Layout";
import { Card, Col, Container, Row } from "react-bootstrap";

import axios from "axios";
import { toast } from "react-toastify";
import { useAuth } from "../../context/Author";
import AdminMenu from "./AdminMenu";

const UsersFromAdmin = () => {
  const [Users, setUsers] = useState([]);

  //getall users
  const getUsers = async () => {
    try {
      const { data } = await axios.get(
        process.env.REACT_APP_API+"/api/v1/auth/getlogin"
      );
      setUsers(data.Users);
    } catch (error) {
      console.log(error);
      toast.error("Someething Went Wrong");
    }
  };

  //lifecycle method
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Layout title={"Dashboard - Users Profile"}>
      <div className="mt-20">
        <Container fluid className="m-3 p-3">
          <Row>
            <Col md={2}>
              <AdminMenu />
            </Col>
            <Col md={10}>
              {" "}
              <div className="p-3  mt-8">
                <div className="w-full bg-white m-auto flex  flex-col ">
                  <h1 className="text-center text-2xl font-bold">
                    USER PROFILE INFORMATION
                  </h1>

                  <table className="border w-100 mt-5 text-center mx-auto p-3">
                    <thead className=" justify-between divide-x border-b flex">
                      <th className="grow text-center  p-3 hidden md:block">
                        Name
                      </th>
                      <th className="grow text-center p-3 hidden md:block">
                        Email
                      </th>
                      <th className="grow text-center p-3 hidden md:block">
                        Phone
                      </th>
                      <th className="grow text-center p-3 hidden md:block">
                        Address
                      </th>
                      <th className="grow text-center p-3 hidden md:block">
                        Answer
                      </th>
                    </thead>
                    <tbody>
                      {Users?.map((i) => (
                        <>
                          {" "}
                          <tr className="md:flex divide-y ">
                            <td className="pb-3 col-md-4 h-16 md:flex flex-grow mt-2 mb-2 md:justify-around md:items-center">
                              <p className="text-gray-700 p-2 md:p-0 md:text-sm">
                                {i.name}
                              </p>

                              <p className="text-gray-700 p-2 md:m-4 ">
                                {i.email}
                              </p>
                              <p className="text-gray-700 p-1 md:m-4 ">
                                {i.phone}
                              </p>
                              <p className="text-gray-700 p-2 md:m-4 ">
                                {i.address}
                              </p>
                              <p className="text-gray-700 p-2 md:m-4 ">
                                {i.answer}
                              </p>
                            </td>
                          </tr>
                        </>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

export default UsersFromAdmin;
