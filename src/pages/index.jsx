import React from "react";
import SEO from "../common/seo";
import HomeTwo from "../components/homes/home-2/index";
import Wrapper from "../layout/wrapper";

const Home = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Início"} />
      <HomeTwo />
    </Wrapper>
  );
};

export default Home;
