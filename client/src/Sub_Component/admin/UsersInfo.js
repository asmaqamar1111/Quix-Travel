import React, { useState, useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import AdminMenu from "./AdminMenu";
import axios from "axios";
import { useAuth } from "../../context/Author";
import moment from "moment";
import { Select } from "antd";
import Layout from "../../Main_Component/Layout";
import { toast } from "react-toastify";
const { Option } = Select;

const UserInfo = () => {
  const [checkForm, setCheckForm] = useState([]);

  //getall users
  const getCheckForm = async () => {
    try {
      const { data } = await axios.get(
        process.env.REACT_APP_API+"/api/v1/checkForm/get-checkForm"
      );
      setCheckForm(data.checkForm);
    } catch (error) {
      console.log(error);
      toast.error("Someething Went Wrong");
    }
  };

  //lifecycle method
  useEffect(() => {
    getCheckForm();
  }, []);
  let t = 1;
  return (
    <div>
      <Layout title={"Dashboard - Orders"}>
        <Container fluid className=" p-3 ">
          <Row className="mt-20">
            <Col md={2}>
              <AdminMenu />
            </Col>
            <Col md={9}>
              <h1 className="text-center text-2xl font-bold">
                Checkout Page Info
              </h1>
              <table className="border w-100 mt-5 text-center mx-auto p-3">
                <thead className=" justify-between divide-x border-b flex">
                  <th className="grow text-center  p-3 hidden md:block">#</th>
                  <th className="grow text-center  p-3 hidden md:block">
                    Firstname
                  </th>
                  <th className="grow text-center p-3 hidden md:block">
                    Lastname
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
                  <th className="grow text-center p-3 hidden md:block">City</th>
                  <th className="grow text-center p-3 hidden md:block">
                    Postal
                  </th>
                </thead>
                <tbody>
                  {checkForm?.map((i) => (
                    <>
                      {" "}
                      <tr className="md:flex divide-y ">
                        <td className="pb-3 col-md-4 h-16 md:flex flex-grow mt-2 mb-2 md:justify-around md:items-center">
                          {t++}
                          <p className="text-gray-700 p-2 md:m-4 md:text-sm">
                            {i.firstname}
                          </p>

                          <p className="text-gray-700 p-2 md:m-4 ">
                            {i.lastname}
                          </p>
                          <p className="text-gray-700 p-2 md:m-4 ">{i.email}</p>
                          <p className="text-gray-700 p-2 md:m-4 ">{i.phone}</p>
                          <p className="text-gray-700 p-2 md:m-4 ">
                            {i.address}
                          </p>
                          <p className="text-gray-700 p-2 md:m-4 ">{i.city}</p>
                          <p className="text-gray-700 p-2 md:m-4 ">
                            {i.postalcode}
                          </p>
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </Col>
          </Row>
        </Container>
      </Layout>
    </div>
  );
};

export default UserInfo;
