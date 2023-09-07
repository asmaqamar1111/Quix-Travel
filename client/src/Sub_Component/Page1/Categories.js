import React from "react";
import "./Categories.css";
import Card from "react-bootstrap/Card";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useCategory from "../../hooks/useCategories";

const Categories = () => {
  const categories = useCategory();

  return (
    <div className="container pt-[9rem]">
      <p className="text-[20px] text-center  text-black font-bold line line-center">
        Top Destination
      </p>
      {/* <div className="container">
      <button className="btn btn-center">center</button>
      <button className="btn btn-left">left</button>
      <button className="btn btn-bottom">bottom</button>
    </div> */}
      <Container fluid className="p-0 m-0">
        <Row className="rounded-[0px]">
          {categories?.map((c) => (
            <Col
              md={6}
              lg={4}
              xl={4}
              xxl={4}
              xs={12}
              className="text-left text-white rounded-[0px] object-cover "
            >
              <Link
                to={`/collections/${c.slug}`}
                className="hover:text-black rounded-[0px]"
              >
                <div className="card m-2 p-3 border-none rounded-[0px] object-cover ">
                  <img
                    src={
                      process.env.REACT_APP_API +
                      `/api/v1/category/category-photo/${c._id}`
                    }
                    className="card-img-top rounded-[0px] object-fill  lg:h-[21rem] xl:h-[26rem] w-96"
                    alt={c.name}
                  />
                  <Card.ImgOverlay>
                    <div className="card-body rounded-[0px] container2 ">
                      <h5 className="card-title text-white font-sans text-[1.5rem] line2 line2-left">
                        {c.name}
                      </h5>
                      <div className=" invisible-text ">
                        <h5 className="card-title text-white font-sans text-[1rem] ">
                          {c.hotel}
                        </h5>
                        <h5 className="card-title text-white font-sans text-[1rem] ">
                          {c.holidays} Holidays
                        </h5>
                      </div>
                    </div>
                  </Card.ImgOverlay>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Categories;
