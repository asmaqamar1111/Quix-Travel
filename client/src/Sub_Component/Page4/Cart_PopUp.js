import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import { BsCheck2 } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import CheckOut from "../Page5/CheckOut";
import axios from "axios";

function Cart_PopUp(props) {
  const values = [true];
  const navigate = useNavigate();
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const params = useParams();
  const [product, setProduct] = useState({});

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  //intial product details
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);

  //set single product
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        process.env.REACT_APP_API + `/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  const modalBackdropClasses = "bg-white opacity-0 ";
  const modalDialogClasses = "absolute  md:right-14 m-0";
  const modalContentClasses = "p-0 m-0 rounded-[0px] relative w-[373px]";
  return (
    <Modal
      {...props}
      className="rounded-[0px] mt-[100px] xs:mt-[82px] sm:mt-[62px]  md:mt-[92px] text-left "
      style={{ borderRadius: 0 }}
      backdropClassName={modalBackdropClasses}
      dialogClassName={modalDialogClasses}
      contentClassName={modalContentClasses}
    >
      <div
        className="flex items-center p-7 rounded-[0px] font-medium text-[17px] mt-6"
        style={{ borderRadius: 0 }}
      >
        <BsCheck2 className="mr-2 font-medium text-[17px]" />
        Item added to your cart
        <GrClose
          onClick={props.onHide}
          className="absolute right-8 text-[17px] cursor-pointer"
        />
      </div>

      <div className="flex py-3 pl-6 pr-5 mb-7 w-[141px] h-[173px]">
        <img
          src={
            process.env.REACT_APP_API +
            `/api/v1/product/product-photo/${product._id}`
          }
          className="card-img-top"
          alt={product.name}
        />
        <div className=" flex row ">
          <p className="mx-6 text-base w-[100px]">{product.name}</p>
          <p className="mx-6 w-[100px]">{product.description}</p>
        </div>
      </div>

      <button
        className="border-black border-l border-r border-t border-b mx-6 px-10 pt-2 text-black mb-2 text-center font-medium
        flex-center"
      >
        {" "}
        <Link to="/viewCart">
          <p className="hover:text-black">VIEW MY CART</p>
        </Link>
      </button>

      <button
        onClick={() => {
          navigate("/checkout");
        }}
        className="border-black border-l border-r border-t border-b mx-6 px-2 py-[10px] text-white bg-black mb-2 text-center"
      >
        CHECKOUT
      </button>

      {/* {values.map((v, idx) => (
        <button
          key={idx}
          className="border-black border-l border-r border-t border-b mx-6 px-2 py-[10px] text-white bg-black mb-2 text-center"
          onClick={() => handleShow(v)}
        >
          CHECKOUT {typeof v === "string" && `below ${v.split("-")[0]}`}
        </button>
      ))}
      <Modal
        show={show}
        fullscreen={fullscreen}
        onHide={() => setShow(false)}
        className="absolute top-0 p-0 m-0 h-full"
      >
        <CheckOut />
      </Modal> */}

      <div>
        <p
          onClick={props.onHide}
          className="cursor-pointer text-center py-2 pb-5 underline text-black underline-offset-2 font-medium text-[15px]"
        >
          CONTINUE SHOPPING
        </p>
      </div>

      <Outlet />
    </Modal>
  );
}

export default Cart_PopUp;
