import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useSearch } from "../context/Search";

const SearchPage = () => {
  const [values] = useSearch();
  return (
    <div className="container">
      <div className="text-center mt-28">
        <h1>SERACH RESULTS</h1>
        <h6>
          {values?.results.length < 1
            ? "No Result Found"
            : `Found Result ${values?.results.length}`}
        </h6>

        <Container>
          <Row>
            <Col className="">
              <div className="w-100">
                <div
                  className="flex flex-wrap  gap3"
                  xs={12}
                  sm={12}
                  md={4}
                  lg={4}
                  xl={4}
                >
                  {values?.results.map((p) => (
                   
                    <div className="card m-2 p-3 border-none rounded-[0px]" style={{ width: "18rem" }}>
                      <img
                        src={
                          process.env.REACT_APP_API +
                          `/api/v1/product/product-photo/${p._id}`
                        }
                        className="card-img-top rounded-[0px]"

                        alt={p.name}
                      />
                      <div className="card-body">
                        <h5 className="card-title text-center font-sans text-lg text-black">{p.name}</h5>
                        <p className="card-text text-center font-sans underline hover:font-bold cursor-pointer ">{p.description}</p>
                        
                      </div>
                    </div>
                    // </Link>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default SearchPage;
