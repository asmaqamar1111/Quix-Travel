import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminMenu from "./AdminMenu";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Layout from "../../Main_Component/Layout";

const Categorys = () => {
  const [category, setCategory] = useState([]);

  //getall products
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        process.env.REACT_APP_API+"/api/v1/category/get-category"
      );
      setCategory(data.category);
    } catch (error) {
      console.log(error);
      toast.error("Someething Went Wrong");
    }
  };

  //lifecycle method
  useEffect(() => {
    getAllCategory();
  }, []);
  return (
    <Layout title={"Dashboard - Categories"}>
      <div>
        <Container fluid className="m-3 p-3">
          <Row className="mt-20">
            <Col md={2}>
              <AdminMenu />
            </Col>
            <Col md={10}>
              <div className="w-75 text-2xl p-4">All Category List</div>
              <div
                className="flex flex-wrap"
                xs={12}
                sm={12}
                md={4}
                lg={4}
                xl={4}
              >
                {category?.map((p) => (
                  <Link
                    key={p._id}
                    to={`/dashboard/admin/category/${p.slug}`}
                    className="text-black  hover:text-black"
                  >
                    <div className="card m-2" style={{ width: "12rem" }}>
                      <img
                        src={process.env.REACT_APP_API+`/api/v1/category/category-photo/${p._id}`}
                        className="card-img-top"
                        alt={p.name}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{p.name}</h5>
                        <p className="card-text">{p.description}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

export default Categorys;
