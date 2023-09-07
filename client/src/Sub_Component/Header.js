import React from "react";
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoLinkedinSquare,
} from "react-icons/bi";
import { GoPerson } from "react-icons/go";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useAuth } from "../context/Author";

function Header() {
  const [auth, setAuth] = useAuth();

  return (
    <div className="p-0 m-0 ">
      <ul className="bg-black h-11 text-white  flex justify-between	">
        <span className="flex">
          <li className="pr-2 pl-9 text-sm hidden md:inline-block">
            (+92)34674567
          </li>
          <li className="hidden md:inline-block">|</li>
          <li className="px-4 text-sm cursor-pointer hidden md:inline-block">
            sale@quixtravel.com
          </li>
        </span>
        <span className="flex ">
          <li className=" px-2 cursor-pointer ">
            <BiLogoFacebook />
          </li>
          <li className="px-2 cursor-pointer ">
            <BiLogoTwitter />
          </li>
          <li className="pr-6 pl-2 cursor-pointer ">
            <BiLogoLinkedinSquare />
          </li>
          <li className="hidden md:inline-block">|</li>
          <li className="pl-6 pr-2 ">
            <GoPerson />
          </li>

          <li className=" text-sm pr-10 md:pr-9 cursor-pointer">
            {!auth.user ? (
              <>
                <Link to="/login" className="hover:text-white">
                  Sign in / Sign up
                </Link>
              </>
            ) : (
              <>
                <Link
                  to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`}
                  className="hover:text-white uppercase text-white"
                >
                  {auth?.user?.name}
                </Link>
              </>
            )}
          </li>
        </span>
      </ul>
    </div>
  );
}

export default Header;
