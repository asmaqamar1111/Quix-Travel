import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Col, Row } from "react-bootstrap";


function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="">
      {isOpen && (
        <div className="comment-section">
          
          <p className="bg-black opacity-[0.6] w-50 h-screen z-[3] absolute top-0 left-0">
            {" "}
          </p>

          <p className="absolute top-0 right-0 bg-white  w-50 h-screen z-[3] transition duration-700 ease-linear translate-x-[-100]">
            <p className="text-center text-base p-2">Filter</p>
            <span
              className="absolute top-5 text-base right-0 mr-5 text-gray-600 cursor-pointer"
              onClick={handleClose}
            >
              X
            </span>
            <p className="text-center text-sm text-gray-600">60 products</p>
            <hr className="text-gray-600 mt-2" />

            <details className="">
              <summary className=" p-[19px]  font-sans ">PRODUCT TYPE</summary>
              <ul className="m-4 font-sans">
                {" "}
                <input type="Checkbox" name="blue" value="yes" Checked />
                <span className="pl-3 pt-2 text-[13px]">
                  UNSTITCHED FORMAL (21)
                </span>
              </ul>
              <ul className="m-4 font-sans">
                {" "}
                <input type="Checkbox" name="blue" value="yes" Checked />
                <span className="pl-3 pt-2 text-[13px]">
                  UNSTITCHED SUMMER (14)
                </span>
              </ul>
              <ul className="m-4 font-sans">
                {" "}
                <input type="Checkbox" name="blue" value="yes" Checked />
                <span className="pl-3 pt-2 text-[13px]">
                  UNSTITCHED VELVET (10)
                </span>
              </ul>
              <ul className="m-4 font-sans">
                {" "}
                <input type="Checkbox" name="blue" value="yes" Checked />
                <span className="pl-3 pt-2 text-[13px]">
                  {" "}
                  UNSTITCHED WINTER (19)
                </span>
              </ul>
            </details>

            <details className="">
              <summary className=" p-[17px]  font-sans">PRICE</summary>
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
              <summary className=" p-[17px]  font-sans">SIZE</summary>
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
                <span className="pl-3 pt-2 text-[13px]">Custom Size (36)</span>
              </ul>
              <ul className="m-4 font-sans">
                {" "}
                <input type="Checkbox" name="blue" value="yes" Checked />
                <span className="pl-3 pt-2 text-[13px]">Default (39)</span>
              </ul>
            </details>

            <details className="">
              <summary className=" p-[17px]  font-sans">fABRIC TYPE</summary>
              <ul className="m-4 font-sans">
                {" "}
                <input type="Checkbox" name="blue" value="yes" Checked />
                <span className="pl-3 pt-2 text-[13px]">CHIFFON (14)</span>
              </ul>
              <ul className="m-4 font-sans">
                {" "}
                <input type="Checkbox" name="blue" value="yes" Checked />
                <span className="pl-3 pt-2 text-[13px]">KHADDAR (12)</span>
              </ul>
              <ul className="m-4 font-sans">
                {" "}
                <input type="Checkbox" name="blue" value="yes" Checked />
                <span className="pl-3 pt-2 text-[13px]">LAWN (16)</span>
              </ul>
              <ul className="m-4 font-sans">
                {" "}
                <input type="Checkbox" name="blue" value="yes" Checked />
                <span className="pl-3 pt-2 text-[13px]"> NET (8)</span>
              </ul>
              <ul className="m-4 font-sans">
                {" "}
                <input type="Checkbox" name="blue" value="yes" Checked />
                <span className="pl-3 pt-2 text-[13px]">ORGANZA (2)</span>
              </ul>
              <ul className="m-4 font-sans">
                {" "}
                <input type="Checkbox" name="blue" value="yes" Checked />
                <span className="pl-3 pt-2 text-[13px]"> VELVET (10)</span>
              </ul>
            </details>

            <details className="">
              <summary className=" p-[17px]  font-sans">PIECES</summary>
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
          </p>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
