import React, { useState, useEffect } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Link, useNavigate, Outlet } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { Container, Row, Col } from "react-bootstrap";
import Cart_PopUp from "../Page4/Cart_PopUp";
import CheckOut from "../Page5/CheckOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useCart } from "../../context/Cart";
import { useWish } from "../../context/Wishlist";

function ProductLabels() {
  const [count, setCount] = useState("1");
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [icon, setIcon] = useState(<BsChevronDown />);
  const [icon1, setIcon1] = useState(<BsChevronDown />);
  const [icon2, setIcon2] = useState(<BsChevronDown />);
  const [icon3, setIcon3] = useState(<BsChevronDown />);
  const [icon4, setIcon4] = useState(<BsChevronDown />);
  const [filter, setFilter] = useState(false);

  const [expand, setExpand] = useState(false);
  const [activeButton, setActiveButton] = useState("xs");
  const [modalShow, setModalShow] = useState(false);
  const [product, setProduct] = useState({});
  const [relatedProduct, setRelatedProducts] = useState([]);
  const [cart, setCart] = useCart();
  const [wish, setWish] = useWish();

  const params = useParams();
  const navigate = useNavigate();

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

  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  const changeIcon = () => {
    setIcon(!icon);
    setOpen(!open);
  };
  const changeIcon1 = () => {
    setIcon1(!icon1);
  };
  const changeIcon2 = () => {
    setIcon2(!icon2);
    setOpen2(!open2);
  };
  const changeIcon3 = () => {
    setIcon3(!icon3);
    setOpen3(!open3);
  };
  const changeIcon4 = () => {
    setIcon4(!icon4);
    setOpen4(!open4);
  };

  const expandItem = () => {
    setExpand(!expand);
  };

  const handleDec = () => {
    product.quantity > 1 ? setCount(product.quantity--) : setCount(1);
  };
  const handleInc = () => {
    product.quantity < 1 ? setCount(1) : setCount(product.quantity++);
  };

  const cartClickHandle = () => {
    setModalShow(true);
    setCart([...cart, product]);
    localStorage.setItem("cart", JSON.stringify([...cart, product]));
    toast.success("item added to cart");
  };

  return (
    <div
      xs={12}
      sm={12}
      md={6}
      lg={6}
      xl={6}
      className="pl-5 lg:pl-8 xl:pl-8 lg:pr-20 xl:pr-20"
    >
      <p className="text-base px-10 py-2">{product.name}</p>
      <p className="font-bold text-base px-10">PKR {product.price}</p>
      <p className="px-10">
        QUANTITY
        <button
          className="border-l border-r border-t border-b border-black text-gray-400 px-2 py-1 ml-9 "
          onClick={handleDec}
        >
          -
        </button>
        <button className=" border-t border-b border-black text-black px-2 py-1 ">
          {count}
        </button>
        <button
          className="border-l border-r border-t border-b border-black text-gray-400 px-2 py-1"
          onClick={handleInc}
        >
          +
        </button>
      </p>
      <p className="my-2 px-10">{product.description}</p>

      <div
        className="flex justify-between border-y-[1px] border-gray-300 items-baseline px-10"
        onClick={changeIcon}
      >
        <p className="    pt-3 py-3 text-base font-sans font-bold flex">
          {" "}
          DESCRIPTION
        </p>
        <p className="">{icon ? <BsChevronDown /> : <BsChevronUp />}</p>
      </div>

      {open ? (
        <p className="mt-2 mb-3 ml-1 mr-1 px-10 pt-2 pb-2 py-2 border-b border-gray-300 ">
          3 PIECE <br />
          SELF JACQUARD LAWN SHIRT
          <br />
          EMBROIDERED ORGANZA NECKLINE
          <br />
          EMBROIDERED ORGANZA FRONT PATCHES (03)
          <br />
          EMBROIDERED ORGANZA BACK PATCHES (02)
          <br />
          SELF JACQUARD LAWN SLEEVES
          <br />
          EMBROIDERED ORGANZA SLEEVES PATCHES (02)
          <br />
          EMBROIDERED ORGANZA DUPATTA
          <br />
          DYED COTTON TROUSER
        </p>
      ) : null}

      <div className="flex items-center py-2">
        <p className="my-2 px-10 text-base font-sans font-bold">TYPE</p>
        <button className="border-b border-t border-l border-r border-gray-400 bg-gray-200 text-xs text-gray-800 px-3 mx-5 py-1 font-sans">
          UNSTITCHED
        </button>
      </div>

      <div className="flex flex-wrap items-center py-2">
        <p className="my-2 ml-10 text-base font-sans font-bold">SIZE</p>

        <button
          className={`text-black font-light font-sans text-xs ml-24 p-1 ${
            activeButton === "xs"
              ? "bg-gray-200 border-t border-b border-l border-r border-gray-400"
              : ""
          }`}
          onClick={() => setActiveButton("xs")}
        >
          XS
        </button>
        <button
          className={`text-black font-light font-sans text-xs ml-5 py-1 px-2 ${
            activeButton === "s"
              ? "bg-gray-200 border-t border-b border-l border-r border-gray-400"
              : ""
          }`}
          onClick={() => setActiveButton("s")}
        >
          S
        </button>
        <button
          className={`text-black font-light font-sans text-xs ml-5 py-1 px-2 ${
            activeButton === "M"
              ? "bg-gray-200 border-t border-b border-l border-r border-gray-400"
              : ""
          }`}
          onClick={() => setActiveButton("M")}
        >
          M
        </button>
        <button
          className={`text-black font-light font-sans text-xs ml-5 py-1 px-2 ${
            activeButton === "L"
              ? "bg-gray-200 border-t border-b border-l border-r border-gray-400"
              : ""
          }`}
          onClick={() => setActiveButton("L")}
        >
          L
        </button>
        <button
          className={`text-black font-light font-sans text-xs ml-5 py-1 px-2 hidden lg:inline ${
            activeButton === "XL"
              ? "bg-gray-200 border-t border-b border-l border-r border-gray-400"
              : ""
          }`}
          onClick={() => setActiveButton("XL")}
        >
          XL
        </button>
        {/* <button
          className={`text-black font-light font-sans text-xs ml-5 py-1 px-2 ${
            activeButton === "CUSTOME SIZE"
              ? "bg-gray-200 border-t border-b border-l border-r border-gray-400"
              : ""
          }`}
          onClick={() => setActiveButton("CUSTOME SIZE")}
        >
          CUSTOME SIZE
        </button> */}
      </div>

      <div className="flex items-center py-2">
        <p
          className="text-base  p-[9px] pl-10 pt-3 py-3 font-sans font-bold"
          onClick={changeIcon1}
        >
          SIZE GUIDE
          <button className="ml-10 border-[1px] py-1 px-2 border-gray-400 text-xs font-light bg-gray-200 font-sans">
            <p
              className="flex"
              onClick={() => {
                setFilter(!filter);
              }}
            >
              {icon1 ? <BsChevronDown /> : <BsChevronUp />}
              <span className="pl-2">SIZE CHART</span>{" "}
            </p>
          </button>
          
        </p>
      </div>
      {filter ? (
            <div className="border-y-[1px] p-2 m-3 border-gray-400 hidden md:block">
              <p>{product.description}</p>
              <table className="border-separate border-gray-400 m-2">
                <tbody>
                  <tr className=" text-sm font-light font-sans">
                    <td className="border border-gray-400 py-2 pl-3 pr-20">
                      Size
                    </td>
                    <td class="border border-gray-400 py-2 px-3">XS</td>
                    <td class="border border-gray-400 py-2 px-3">S</td>
                    <td class="border border-gray-400 py-2 px-3">M</td>
                    <td class="border border-gray-400 py-2 px-3">L</td>
                    <td class="border border-gray-400 py-2 px-3">XL</td>
                  </tr>
                  <tr className="text-sm font-light font-sans">
                    <td className="border border-gray-400 py-2 pl-3 pr-20">
                      Lenght Front{" "}
                    </td>
                    <td class="border border-gray-400 py-2 px-3">41</td>
                    <td class="border border-gray-400 py-2 px-3">41</td>
                    <td class="border border-gray-400 py-2 px-3">42</td>
                    <td class="border border-gray-400 py-2 px-3">43</td>
                    <td class="border border-gray-400 py-2 px-3">44</td>
                  </tr>
                  <tr className="text-sm font-light font-sans">
                    <td className="border border-gray-400 py-2 pl-3 pr-20">
                      Shoulder
                    </td>
                    <td class="border border-gray-400 py-2 px-3"> 13.5</td>
                    <td class="border border-gray-400 py-2 px-3"> 14</td>
                    <td class="border border-gray-400 py-2 px-3">14.5</td>
                    <td class="border border-gray-400 py-2 px-3">15.5</td>
                    <td class="border border-gray-400 py-2 px-3">16</td>
                  </tr>
                  <tr className="text-sm font-light font-sans">
                    <td className="border border-gray-400 py-2 pl-3 pr-20">
                      Bust
                    </td>
                    <td class="border border-gray-400 py-2 px-3"> 18</td>
                    <td class="border border-gray-400 py-2 px-3"> 19</td>
                    <td class="border border-gray-400 py-2 px-3">20</td>
                    <td class="border border-gray-400 py-2 px-3">21</td>
                    <td class="border border-gray-400 py-2 px-3">22</td>
                  </tr>
                  <tr className="text-sm font-light font-sans">
                    <td className="border border-gray-400 py-2 pl-3 pr-20">
                      Bottom
                    </td>
                    <td class="border border-gray-400 py-2 px-3"> 23</td>
                    <td class="border border-gray-400 py-2 px-3"> 24</td>
                    <td class="border border-gray-400 py-2 px-3">27</td>
                    <td class="border border-gray-400 py-2 px-3">28</td>
                    <td class="border border-gray-400 py-2 px-3">29</td>
                  </tr>
                  <tr className="text-sm font-light font-sans">
                    <td className="border border-gray-400 py-2 pl-3 pr-20">
                      Side vent{" "}
                    </td>
                    <td class="border border-gray-400 py-2 px-3"> 19</td>
                    <td class="border border-gray-400 py-2 px-3"> 19</td>
                    <td class="border border-gray-400 py-2 px-3">20</td>
                    <td class="border border-gray-400 py-2 px-3">21</td>
                    <td class="border border-gray-400 py-2 px-3">21</td>
                  </tr>
                  <tr className="text-sm font-light font-sans">
                    <td className="border border-gray-400 py-2 pl-3 pr-20">
                      Sleeve Lenght{" "}
                    </td>
                    <td class="border border-gray-400 py-2 px-3"> 21</td>
                    <td class="border border-gray-400 py-2 px-3"> 21</td>
                    <td class="border border-gray-400 py-2 px-3">22</td>
                    <td class="border border-gray-400 py-2 px-3">22</td>
                    <td class="border border-gray-400 py-2 px-3">22</td>
                  </tr>
                  <tr className="text-sm font-light font-sans">
                    <td className="border border-gray-400 py-2 pl-3 pr-20">
                      Cuff Opening
                    </td>
                    <td class="border border-gray-400 py-2 px-3"> 6.5</td>
                    <td class="border border-gray-400 py-2 px-3"> 6.5</td>
                    <td class="border border-gray-400 py-2 px-3">7</td>
                    <td class="border border-gray-400 py-2 px-3">7.5</td>
                    <td class="border border-gray-400 py-2 px-3">8</td>
                  </tr>
                  <tr className="text-sm font-light font-sans">
                    <td className="border border-gray-400 py-2 pl-3 pr-20">
                      Arm Hole Straight
                    </td>
                    <td class="border border-gray-400 py-2 px-3"> 8.5</td>
                    <td class="border border-gray-400 py-2 px-3"> 8.5</td>
                    <td class="border border-gray-400 py-2 px-3">9</td>
                    <td class="border border-gray-400 py-2 px-3">9.5</td>
                    <td class="border border-gray-400 py-2 px-3">10</td>
                  </tr>
                  <tr className="text-sm font-light font-sans">
                    <td className="border border-gray-400 py-2 pl-3 pr-20">
                      Neck Width
                    </td>
                    <td class="border border-gray-400 py-2 px-3"> 9</td>
                    <td class="border border-gray-400 py-2 px-3"> 9</td>
                    <td class="border border-gray-400 py-2 px-3">9</td>
                    <td class="border border-gray-400 py-2 px-3">9</td>
                    <td class="border border-gray-400 py-2 px-3">9</td>
                  </tr>
                  <tr className="text-sm font-light font-sans">
                    <td className="border border-gray-400 py-2 pl-3 pr-20">
                      Front Drop
                    </td>
                    <td class="border border-gray-400 py-2 px-3"> 2.5</td>
                    <td class="border border-gray-400 py-2 px-3"> 2.5</td>
                    <td class="border border-gray-400 py-2 px-3">2.5</td>
                    <td class="border border-gray-400 py-2 px-3">2.5</td>
                    <td class="border border-gray-400 py-2 px-3">2.5</td>
                  </tr>
                  <tr className="text-sm font-light font-sans">
                    <td className="border border-gray-400 py-2 pl-3 pr-20">
                      Back Drop{" "}
                    </td>
                    <td class="border border-gray-400 py-2 px-3"> 2.5</td>
                    <td class="border border-gray-400 py-2 px-3"> 2.5</td>
                    <td class="border border-gray-400 py-2 px-3">2.5</td>
                    <td class="border border-gray-400 py-2 px-3">2.5</td>
                    <td class="border border-gray-400 py-2 px-3">2.5</td>
                  </tr>
                  <tr className="text-sm font-light font-sans">
                    <td className="border border-gray-400 py-2 pl-3 pr-20">
                      BACK KEE HOLE{" "}
                    </td>
                    <td class="border border-gray-400 py-2 px-3"> 2</td>
                    <td class="border border-gray-400 py-2 px-3"> 2</td>
                    <td class="border border-gray-400 py-2 px-3">2</td>
                    <td class="border border-gray-400 py-2 px-3">2</td>
                    <td class="border border-gray-400 py-2 px-3">2</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : null}

      <Container className="border-y py-3 mx-auto text-center p-0 m-0">
        <Row className="flex  flex-wrap">
          <Col className="flex py-1" xs={12} sm={12} md={4} lg={4} xl={4}>
            <Button
              onClick={() => {
                setWish([...wish, product]);
                localStorage.setItem(
                  "wish",
                  JSON.stringify([...wish, product])
                );
                toast("Item added to successfully in Wishlist");
              }}
              className="cursor-pointer border-black font-semibold bg-white text-black hover:border-black grow py-2 px-4 rounded-none text-sm"
            >
              ADD TO WISHLIST
            </Button>
          </Col>
          <Col className="flex py-1 " xs={12} sm={12} md={4} lg={4} xl={4}>
            <Button
              variant="primary"
              onClick={() => {
                setCart([...cart, product]);
                setModalShow(true);
                localStorage.setItem(
                  "cart",
                  JSON.stringify([...cart, product])
                );
              }}
              className="cursor-pointer border-black font-semibold bg-black text-white grow hover:border-black py-2 px-4 rounded-none text-sm"
            >
              ADD TO CART
            </Button>
          </Col>
          <Cart_PopUp show={modalShow} onHide={() => setModalShow(false)} />

          <Col className="flex py-1 " xs={12} sm={12} md={4} lg={4} xl={4}>
            <Button
              variant="primary"
              onClick={() => {
                navigate("/checkout");
              }}
              className="cursor-pointer border-black font-semibold bg-black text-white grow hover:border-black py-2 px-3 rounded-none text-sm"
            >
              BUY IT NOW
            </Button>
          </Col>

          {/* <Col className="flex py-1 " xs={12} sm={12} md={4} lg={4} xl={4}>
            {values.map((v, idx) => (
              <Button
                key={idx}
                className="cursor-pointer border-black font-semibold bg-white text-black hover:border-black py-2 px-4 grow rounded-none text-sm"
                onClick={() => handleShow(v)}
              >
                BUY IT NOW {typeof v === "string" && `below ${v.split("-")[0]}`}
              </Button>
            ))}
          </Col>
          <Modal
            show={show}
            fullscreen={fullscreen}
            onHide={() => setShow(false)}
            className="absolute top-0 p-0 m-0 h-full"
          >
            <CheckOut />
          </Modal> */}
        </Row>
      </Container>

      <div
        className="flex justify-between border-y-[1px] border-gray-300 items-baseline px-10"
        onClick={changeIcon2}
      >
        <p className=" pt-3 py-3 text-base font-sans font-bold flex">
          {" "}
          INSTRUCTION
        </p>
        <p className="">{icon2 ? <BsChevronDown /> : <BsChevronUp />}</p>
      </div>
      {open2 ? (
        <p className="mt-1  ml-1 mr-1 px-10 pt-1 pb-2 py-2 border-b border-gray-300 ">
          DRY CLEAN RECOMMENDED IRON THE CLOTHES AT MODERATE TEMPERATURE DO NOT
          USE ANY TYPE OF BLEACH OR STAIN REMOVING CHEMICALS ACTUAL COLOR MAY
          SLIGHTLY VARY FROM THE IMAGE SHOWN UNSTITCHED INCLUDES FABRIC ONLY
          CUSTOM LENGTH OR ANY OTHER CHANGING WHICH VARIES FROM OUR STANDARD
          SIZE CHART COMES UNDER CUSTOMIZED STITCHING ALL THE SLEEVELESS DRESSES
          ARE STITCHED WITH SLEEVES BY DEFAULT UNTIL SLEEVELESS IS REQUESTED BY
          THE CUSTOMER. STRAIGHT SLEEVES ARE ATTACHED.
        </p>
      ) : null}

      <div
        className="flex justify-between border-y-[1px] border-gray-300 items-baseline px-10"
        onClick={changeIcon3}
      >
        {" "}
        <p className="pt-3 py-3 text-base font-sans font-bold flex">
          {" "}
          DELIVERY
        </p>{" "}
        <p className="">{icon3 ? <BsChevronDown /> : <BsChevronUp />}</p>
      </div>

      {open3 ? (
        <p className="mt-1  ml-1 mr-1 px-10 pt-1 pb-2 py-2 border-b border-gray-300 ">
          (PAKISTAN DELIVERY FOR UNSTITCHED) : WITHIN 1 WEEK.
          <br />
          (PAKISTAN DELIVERY FOR STITCHED) : WITHIN 2 TO 3 WEEKS.
          <br /> (PAKISTAN DELIVERY FOR PRIORITY STITCHING) : DISPATCH TIME 1
          WEEK.
          <br /> (INTERNATIONAL DELIVERY FOR UNSTITCHED) : WITHIN 2 WEEKS.
          <br /> (INTERNATIONAL DELIVERY FOR STITCHED) : WITHIN 3 TO 5 WEEKS.
          <br /> (INTERNATIONAL DELIVERY PRIORITY STITCHING) : DISPATCH TIME 2
          WEEKS.
          <br /> CUSTOMIZE STITCHING FOR LOCAL & INTERNATIONAL : 1 WEEK EXTRA.
        </p>
      ) : null}

      <div
        className="flex justify-between border-y-[1px] border-gray-300 items-baseline px-10"
        onClick={changeIcon4}
      >
        <p className="pt-3 py-3 text-base font-sans font-bold flex">
          {" "}
          EXCHANGE
        </p>{" "}
        <p className="">{icon4 ? <BsChevronDown /> : <BsChevronUp />}</p>
      </div>

      {open4 ? (
        <p className="mt-1  ml-1 mr-1 px-10 pt-1 pb-2 py-2 border-b border-gray-300 ">
          ANY PRODUCT BOUGHT FROM BAROQUE’S ONLINE STORE CAN BE EXCHANGED FROM
          THE ONLINE STORE ONLY, PROVIDED IT IS UNUSED AND STILL HAS THE LABEL
          AND TAG IN THEIR ORIGINAL STATE.
          <br />
          FOR SALE ORDERS, EXCHANGES WILL BE PROVIDED FOR VALID REASONS ONLY I.E
          FAULTY OR INCORRECT ITEMS DELIVERED. REFUNDS ARE NOT IN CASH - THE
          CLIENT WILL BE ISSUED A COUPON OF THE SAME VALUE VALID FOR ONLINE
          STORE ONLY, WHICH CAN BE USED IMMEDIATELY OR IN THE FUTURE.
          <br />
          EXCHANGE POLICY IS ONLY LIABLE WITHIN 14 DAYS AFTER THE GOODS ARE
          DELIVERED.
          <br />
          FOR MORE INFORMATION REGARDING OUR EXCHANGE POLICY *CLICK HERE*
          <br />
          FOR INTERNATIONAL ORDERS, WE DO NOT OFFER EXCHANGES UNLESS WE DELIVER
          THE INCORRECT ORDER OR THE PRODUCT IS FAULTY. * BAROQUE DOES NOT
          PROVIDE EXCHANGE/REFUND FOR CUSTOM
        </p>
      ) : null}

      <Outlet />
    </div>
  );
}

export default ProductLabels;
