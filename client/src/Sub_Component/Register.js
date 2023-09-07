import React, { useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import Layout from "./../Main_Component/Layout";
import { toast } from "react-toastify";
import axios from "axios";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/register`,
        { name, email, password, phone, address, answer }
      );
      if (res.data.success) {
        toast.success("User Register Successfully");
        navigate("/login");
      } else {
        toast.error("res.data.message");
      }
    } catch (error) {
      console.log(error);
      toast.error("Error in Registration");
    }
  };
  return (
    <div>
      <Layout title={"Create Account - BAROQUE"}>
        <div className="p-3 md:p-4 mt-20">
          <div className="w-full max-w-sm bg-white m-auto flex  flex-col p-4">
            <h1 className="text-center text-2xl font-bold">Create Account</h1>

            <form className="w-full py-3 flex flex-col" onSubmit={handleSubmit}>
              <input
                type={"text"}
                id="firstName"
                name="firstName"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                className="mt-1 mb-2 w-full pl-5 pr-10 bg-none border-t border-b border-l border-r border-black rounded-[0px] py-3 focus-within:outline-gray-700"
                value={name}
                required
              />

              <input
                type={"email"}
                id="email"
                name="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 mb-2 w-full pl-5 pr-10 bg-none border-t border-b border-l border-r border-black rounded-[0px] py-3 focus-within:outline-gray-700"
                value={email}
                required
              />

              <div className="flex mt-1 mb-2 w-full pl-5 pr-5 bg-none border-t border-b border-l border-r border-black rounded-[0px] py-3 focus-within:outline-gray-700">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="  w-full  border-none outline-none "
                  value={password}
                  required
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
                className="mt-1 mb-2 w-full pl-5 pr-10 bg-none border-t border-b border-l border-r border-black rounded-[0px] py-3 focus-within:outline-gray-700"
                value={phone}
                required
              />

              <input
                type={"address"}
                id="address"
                name="address"
                placeholder="Address"
                onChange={(e) => setAddress(e.target.value)}
                className="mt-1 mb-2 w-full pl-5 pr-10 bg-none border-t border-b border-l border-r border-black rounded-[0px] py-3 focus-within:outline-gray-700"
                value={address}
                required
              />

              <input
                type={"text"}
                id="answer"
                name="answer"
                placeholder="Any word ...."
                className="mt-1 mb-2 w-full pl-5 pr-10 bg-none border-t border-b border-l border-r border-black rounded-[0px] py-3 focus-within:outline-gray-700"
                onChange={(e) => setAnswer(e.target.value)}
                value={answer}
                required
              />

              <button className="w-full max-w-[150px] m-auto  bg-black text-white p-1 hover:bg-red-600 cursor-pointer  text-white text-xl font-medium text-center py-1  mt-4">
                Create
              </button>
            </form>
            <p className="text-left text-sm mt-2">
              Already have account ?{" "}
              <Link to={"/login"} className="text-red-500 underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Register;
