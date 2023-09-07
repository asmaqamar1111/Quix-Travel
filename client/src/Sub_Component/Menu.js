// import React, { useState } from "react";
// import Nav from "react-bootstrap/Nav";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import { BsFillTelephoneFill } from "react-icons/bs";
// import { IoLogoWhatsapp } from "react-icons/io";
// import "../styles.css";
// import { GrFacebook } from "react-icons/gr";
// import { BsInstagram } from "react-icons/bs";
// import { FaTiktok } from "react-icons/fa";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import { Link, Outlet } from "react-router-dom";

// function Menu() {
//   const [status, setStatus] = useState(false);
//   const [icon, setIcon] = useState("+");

//   const changeIcon = () => {
//     setIcon(icon === "+" ? "-" : "+");
//     setStatus(!status);
//   };

//   return (
//     <div className=" font-sans font-normal tracking-wide p-0 m-0 ">
//       <h1
//         className="bg-gray-100 hover:bg-gray-200 pt-3 pb-3 pl-6 hover:text-black mb-1 cursor-pointer"
//         onClick={changeIcon}
//       >
//         <Link>
//           <span className="hover:text-black text-base ">
//             COLLECTIONS
//             <p
//               className="d-inline float-right mr-5 text-2xl font-normal  hover:text-black "
//               style={{ marginTop: "-10px" }}
//             >
//               {icon}
//             </p>
//           </span>
//         </Link>
//       </h1>

//       {status ? (
//         <h1 className="bg-gray-100 hover:bg-gray-200 hover:text-black pt-3 pb-1 pl-6">
//           <Link to="/collections/shawls">
//             <p className="hover:text-black text-base ">SHAWLS</p>
//           </Link>
//         </h1>
//       ) : null}

//       {/* {status ? (
//         <h1 className="bg-gray-100 hover:bg-gray-200 pt-1 pb-1 pl-6 hover:text-black mb-1">
//           <Link to="/collections/swiss">
//             <p className="hover:text-black text-base ">SWISS</p>
//           </Link>
//         </h1>
//       ) : null} */}

//       {/* {status ? (
//         <h1 className="bg-gray-100 hover:bg-gray-200 pt-1 pb-1 pl-6 hover:text-black mb-1">
//           <Link to="/collections/chantelle">
//             <p className="hover:text-black text-base ">CHANTELLE</p>
//           </Link>
//         </h1>
//       ) : null} */}

//       <h1 className="bg-gray-100 hover:bg-gray-200 pt-3 pb-1 pl-6 hover:text-black mb-1">
//         <Link to="/collections/unstitched">
//           <p className="hover:text-black text-base ">UNSTITCHED</p>
//         </Link>
//       </h1>

//       <h1 className="bg-gray-100 hover:bg-gray-200 pt-3 pb-3 pl-6  text-red-500 mb-1 italic hover:text-red-500">
//         <Link to="/collections/special-price">
//           <p className="d-inline hover:text-red-500  text-red-500 italic">
//             SPECIAL PRICE
//           </p>{" "}
//           <p className="text-xs d-inline hover:text-red-500 pl-4 text-red-500 italic">
//             NEW
//           </p>
//         </Link>
//       </h1>

//       <h1 className="bg-gray-100 hover:bg-gray-200 pt-3 pb-1 pl-6 hover:text-black mb-1">
//         <Link to="/collections/ready-to-wear">
//           <p className="hover:text-black text-base ">READY TO WEAR</p>
//         </Link>
//       </h1>

//       <h1 className="bg-gray-100 hover:bg-gray-200 pt-3 pb-1 pl-6 hover:text-black mb-1">
//         <Link to="/collections/dupattas">
//           <p className="hover:text-black text-base ">DUPATTAS</p>
//         </Link>
//       </h1>

//       <h1 className="bg-gray-100 hover:bg-gray-200 pt-3 pb-1 pl-6 hover:text-black mb-4">
//         <Link to="/collections/bottoms">
//           <p className="hover:text-black text-base ">BOTTOMS</p>
//         </Link>
//       </h1>

//       <img
//         src="https://flagcdn.com/pk.svg"
//         width="30"
//         alt="South Africa"
//         className="d-inline ml-6"
//       />
//       <NavDropdown
//         title="PKR"
//         className="border-none outline-none p-0 hover:bg-transparent navbar-nav dropdown-menu "
//         style={{ margin: "-32px 0px 0px 60px", border: "none" }}
//       >
//         <NavDropdown.Item href="#" className="border-0 hover:bg-transparent">
//           <span>
//             {" "}
//             <img
//               src="https://flagcdn.com/pk.svg"
//               width="30"
//               alt="South Africa"
//               className="d-inline "
//             />
//           </span>
//           <span className="flag pl-3">PKR</span>
//         </NavDropdown.Item>
//         <NavDropdown.Item href="#" className="border-0 hover:bg-transparent">
//           <span>
//             {" "}
//             <img
//               src="https://flagcdn.com/us.svg"
//               width="30"
//               alt="United States"
//               className="d-inline"
//             />
//           </span>
//           <span className="flag pl-3">USD</span>
//         </NavDropdown.Item>
//         <NavDropdown.Item href="#" className="border-0  hover:bg-transparent">
//           <span>
//             {" "}
//             <img
//               src="https://flagcdn.com/gb.svg"
//               width="30"
//               alt="United Kingdom"
//               className="d-inline"
//             />
//           </span>
//           <span className="flag pl-3">GBP</span>
//         </NavDropdown.Item>
//       </NavDropdown>

//       <div className=" bottom-8">
//         <p className="mt-32 ml-5 text-base font-medium">
//           HELPLINE :{" "}
//           <p className="d-inline">
//             <BsFillTelephoneFill
//               style={{ color: "grey" }}
//               className="d-inline ml-3 text-xl"
//             />
//           </p>
//           <p className="d-inline">
//             <IoLogoWhatsapp
//               style={{ color: "green" }}
//               className="d-inline ml-3 text-xl"
//             />
//           </p>
//         </p>

//         <div className="footer_icon m-0 pb-3">
//           <Container>
//             <Row className="flex ">
//               <Col className="flex flex-row justify-start">
//                 <span className=" ml-4 mr-5 mt-10 text-xl">
//                   <GrFacebook />
//                 </span>
//                 <span className=" ml-4 mr-5 mt-10 text-xl">
//                   <BsInstagram />
//                 </span>
//                 <span className=" ml-4 mt-10 text-xl">
//                   <FaTiktok />
//                 </span>
//               </Col>
//             </Row>
//           </Container>
//         </div>
//       </div>
//       <Outlet />
//     </div>
//   );
// }

// export default Menu;
