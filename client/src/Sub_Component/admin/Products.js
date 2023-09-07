import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Layout from "../../Main_Component/Layout";
import AdminMenu from "./AdminMenu";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  //getall products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        process.env.REACT_APP_API+"/api/v1/product/get-product"
      );
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Someething Went Wrong");
    }
  };

  //lifecycle method
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <Layout title={"Dashboard - Products"}>
      <div className="mt-20">
        <Container fluid className="m-3 p-3">
          <Row>
            <Col md={2}>
              <AdminMenu />
            </Col>
            <Col md={10}>
              <div className="w-75 text-2xl p-4">All Products List</div>
              <div
                className="flex flex-wrap"
                xs={12}
                sm={12}
                md={4}
                lg={4}
                xl={4}
              >
                {products?.map((p) => (
                  <Link
                    key={p._id}
                    to={`/dashboard/admin/products/${p.slug}`}
                    className="text-black  hover:text-black"
                  >
                    <div className="card m-2" style={{ width: "12rem" }}>
                      <img
                        src={process.env.REACT_APP_API+`/api/v1/product/product-photo/${p._id}`}
                        className="card-img-top"
                        alt={p.name}
                      />
                      <div className="card-body">
                        <h5 className="card-title text-sm">{p.name}</h5>
                        <p className="card-text hidden">{p.description}</p>
                        <p className="card-text text-sm">{p.price}</p>
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

export default Products;
