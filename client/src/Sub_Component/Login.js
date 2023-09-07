import React, { useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Layout from "./../Main_Component/Layout";
import { toast } from "react-toastify";
import axios from "axios";
import { useAuth } from "../context/Author";
import ForgetPassword from "./ForgetPassword";
import video from "../Assets/splash_-_23011 (1080p).mp4";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/login`,
        { email, password }
      );
      if (res.data.success) {
        toast.success("User Login Successfully");
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error("res.data.message");
      }
    } catch (error) {
      console.log(error);
      toast.error("Error in Login");
    }
  };
  return (
    <div>
      <Layout title={"Account - BAROQUE"}>
        <div className="p-3 md:p-4 mt-32">
          <div className="w-full max-w-sm bg-white m-auto flex  flex-col p-4">
            <h1 className="text-center text-3xl font-normal">Login</h1>

            <form className="w-full py-4 flex flex-col" onSubmit={handleSubmit}>
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
                  className=" w-full  border-none outline-none "
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
              <p
                className="text-left text-sm mt-2 cursor-pointer hover:underline underline-offset-2"
                onClick={() => {
                  navigate("/forget-password");
                }}
              >
                ForgetPassword
              </p>

              <button className="w-full max-w-[150px] m-auto  bg-black text-white p-1 hover:bg-red-600 cursor-pointer   text-xl font-medium text-center py-1  mt-4">
                Login
              </button>
            </form>

            <p className="text-left text-sm mt-2">
              Don't have account ?{" "}
              <Link
                to={"/login/register"}
                className="text-red-500 hover:underline underline-offset-2"
              >
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Login;
