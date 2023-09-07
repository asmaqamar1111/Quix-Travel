import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { GrInbox } from "react-icons/gr";
import { useWish } from "../../context/Wishlist";
import { useAuth } from "../../context/Author";
import { useCart } from "../../context/Cart";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Layout from "../../Main_Component/Layout";

function ViewWishlist() {
  const [wish, setWish] = useWish();
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const [cart, setCart] = useCart();

  //delete item
  const removeCartItem = (pid) => {
    try {
      let myWish = [...wish];
      let index = myWish.findIndex((item) => item._id === pid);
      myWish.splice(index, 1);
      setWish(myWish);
      localStorage.setItem("wish", JSON.stringify(myWish));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout title={"Wishlist - BAROQUE"}>
      <div className="mt-24 p-5 container">
        <div>
          <p className="text-3xl text-center mt-3">
            Your Favrouite items are place here
          </p>
          {wish?.length ? (
            <>
              {" "}
              <table className="border w-100 mt-5 text-center mx-auto p-3">
                <thead className=" justify-between divide-x border-b flex">
                  <th className="grow text-center  p-3 hidden md:block">
                    Image
                  </th>
                  <th className="grow text-center p-3 hidden md:block">
                    Title
                  </th>
                  <th className="grow text-center p-3 hidden md:block">Desc</th>
                  <th className="grow text-center p-3 hidden md:block"></th>
                </thead>
                <tbody>
                  {wish?.map((p) => (
                    <>
                      {" "}
                      <tr className="md:flex divide-y ">
                        <td className="pb-3 col-md-4 h-32 md:flex flex-grow mt-2 mb-2 md:justify-around md:items-center">
                          <img
                            src={process.env.REACT_APP_API+`/api/v1/product/product-photo/${p._id}`}
                            className="card-img-top   md:h-[140px] pt-3 md:w-[100px] "
                            alt={p.name}
                          />

                          <p className="text-gray-700 p-2 md:p-0 md:text-sm">
                            {p.name}
                          </p>

                          <p className="text-gray-700 p-2 md:m-4 ">
                            {p.description}
                          </p>

                          <button
                            onClick={() => removeCartItem(p._id)}
                            className="border-t border-b border-l border-r  border-black p-2"
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </>
          ) : (
            <>
              {" "}
              <p className="text-2xl text-center mt-5 flex justify-center flex-col">
                {/* <span>
                  <GrInbox />
                </span> */}
                <p>No Product were added to Wishlist</p>
              </p>
            </>
          )}

          {/* <Container>
          
            {wish?.map((p) => (
              <>
                <Row className="border">
                  <Col className="col-md-4 w-32 h-32 flex m-4">
                    <img
                      src={process.env.REACT_APP_API+`/api/v1/product/product-photo/${p._id}`}
                      className="card-img-top "
                      alt={p.name}
                    />

                    <p>{p.name}</p>

                    <p>{p.description}</p>

                    <button onClick={() => removeCartItem(p._id)}>
                      <GrFormClose />
                    </button>
                  </Col>
                </Row>
              </>
            ))}
          </Container> */}
        </div>
      </div>
    </Layout>
  );
}

export default ViewWishlist;
