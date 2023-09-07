import React, { useState, useEffect } from "react";
import "./NavigationBar.css";
import Navbar from "react-bootstrap/Navbar";
import { PiAirplaneTiltLight } from "react-icons/pi";
import { Link, Outlet } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoLinkedinSquare,
} from "react-icons/bi";

function NavigationBar() {
  const [navSize, setnavSize] = useState("4rem");
  const [navColor, setnavColor] = useState("transparent");
  const [topNav, setTopNav] = useState(30);
  const [textNav, setTextNav] = useState("black");

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#ffffff") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("6rem") : setnavSize("6rem");
    window.scrollY > 10 ? setTopNav(0) : setTopNav(30);
    window.scrollY > 10 ? setTextNav("black") : setTextNav("white");
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  return (
    <div className="navBarSection mt-[-16px] ">
      <nav
        className="fixed w-100 mx-0 drop-shadow ease-in-out duration-300 scroll-smooth"
        style={{
          backgroundColor: navColor,
          height: navSize,
          top: topNav,
          color: textNav,
          zIndex: "2",
        }}
      >
        {[false].map((expand) => (
          <Navbar key={expand} expand={expand} className="pt-3">
            <ul className="bg-transparent  h-24 justify-between	contents leading-[5rem] ">
              <span className="flex">
                <li className="pr-2 pl-9 icon">
                  <PiAirplaneTiltLight />
                </li>
                <li className=" text-3xl pr-10 font-black cursor-pointer">
                  <Link to="/" className="hover:text-black">
                    Quix Travel
                  </Link>
                </li>
              </span>

              <span className="flex ">
                <Navbar.Toggle
                  className="lg:hidden pr-4 focus:border-none border-none focus:shadow-none hover:shadow-none text-black border-0"
                  aria-controls={`offcanvasNavbar-expand-${expand}`}
                />

                <li className="px-2 cursor-pointer hidden lg:inline-block">
                  <Link to="/">Home</Link>
                </li>
                <li className="px-2 cursor-pointer   hidden lg:inline-block">
                  About
                </li>
                <li className="px-2 cursor-pointer  hidden lg:inline-block">
                  Flights
                </li>
                <li className="px-2 cursor-pointer  hidden lg:inline-block">
                  Hotel
                </li>
                <li className="px-2 cursor-pointer  hidden lg:inline-block">
                  Holidays
                </li>
                <li className="px-2 cursor-pointer  hidden lg:inline-block">
                  Tranding
                </li>
                <li className="px-2 cursor-pointer   hidden lg:inline-block">
                  Trips
                </li>
                <li className="pr-9 pl-2 cursor-pointer  hidden lg:inline-block">
                  Help
                </li>
              </span>
            </ul>
            <Navbar.Offcanvas
              id={"menuWidth"}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header
                closeButton
                className="btn-close font-lg focus:border-none border-none focus:shadow-none hover:shadow-none text-black "
              ></Offcanvas.Header>

              <Offcanvas.Body className="p-0 m-0">
                <Nav className="justify-content-end flex-grow-1 pe-3 pl-3 pt-10 text-center">
                  <h1 className="bg-gray-100 hover:bg-gray-200 pt-3 pb-1 pl-6 hover:text-black mb-1">
                    <Link to="">
                      <p className="hover:text-black text-base ">Home</p>
                    </Link>
                  </h1>

                  <h1 className="bg-gray-100 hover:bg-gray-200 pt-3 pb-1 pl-6 hover:text-black mb-1">
                    <Link to="">
                      <p className="hover:text-black text-base ">About</p>
                    </Link>
                  </h1>

                  <h1 className="bg-gray-100 hover:bg-gray-200 pt-3 pb-1 pl-6 hover:text-black mb-1">
                    <Link to="">
                      <p className="hover:text-black text-base ">Flights</p>
                    </Link>
                  </h1>
                  <h1 className="bg-gray-100 hover:bg-gray-200 pt-3 pb-1 pl-6 hover:text-black mb-1">
                    <Link to="">
                      <p className="hover:text-black text-base ">Hotel</p>
                    </Link>
                  </h1>
                  <h1 className="bg-gray-100 hover:bg-gray-200 pt-3 pb-1 pl-6 hover:text-black mb-1">
                    <Link to="">
                      <p className="hover:text-black text-base ">Holidays</p>
                    </Link>
                  </h1>
                  <h1 className="bg-gray-100 hover:bg-gray-200 pt-3 pb-1 pl-6 hover:text-black mb-1">
                    <Link to="">
                      <p className="hover:text-black text-base ">Tranding</p>
                    </Link>
                  </h1>
                  <h1 className="bg-gray-100 hover:bg-gray-200 pt-3 pb-1 pl-6 hover:text-black mb-1">
                    <Link to="">
                      <p className="hover:text-black text-base ">Trips</p>
                    </Link>
                  </h1>
                  <h1 className="bg-gray-100 hover:bg-gray-200 pt-3 pb-1 pl-6 hover:text-black mb-1">
                    <Link to="">
                      <p className="hover:text-black text-base ">Help</p>
                    </Link>
                  </h1>
                  <span className="flex flex-col absolute bottom-[9px] left-[8rem]">
                    <span className="flex">
                      <li className=" px-2 cursor-pointer ">
                        <BiLogoFacebook />
                      </li>
                      <li className="px-2 cursor-pointer ">
                        <BiLogoTwitter />
                      </li>
                      <li className="pr-6 pl-2 cursor-pointer ">
                        <BiLogoLinkedinSquare />
                      </li>
                    </span>

                    <li>
                      <p className="hover:text-black text-base ">Quix Travel</p>
                    </li>
                  </span>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Navbar>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}

export default NavigationBar;
