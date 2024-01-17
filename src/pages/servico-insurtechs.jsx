import React from "react";
import SEO from "../common/seo";
import ServiceInsurtechs from "../components/service-insurtechs";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Insurtechs"} />
      <ServiceInsurtechs />
    </Wrapper>
  );
};

export default index;
