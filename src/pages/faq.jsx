import React from "react";
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";
import FAQ from "../components/faq";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"FAQ"} />
      <FAQ />
    </Wrapper>
  );
};

export default index;
