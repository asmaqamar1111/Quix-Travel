import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { FiUsers, FiEdit, FiPieChart } from "react-icons/fi";

const UserMenu = () => {
  return (
    <div className="flex justify-center mt-1 border-r ">
      <div className="text-center">
        <div className="">
          <p className="text-gray-400 font-sans tracking-wide text-left text-xl font-bold">
            DASHBOARD
          </p>{" "}
          <div className="flex items-center gap-4">
            <p className="flex items-center gap-2 text-base text-black hover:text-black py-2 pl-5 pr-[120px] focus-within:bg-cyan-200 bg-gray-100 rounded-lg focus-within:rounded-lg hover:drop-shadow-xl  ">
              <NavLink
                to="/dashboard/user/profile"
                className="flex hover:text-black align-baseline "
              >
                <span className="mr-4">
                  {" "}
                  <FiUsers />
                </span>
                <span>profile</span>
              </NavLink>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <p className="flex items-center gap-2 text-base text-black hover:text-black py-2 pl-5 pr-[120px] focus-within:bg-cyan-200 bg-gray-100 rounded-lg focus-within:rounded-lg hover:drop-shadow-xl ">
              <NavLink
                to="/dashboard/user/orders"
                className="flex hover:text-black align-baseline "
              >
                <span className="mr-4">
                  <AiOutlineShoppingCart />
                </span>
                <span>order</span>
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
