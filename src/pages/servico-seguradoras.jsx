import React from "react";
import SEO from "../common/seo";
import ServiceSeguradoras from "../components/service-seguradoras";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Seguradoras"} />
      <ServiceSeguradoras />
    </Wrapper>
  );
};

export default index;
