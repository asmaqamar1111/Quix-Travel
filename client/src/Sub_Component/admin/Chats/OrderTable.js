import React, { useState, useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import moment from "moment";
import { Select } from "antd";
import { toast } from "react-toastify";
import Layout from "../../../Main_Component/Layout";
import { useAuth } from "../../../context/Author";
const { Option } = Select;

const OrderTable = () => {
  const [status, setStatus] = useState([
    "Not Process",
    "Processing",
    "Shipped",
    "deliverd",
    "cancel",
  ]);
  const [changeStatus, setChangeStatus] = useState("");

  const [orders, setOrders] = useState([]);
  const [auth, setAuth] = useAuth();

  const getOrders = async () => {
    try {
      const { data } = await axios.get(
        process.env.REACT_APP_API+"/api/v1/auth/all-orders"
      );
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (auth?.token) getOrders();
  }, [auth?.token]);

  const handleChange = async (orderId, value) => {
    try {
      const { data } = await axios.put(
        process.env.REACT_APP_API+`/api/v1/auth/order-status/${orderId}`,
        {
          status: value,
        }
      );
      getOrders();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center md-col-7">
      <Layout>
        {orders?.map((o, i) => {
          return (
            <div className="border shadow my-4 mx-2 flex flex-col justify-center">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Status</th>
                    <th scope="col">Buyer</th>
                    <th scope="col"> date</th>
                    <th scope="col">Payment</th>
                    <th scope="col">Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{i + 1}</td>
                    <td>
                      <Select
                        bordered={false}
                        onChange={(value) => handleChange(o._id, value)}
                        defaultValue={o?.status}
                      >
                        {status.map((s, i) => (
                          <Option key={i} value={s}>
                            {s}
                          </Option>
                        ))}
                      </Select>
                    </td>
                    <td>{o?.buyer?.name}</td>
                    <td>{moment(o?.createAt).fromNow()}</td>
                    <td>{o?.payment.success ? "Success" : "Failed"}</td>
                    <td>{o?.products?.length}</td>
                  </tr>
                </tbody>
              </table>
              <div className="container">
                {o?.products?.map((p, i) => (
                  <div className="row mb-2 p-2 flex-row" key={p._id}>
                    <div className="col-md-1">
                      <img
                        src={process.env.REACT_APP_API+`/api/v1/product/product-photo/${p._id}`}
                        className="card-img-top card-img-bottom"
                        alt={p.name}
                        width="100px"
                        height={"100px"}
                      />
                    </div>
                    <div className="col-md-5">
                      <p>
                        <span className="font-bold">Order Name: </span>
                        {p.name}
                      </p>
                      <p>
                        <span className="font-bold">Order Description: </span>
                        {p.description.substring(0, 30)}
                      </p>
                      <p>
                        <span className="font-bold">Price:</span> {p.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </Layout>
    </div>
  );
};

export default OrderTable;
