import React from "react";
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";
import Artigos from "../components/artigos";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Artigos"} />
      <Artigos />
    </Wrapper>
  );
};

export default index;
