import React, { useEffect, useState } from "react";
import Layout from "../../Main_Component/Layout";
import { Col, Container, Row } from "react-bootstrap";
import { BiShow, BiHide } from "react-icons/bi";

import UserMenu from "./UserMenu";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuth } from "../../context/Author";
import { Link } from "react-router-dom";

const Profile = () => {
  const [auth, setAuth] = useAuth();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };
  //context
  //state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  //get user data
  useEffect(() => {
    const { email, name, phone, address } = auth?.user;
    setName(name);
    setPhone(phone);
    setEmail(email);
    setAddress(address);
  }, [auth?.user]);

  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        process.env.REACT_APP_API + `/api/v1/auth/profile`,
        { name, email, password, phone, address }
      );
      if (data?.error) {
        toast.error(data?.error);
      } else {
        setAuth({ ...auth, user: data?.updatedUser });
        let ls = localStorage.getItem("auth");
        ls = JSON.parse(ls);
        ls.user = data.updatedUser;
        localStorage.setItem("auth", JSON.stringify(ls));
        toast.success("Profile updated successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Error in updating");
    }
  };

  return (
    <Layout title={"Your Profile - BAROQUE"}>
      <div className="mt-20">
        <Container fluid className="m-3 p-3">
          <Row>
            <Col md={3}>
              <UserMenu />
            </Col>
            <Col md={9}>
              <button class="cursor-pointer mt-10 text-sm border-b border-black text-gray-500 font-bold">
                <Link
                  to={"/login"}
                  onClick={handleLogout}
                  className="hover:text-black"
                >
                  Sign Out
                </Link>
              </button>{" "}
              <div className="p-3 md:p-4 mt-16">
                <div className="w-full max-w-sm bg-white m-auto flex  flex-col p-4">
                  <h1 className="text-center text-2xl font-bold">
                    UPDATE USER PROFILE
                  </h1>

                  <form
                    className="w-full py-3 flex flex-col"
                    onSubmit={handleSubmit}
                  >
                    <input
                      type={"text"}
                      id="firstName"
                      name="firstName"
                      placeholder="Name"
                      onChange={(e) => setName(e.target.value)}
                      className="mt-1 mb-2 w-full pl-5 pr-10 bg-none border-t border-b border-l border-r border-black rounded-[0px] py-3 focus-within:outline-gray-700"
                      value={name}
                    />

                    <input
                      type={"email"}
                      id="email"
                      name="email"
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-1 mb-2 w-full pl-5 pr-10 bg-none border-t border-b border-l border-r border-black rounded-[0px] py-3 focus-within:outline-gray-700"
                      value={email}
                      disabled
                    />

                    <div className="flex mt-1 mb-2 w-full pl-5 pr-5 bg-none border-t border-b border-l border-r border-black rounded-[0px] py-3 focus-within:outline-gray-700">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full  border-none outline-none "
                        value={password}
                      />
                      <span
                        className="flex text-xl cursor-pointer"
                        onClick={handleShowPassword}
                      >
                        {showPassword ? <BiShow /> : <BiHide />}
                      </span>
                    </div>

                    <input
                      type={"phone"}
                      id="phone"
                      name="phone"
                      placeholder="Phone"
                      onChange={(e) => setPhone(e.target.value)}
                      className="mmt-1 mb-2 w-full pl-5 pr-10 bg-none border-t border-b border-l border-r border-black rounded-[0px] py-3 focus-within:outline-gray-700"
                      value={phone}
                    />

                    <input
                      type={"address"}
                      id="address"
                      name="address"
                      placeholder="Address"
                      onChange={(e) => setAddress(e.target.value)}
                      className="mmt-1 mb-2 w-full pl-5 pr-10 bg-none border-t border-b border-l border-r border-black rounded-[0px] py-3 focus-within:outline-gray-700"
                      value={address}
                    />

                    <button className="w-full max-w-[150px] m-auto  bg-black text-white p-1 hover:bg-red-600 cursor-pointer  text-white text-xl font-medium text-center py-1  mt-4">
                      UPDATE
                    </button>
                  </form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

export default Profile;
