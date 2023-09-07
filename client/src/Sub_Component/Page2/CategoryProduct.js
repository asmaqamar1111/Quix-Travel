import { Checkbox, Radio } from "antd";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IoIosHeartEmpty } from "react-icons/io";
import { FiHeart } from "react-icons/fi";
import { FaSearchPlus } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import { useWish } from "../../context/Wishlist";
import Layout from "./../../Main_Component/Layout";
import { Prices } from "./../form/Prices";
import Sub_navigation from "./Sub_NavigationInner";
import { Drawer } from "antd";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { toast } from "react-toastify";

const CategoryProduct = () => {
  const params = useParams();
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [wish, setWish] = useWish();
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const getProductsByCat = async () => {
    try {
      const { data } = await axios.get(
        process.env.REACT_APP_API +
          `/api/v1/product/product-category/${params.slug}`
      );
      setProducts(data?.products);
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (params?.slug) getProductsByCat();
  }, [params?.slug]);

  // const getProductsByCat = async () => {
  //   try {
  //     const { data } = await axios.get(
  //       process.env.REACT_APP_API +
  //         `/api/v1/product/product-category/${params.slug}`
  //     );
  //     setProducts(data?.products);
  //     setCategory(data?.category);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   if (params?.slug) getProductsByCat();
  // }, [params?.slug]);

  //filter by category
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) all.push(id);
    else all = all.filter((c) => c !== id);
    setChecked(all);
  };
  // const handleFilter = (value, id) => {
  //   let all = [...checked];
  //   if (value) all.push(id);
  //   else all = all.filter((c) => c !== id);
  //   setChecked(all);
  // };

  //lifecycle method ~ initial time get
  useEffect(() => {
    if (!checked.length || !radio.length) getProductsByCat();
  }, [radio.length]);
  // useEffect(() => {
  //   if (!checked.length || !radio.length) getProductsByCat();
  // }, [radio.length]);

  // fetch on the base of radio  and check
  useEffect(() => {
    if (checked.length || radio.length) filterProduct();
  }, [checked, radio]);
  // useEffect(() => {
  //   if (checked.length || radio.length) filterProduct();
  // }, [checked, radio]);

  // get filter
  const filterProduct = async () => {
    try {
      const { data } = await axios.post(
        process.env.REACT_APP_API + "/api/v1/product/product-filters",
        { checked, radio }
      );
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  // const filterProduct = async () => {
  //   try {
  //     const { data } = await axios.post(
  //       process.env.REACT_APP_API + "/api/v1/product/product-filters",
  //       { checked, radio }
  //     );
  //     setProducts(data?.products);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        process.env.REACT_APP_API + "/api/v1/category/get-category"
      );
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // const getAllCategory = async () => {
  //   try {
  //     const { data } = await axios.get(
  //       process.env.REACT_APP_API + "/api/v1/category/get-category"
  //     );
  //     if (data?.success) {
  //       setCategories(data?.category);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  //lifecycle method
  useEffect(() => {
    getAllCategory();
  }, []);
  // useEffect(() => {
  //   getAllCategory();
  // }, []);

  return (
    <Layout title={`${category.slug} - BAROQUE`}>
      <div className="mt-20">
        <Sub_navigation />
        <div
          className=" block md:hidden mx-4 my-3 cursor-pointer mt-16 pt-20"
          onClick={showDrawer}
        >
          <p className="w-10 flex p-1 m-1 ">
            <img
              src={
                "https://t3.ftcdn.net/jpg/03/20/78/84/360_F_320788419_5apyi8WJlvD7RuBivEyY23TfXLYoN46J.jpg"
              }
              className="cursor-pointer"
            />
            <span className="hover:underline text-xl pl-1 m-1 cursor-pointer">
              Filter
            </span>
          </p>{" "}
        </div>
        <Drawer
          title="Filter the items"
          placement="right"
          onClose={onClose}
          open={open}
        >
          <div className="">
            <div className="small md:hidden block">
              <details className="">
                <summary className="border-b-[1px]  border-black p-[13px]  font-sans">
                  FABRIC TYPE
                </summary>

                <div className="flex  flex-col p-2  text-base text-left">
                  {categories?.map((c) => (
                    <Checkbox
                      className="hiddenpeer appearance-none"
                      key={c._id}
                      onChange={(e) => {
                        handleFilter(e.target.checked, c._id);
                      }}
                    >
                      {c.name}
                    </Checkbox>
                  ))}
                </div>
              </details>

              <details className="">
                <summary className="border-b-[1px]  border-black p-[13px]  font-sans">
                  PRICE RANGE
                </summary>
                <div className="flex  flex-col p-2  text-base text-left">
                  <Radio.Group onChange={(e) => setRadio(e.target.value)}>
                    {Prices?.map((p) => (
                      <div key={p._id}>
                        <Radio
                          value={p.array}
                          className="hiddenpeer appearance-none"
                        >
                          {p.name}
                        </Radio>
                      </div>
                    ))}
                  </Radio.Group>
                </div>
              </details>
              <details className="">
                <summary className="border-b-[1px] border-black p-[13px]  font-sans">
                  FORM
                </summary>
                <Row className="mx-1">
                  <Col className="p-0 mt-4 mb-4 mr-0 border">
                    <Box
                      component="form"
                      id="box"
                      noValidate
                      autoComplete="off"
                      className="bg-white border-0  p-0 m-0 w-100 box"
                    >
                      <TextField
                        id="filled-basic"
                        type={"number"}
                        label="From"
                        variant="filled"
                        className="bg-white border-0 text-sm font-[10px] w-100 rounded-none hover:text-black hover:border-0 focus:text-black focus:border-0 text"
                        style={{
                          border: "none",
                          borderRadius: "0",
                          background: "white",
                          backgroundColor: "white",
                        }}
                      />
                    </Box>
                  </Col>
                  <Col className="p-0 mt-4 mb-4 ml-0 border">
                    <Box
                      component="form"
                      id="box"
                      noValidate
                      autoComplete="off"
                      className="bg-white border-0  p-0 m-0 w-100 box"
                    >
                      <TextField
                        id="filled-basic"
                        type={"number"}
                        label="To"
                        variant="filled"
                        className="bg-white border-0 text-sm font-[10px] w-100 rounded-none hover:text-black hover:border-0 focus:text-black focus:border-0 text"
                        style={{
                          border: "none",
                          borderRadius: "0",
                          background: "white",
                          backgroundColor: "white",
                        }}
                      />
                    </Box>
                  </Col>
                </Row>
              </details>

              <details className="">
                <summary className="border-b-[1px] border-black p-[13px]  font-sans">
                  SIZE
                </summary>
                <ul className="m-4 font-sans">
                  {" "}
                  <input type="Checkbox" name="blue" value="yes" Checked />
                  <span className="pl-3 pt-2 text-[13px]">XS (39)</span>
                </ul>
                <ul className="m-4 font-sans">
                  {" "}
                  <input type="Checkbox" name="blue" value="yes" Checked />
                  <span className="pl-3 pt-2 text-[13px]">S (39)</span>
                </ul>
                <ul className="m-4 font-sans">
                  {" "}
                  <input type="Checkbox" name="blue" value="yes" Checked />
                  <span className="pl-3 pt-2 text-[13px]">M (39)</span>
                </ul>
                <ul className="m-4 font-sans">
                  {" "}
                  <input type="Checkbox" name="blue" value="yes" Checked />
                  <span className="pl-3 pt-2 text-[13px]">L (39)</span>
                </ul>
                <ul className="m-4 font-sans">
                  {" "}
                  <input type="Checkbox" name="blue" value="yes" Checked />
                  <span className="pl-3 pt-2 text-[13px]">XL (39)</span>
                </ul>
                <ul className="m-4 font-sans">
                  {" "}
                  <input type="Checkbox" name="blue" value="yes" Checked />
                  <span className="pl-3 pt-2 text-[13px]">
                    Custom Size (36)
                  </span>
                </ul>
                <ul className="m-4 font-sans">
                  {" "}
                  <input type="Checkbox" name="blue" value="yes" Checked />
                  <span className="pl-3 pt-2 text-[13px]">Default (39)</span>
                </ul>
              </details>
              <details className="">
                <summary className="border-b-[1px] border-black p-[13px]  font-sans">
                  PIECES
                </summary>
                <ul className="m-4 font-sans">
                  {" "}
                  <input type="Checkbox" name="blue" value="yes" Checked />
                  <span className="pl-3 pt-2 text-[13px]">U3 (1)</span>
                </ul>
                <ul className="m-4 font-sans">
                  {" "}
                  <input type="Checkbox" name="blue" value="yes" Checked />
                  <span className="pl-3 pt-2 text-[13px]">2 PIECE (5)</span>
                </ul>
                <ul className="m-4 font-sans">
                  {" "}
                  <input type="Checkbox" name="blue" value="yes" Checked />
                  <span className="pl-3 pt-2 text-[13px]">3 PIECE (57)</span>
                </ul>
              </details>
            </div>
          </div>
        </Drawer>
        <Container fluid className="my-16 md:px-20 lg:px-32 xl:px-32 ">
          <Row className="rounded-[0px]">
            <Col xs={3} sm={3} md={3} lg={3} xl={3} className="hidden md:block">
              <div className="">
                <div className="large hidden md:block">
                  <details className="hidden md:block">
                    <summary className="border-b-[1px]  border-black p-[13px]  font-sans">
                      FABRIC TYPE
                    </summary>

                    <div className="flex  flex-col p-2  text-base text-left">
                      {categories?.map((c) => (
                        <Checkbox
                          className="hiddenpeer appearance-none p-2 font-sans"
                          key={c._id}
                          onChange={(e) => {
                            handleFilter(e.target.checked, c._id);
                          }}
                        >
                          {c.name}
                        </Checkbox>
                      ))}
                    </div>
                  </details>

                  <details className="hidden md:block">
                    <summary className="border-b-[1px]  border-black p-[13px]  font-sans">
                      PRICE RANGE
                    </summary>
                    <div className="flex  flex-col p-2  text-base text-left">
                      <Radio.Group onChange={(e) => setRadio(e.target.value)}>
                        {Prices?.map((p) => (
                          <div key={p._id}>
                            <Radio
                              value={p.array}
                              className="hiddenpeer appearance-none p-2 font-sans"
                            >
                              {p.name}
                            </Radio>
                          </div>
                        ))}
                      </Radio.Group>
                    </div>
                  </details>
                  <details className="hidden md:block">
                    <summary className="border-b-[1px] border-black p-[13px]  font-sans">
                      FORM
                    </summary>
                    <Row className="mx-1">
                      <Col className="p-0 mt-4 mb-4 mr-0 border">
                        <Box
                          component="form"
                          id="box"
                          noValidate
                          autoComplete="off"
                          className="bg-white border-0  p-0 m-0 w-100 box"
                        >
                          <TextField
                            id="filled-basic"
                            type={"number"}
                            label="From"
                            variant="filled"
                            className="bg-white border-0 text-sm font-[10px] w-100 rounded-none hover:text-black hover:border-0 focus:text-black focus:border-0 text"
                            style={{
                              border: "none",
                              borderRadius: "0",
                              background: "white",
                              backgroundColor: "white",
                            }}
                          />
                        </Box>
                      </Col>
                      <Col className="p-0 mt-4 mb-4 ml-0 border">
                        <Box
                          component="form"
                          id="box"
                          noValidate
                          autoComplete="off"
                          className="bg-white border-0  p-0 m-0 w-100 box"
                        >
                          <TextField
                            id="filled-basic"
                            type={"number"}
                            label="To"
                            variant="filled"
                            className="bg-white border-0 text-sm font-[10px] w-100 rounded-none hover:text-black hover:border-0 focus:text-black focus:border-0 text"
                            style={{
                              border: "none",
                              borderRadius: "0",
                              background: "white",
                              backgroundColor: "white",
                            }}
                          />
                        </Box>
                      </Col>
                    </Row>
                  </details>

                  <details className="hidden md:block">
                    <summary className="border-b-[1px] border-black p-[13px]  font-sans">
                      SIZE
                    </summary>
                    <ul className="m-4 font-sans">
                      {" "}
                      <input type="Checkbox" name="blue" value="yes" Checked />
                      <span className="pl-3 pt-2 text-[13px]">XS (39)</span>
                    </ul>
                    <ul className="m-4 font-sans">
                      {" "}
                      <input type="Checkbox" name="blue" value="yes" Checked />
                      <span className="pl-3 pt-2 text-[13px]">S (39)</span>
                    </ul>
                    <ul className="m-4 font-sans">
                      {" "}
                      <input type="Checkbox" name="blue" value="yes" Checked />
                      <span className="pl-3 pt-2 text-[13px]">M (39)</span>
                    </ul>
                    <ul className="m-4 font-sans">
                      {" "}
                      <input type="Checkbox" name="blue" value="yes" Checked />
                      <span className="pl-3 pt-2 text-[13px]">L (39)</span>
                    </ul>
                    <ul className="m-4 font-sans">
                      {" "}
                      <input type="Checkbox" name="blue" value="yes" Checked />
                      <span className="pl-3 pt-2 text-[13px]">XL (39)</span>
                    </ul>
                    <ul className="m-4 font-sans">
                      {" "}
                      <input type="Checkbox" name="blue" value="yes" Checked />
                      <span className="pl-3 pt-2 text-[13px]">
                        Custom Size (36)
                      </span>
                    </ul>
                    <ul className="m-4 font-sans">
                      {" "}
                      <input type="Checkbox" name="blue" value="yes" Checked />
                      <span className="pl-3 pt-2 text-[13px]">
                        Default (39)
                      </span>
                    </ul>
                  </details>
                  <details className="hidden md:block">
                    <summary className="border-b-[1px] border-black p-[13px]  font-sans">
                      PIECES
                    </summary>
                    <ul className="m-4 font-sans">
                      {" "}
                      <input type="Checkbox" name="blue" value="yes" Checked />
                      <span className="pl-3 pt-2 text-[13px]">U3 (1)</span>
                    </ul>
                    <ul className="m-4 font-sans">
                      {" "}
                      <input type="Checkbox" name="blue" value="yes" Checked />
                      <span className="pl-3 pt-2 text-[13px]">2 PIECE (5)</span>
                    </ul>
                    <ul className="m-4 font-sans">
                      {" "}
                      <input type="Checkbox" name="blue" value="yes" Checked />
                      <span className="pl-3 pt-2 text-[13px]">
                        3 PIECE (57)
                      </span>
                    </ul>
                  </details>
                </div>
              </div>
            </Col>

            <Col xs={9} sm={9} md={9} lg={9} xl={9}>
              <div className="border-none mx-auto">
                {" "}
                {/* <p>{category?.name}</p>
        <p>{products?.length}result :</p> */}
                <div className="w-100">
                  <div
                    className="flex flex-wrap border-none justify-center"
                    xs={12}
                    sm={4}
                    md={4}
                    lg={4}
                    xl={4}
                  >
                    {products?.map((p) => (
                      <div
                        className="card m-2 rounded-[0px] border-none relative left-[20%] md:left-0 sm:w-100 md:w-[16rem]"
                        // style={{ width: "18rem" }}
                      >
                        <Card className="bg-transparent text-black text-lg border-none rounded-[0px]">
                          <Card.Img
                            src={
                              process.env.REACT_APP_API +
                              `/api/v1/product/product-photo/${p._id}`
                            }
                            className="card-img-top rounded-[0px] border-none"
                            alt={p.name}
                          />
                          <Card.ImgOverlay>
                            <button
                              onClick={() => {
                                setWish([...wish, p]);
                                localStorage.setItem(
                                  "wish",
                                  JSON.stringify([...wish, p])
                                );
                                toast("Item added to successfully in Wishlist");
                              }}
                            >
                              <IoIosHeartEmpty />
                            </button>
                          </Card.ImgOverlay>
                        </Card>

                        <div
                          className="card-body rounded-[0px] border-none"
                          onClick={() => navigate(`/product/${p.slug}`)}
                        >
                          <h5 className="card-title text-center cursor-pointer font-sans hover:text-black text-black p-0 m-0 font-normal text-base">
                            {p.name}
                          </h5>

                          <p className="card-text text-center font-sans text-lg font-bold hover:text-black cursor-pointer text-black p-0 m-0">
                            {" "}
                            PKR {p.price}
                          </p>
                          <p className="card-text text-center font-sans cursor-pointer hover:text-black text-xs p-0 m-0 text-black">
                            {p.description.substring(0, 30)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Col>
          </Row>{" "}
        </Container>
      </div>
    </Layout>
  );
};

export default CategoryProduct;
