import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb";
import HeroBanner from "@/src/common/hero-banner";
import React from "react"; 
import FaqArea from "../homes/home-2/faq-area";
import HeaderTwo from "@/src/layout/headers/header-2";
import FooterTwo from "@/src/layout/footers/footer-2";
import InsurtechsService from "./insurtechs";
import CtaArea from "../contact/cta-area";

const Service = () => {
  return (
    <>
      <HeaderTwo />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb title_top={"Insurtechs"} title_bottom={""} />
            <HeroBanner title="Insurtechs" subtitle="" bg_img="/assets/img/salasuperior.jpg" />
            <InsurtechsService />
            {/* <FaqArea style_service={true} /> */}
            <CtaArea />
          </main>
          <FooterTwo  />
        </div>
      </div>
    </>
  );
};

export default Service;
