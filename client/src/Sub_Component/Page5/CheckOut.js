import React from "react";
import Left from "./Left";
import Right from "./Right";
import Layout from "../../Main_Component/Layout";

function CheckOut() {
  return (
    <Layout title={"Information - BAROQUE"}>
      <div className="flex ">
        <div className=" md:w-full lg:w-[900px]  ">
          <Left />
        </div>
        <div className=" lg:w-[700px] ">
          <Right />
        </div>
      </div>
    </Layout>
  );
}

export default CheckOut;

// import React from "react";

// const CheckOut = () => {
//   return <div>checkout</div>;
// };

// export default CheckOut;
