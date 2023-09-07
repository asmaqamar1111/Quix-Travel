import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../../context/Cart";
import { toast } from "react-toastify";
import ProductLabels from "./ProductLabels";
import Magnifier from "react-magnifier";
import Layout from "../../Main_Component/Layout";
import { Row, Col, Container } from "react-bootstrap";

const ProductDetail = () => {
  const params = useParams();
  const [cart, setCart] = useCart();

  const [product, setProduct] = useState({});
  const [relatedProduct, setRelatedProducts] = useState([]);
  //intial product details
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);

  //set single product
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        process.env.REACT_APP_API+`/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.products);
      getSimilarProduct(data?.products._id, data?.products.category._id);
    } catch (error) {
      console.log(error);
    }
  };

  //get related/similar  products
  const getSimilarProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        process.env.REACT_APP_API+`/api/v1/product/related-product/${pid}/${cid}`
      );
      setRelatedProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mt-24">
      <Layout title={`${product.slug} - BAROQUE`} className="m-0 p-0 ">
        <Container fluid className="mt-24 container row  m-0 p-0 mx-auto">
          <Row className="px-2 py-6 lg:px-24 lg:py-6 xl:px-32 xl:py-6">
            <Col
              className="pl-10 md:pl-5 md:pr-5 lg:pl-16 lg:pr-7 xl:pr-7  xl:pl-26 "
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
            >
              <Magnifier
                src={process.env.REACT_APP_API+`/api/v1/product/product-photo/${product._id}`}
              />
              
              {/* <img
            src={process.env.REACT_APP_API+`/api/v1/product/product-photo/${product._id}`}
            className="card-img-top"
            alt={product.name}
          /> */}
            </Col>

            <Col className=" m-0 p-0" xs={12} sm={12} md={6} lg={6} xl={6}>
              <ProductLabels />
            </Col>
          </Row>
          <Row className="row mt-20 text-center">
            <p className="text-lg text-medium">YOU MAY ALSO LIKE</p>
            {relatedProduct.length < 1 && (
              <p className="text-center">no similar products found</p>
            )}
            {/* {JSON.stringify(relatedProduct, null, 4)} */}
            <div className="flex justify-center">
              {relatedProduct?.map((p) => (
                <Col
                  className="card border-none rounded-[0px] mx-1 pl-2"
                  xs={4}
                  sm={4}
                  md={4}
                  lg={4}
                  xl={4}
                  xxl={4}
                >
                  <img
                    src={process.env.REACT_APP_API+`/api/v1/product/product-photo/${p?._id}`}
                    className="card-img-top rounded-[0px]"
                    alt={p.name}
                  />
                  <div className="card-body border-none rounded-[0px]">
                    <h5 className="card-title text-center cursor-pointer font-sans hover:text-black text-black p-0 m-0 font-normal text-sm md:text-base">
                      {p.name}
                    </h5>
                    <h5 className="card-title text-center font-sans  text-base md:text-lg font-bold hover:text-black cursor-pointer text-black p-0 m-0">
                      {p.price}
                    </h5>
                  </div>
                </Col>
              ))}
            </div>
          </Row>
        </Container>
      </Layout>
    </div>
  );
};

export default ProductDetail;
