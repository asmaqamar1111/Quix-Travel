import React from "react";
import Container from "react-bootstrap/Container";
// import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import { GrFacebook } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
// import { a } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="footer bg-gray-100 mt-16">
        <div className="footer_menu bg-gray-100 pt-16">
          <ul className="flex flex-wrap justify-center my-4 md:mx-32 mx-[25px] uppercase tracking-widest">
            <li className="px-2 my-3">
              <a
                to="#"
                className="no-underline text-gray-500 hover:underline  hover:text-black  p-0 m-0 "
              >
                who we are
              </a>{" "}
              <span className="">|</span>
            </li>
            <br />
            <li className="px-2 my-3">
              <a
                href="#"
                className="no-underline text-gray-500 hover:underline  hover:text-black  p-0 m-0  "
              >
                contact us
              </a>{" "}
              <span className="">|</span>
            </li>
            <li className="px-2 my-3">
              <a
                href="#"
                className="no-underline text-gray-500 hover:underline  hover:text-black  p-0 m-0  "
              >
                our responsibility
              </a>{" "}
              <span className="">|</span>
            </li>
            <li className="px-2 my-3">
              <a
                href="#"
                className="no-underline text-gray-500 hover:underline  hover:text-black  p-0 m-0  "
              >
                exchange & refund
              </a>{" "}
              |
            </li>
            <li className="px-2 my-3">
              <a
                href="#"
                className="no-underline text-gray-500 hover:underline  hover:text-black  p-0 m-0  "
              >
                exchange form
              </a>{" "}
              |
            </li>
            <li className="px-2 my-3">
              <a
                href="#"
                className="no-underline text-gray-500 hover:underline  hover:text-black  p-0 m-0  "
              >
                shipping
              </a>{" "}
              |
            </li>
            <li className="px-2 my-3">
              <a
                href="#"
                className="no-underline text-gray-500 hover:underline  hover:text-black  p-0 m-0  "
              >
                look book
              </a>{" "}
              |
            </li>

            <li className="px-2 my-3">
              <a
                href="#"
                className="no-underline text-gray-500 hover:underline  hover:text-black  p-0 m-0  "
              >
                track your order
              </a>{" "}
              |
            </li>
            <li className="px-2 my-3">
              <a
                href="#"
                className="no-underline text-gray-500 hover:underline  hover:text-black  p-0 m-0  "
              >
                order cancellation form
              </a>{" "}
              |
            </li>
            <li className="px-2 my-3">
              <a
                href="#"
                className="no-underline text-gray-500 hover:underline  hover:text-black  p-0 m-0  "
              >
                customised stitching
              </a>{" "}
              |
            </li>
            <li className="px-2 my-3">
              <a
                href="#"
                className="no-underline text-gray-500 hover:underline  hover:text-black  p-0 m-0  p-0 m-0"
              >
                careers
              </a>{" "}
              |
            </li>
            <li className="px-2 my-3">
              <a
                href="#"
                className="no-underline text-gray-500 hover:underline  hover:text-black  p-0 m-0  "
              >
                legal
              </a>{" "}
              |
            </li>
            <li className="px-2 my-3">
              <a
                href="#"
                className="no-underline text-gray-500 hover:underline  hover:text-black  p-0 m-0  "
              >
                faq's
              </a>{" "}
            </li>
          </ul>
        </div>

        <div className="footer_icon m-0 p-0">
          <Container>
            <Row className="flex p-4">
              <Col className="flex flex-row justify-center">
                <span className="mx-4 my-2 hover:scale-125 cursor-pointer">
                  <GrFacebook />
                </span>
                <span className="mx-4 my-2 hover:scale-125 cursor-pointer">
                  <BsInstagram />
                </span>
                <span className="mx-4 my-2 hover:scale-125 cursor-pointer">
                  <FaTiktok />
                </span>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="footer_copyright flex justify-center text-center bg-black text-white p-3 font-sans">
          ALL RIGHTS RESERVED TO BAROQUE 2023
        </div>
      </div>
    </div>
  );
}

export default Footer;
