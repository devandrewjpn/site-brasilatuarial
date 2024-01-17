import React from "react";
import SEO from "../common/seo";
import ServiceEntidade from "../components/service-entidade";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Entidade"} />
      <ServiceEntidade />
    </Wrapper>
  );
};

export default index;
