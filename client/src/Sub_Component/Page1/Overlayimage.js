import React from "react";
import Card from "react-bootstrap/Card";
import "./Overlayimage.css";
import { GiAirplaneDeparture, GiWorld } from "react-icons/gi";
import { FaHotel } from "react-icons/fa";
import video from "../../../src/Assets/pexels-pierre-blaché-3369102.jpg";
import video1 from "../../../src/Assets/WhatsApp Image 2023-09-05 at 10.31.57 PM.jpeg";
import { HiFilter } from "react-icons/hi";
import { ImLocation } from "react-icons/im";

function Overlayimage() {
  const [isSmallScreen, setIsSmallScreen] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    setIsSmallScreen(mediaQuery.matches);
    const listener = () => setIsSmallScreen(mediaQuery.matches);
    mediaQuery.addListener(listener);
    return () => mediaQuery.removeListener(listener);
  }, []);

  return (
    <div className="w-full relative ">
      <Card className="border-0 p-0 m-0 border-transparent rounded-none">
        {/* <img
          src={video}
          alt="landing img"
          // type="video/mp4"
          // muted
          // autoPlay
          // loop
          className="w-full h-full  object-cover bg-gray-100"
        /> */}
        {isSmallScreen ? (
          <img className="h-2/5" src={video1} alt="Small image" />
        ) : (
          <img src={video} alt="Large image" />
        )}
        <Card.ImgOverlay className="border-0 p-0 m-0 flex flex-col justify-center">
          <span className="md:inline-block hidden">
            {" "}
            <p className="flex text-[3rem] pb-3 text-center text-white pr-10 font-black">
              Let's Travel The World Together!
            </p>
            <p className="flex justify-center text-base text-white pr-10 ">
              Find awesome flights, hotels, holidays, cabs, buses and cruise.
            </p>
          </span>
          <span className=" text-white align-center absolute bottom-[8rem] lg:inline-block hidden">
            <ul className="flex flex-row">
              <li className="bg-cyan-500 opacity-[0.7] p-3 rounded-full icon btn text-white">
                <GiAirplaneDeparture />
              </li>
              <li className=" p-2  ">Flights</li>
              <li className=" p-3  icon">
                <FaHotel />
              </li>
              <li className=" p-2  ">Hotels</li>
              <li className=" p-3  icon">
                <GiWorld />
              </li>
              <li className=" p-2  ">Holidays</li>
            </ul>
          </span>
        </Card.ImgOverlay>
      </Card>

      <div className="home">
        <div className="cardDiv  md:flex w-[80%] absolute justify-center bottom-[-50px]">
          <div className="destinationInput md:w-[30%] p-2">
            <label htmlFor="city">Search your destination</label>
            <div className="input flex">
              <input
                type="text"
                placeholder="Search your destination..."
                className="placeholder:text-black"
              />
              <ImLocation className="icon" />
            </div>
          </div>

          <div className="dateInput md:w-[30%] p-2">
            <label htmlFor="date">Search your date:</label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>

          <div className="priceInput md:w-[30%] p-2">
            <div className="label_total flex">
              <label htmlFor="price">Max Price:</label>
              <h3 className="total">$5000</h3>
            </div>
            <div className="input flex ">
              <input type="range" max="5000" min="1000" className="" />
            </div>
          </div>

          <div className="searchOptions flex py-1">
            <HiFilter className="icon" />
            <span>More Filter</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overlayimage;
