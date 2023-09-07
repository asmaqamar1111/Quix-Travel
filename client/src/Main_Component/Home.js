import React from "react";
import Layout from "./Layout";
import Overlayimage from "../Sub_Component/Page1/Overlayimage";
import Categories from "../Sub_Component/Page1/Categories";
import Choose from "../Sub_Component/Page1/Choose";

function Home() {
  return (
    <Layout title={"BAROQUE"}>
      <Overlayimage />
      <Categories />
      <Choose />
    </Layout>
  );
}

export default Home;
