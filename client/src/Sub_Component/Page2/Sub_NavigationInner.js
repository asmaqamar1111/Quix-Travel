import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BsChevronRight } from "react-icons/bs";
import { Link, Outlet } from "react-router-dom";

function Sub_navigation() {
  return (
    <div className="mt-25 ">
      <div className="p-3 hidden sm:hidden md:block">
        <Link
          to="/baroque.pk"
          className="ml-32 p-2 hover:text-black cursor-pointer"
        >
          <p className="cursor-pointer d-inline hover:text-black">Home</p>
        </Link>

        <Link className="d-inline p-2 hover:text-black cursor-auto">
          <BsChevronRight className="d-inline" style={{ color: "grey" }} />
        </Link>

        <Link className="d-inline p-2 hover:text-black cursor-auto text-gray-400">
          UN-STITCHED
        </Link>
      </div>{" "}
      <hr className="w-5/6 mx-auto text-gray-400 hidden sm:hidden md:block" />
      <Outlet />
    </div>
  );
}

export default Sub_navigation;
