import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import UserMenu from "./UserMenu";
import Layout from "../../Main_Component/Layout";
import axios from "axios";
import { useAuth } from "../../context/Author";
import moment from "moment";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [auth] = useAuth();

  const getOrders = async () => {
    try {
      const { data } = await axios.get(
        process.env.REACT_APP_API + `/api/v1/auth/orders`
      );
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (auth?.token) getOrders();
  }, [auth?.token]);

  return (
    <Layout title={"Your Orders - BAROQUE"}>
      <div className="mt-20">
        <Container fluid className=" p-3">
          <Row>
            <Col md={3}>
              <UserMenu />
            </Col>
            <Col md={9}>
              <div className="w-75 text-2xl ">All Orders</div>
              {orders?.map((o, i) => {
                return (
                  <div>
                    <div className="border shadow my-4  flex flex-col justify-center">
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            {/* <th scope="col">Status</th> */}
                            <th scope="col">Buyer</th>
                            <th scope="col"> date</th>
                            <th scope="col">Payment</th>
                            <th scope="col">Quantity</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{i + 1}</td>
                            {/* <td>{o?.status}</td> */}
                            <td>{o?.buyer?.name}</td>
                            <td>{moment(o?.createAt).fromNow()}</td>
                            <td>{o?.payment.success ? "Success" : "Failed"}</td>
                            <td>{o?.products?.length}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="container">
                      {o?.products?.map((p, i) => (
                        <div className="row mb-2 p-2 card flex-row" key={p._id}>
                          <div className="col-md-1">
                            <img
                              src={
                                process.env.REACT_APP_API +
                                `/api/v1/product/product-photo/${p._id}`
                              }
                              className="card-img-top"
                              alt={p.name}
                              width="90px"
                              height={"100px"}
                            />
                          </div>
                          <div className="col-md-5">
                            <p>{p.name}</p>
                            <p>{p.description.substring(0, 30)}</p>
                            <p>Price : {p.price}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

export default Orders;
