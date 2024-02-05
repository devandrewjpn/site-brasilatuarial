import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb";
import HeroBanner from "@/src/common/hero-banner";
import React from "react"; 
import FaqArea from "../homes/home-2/faq-area";
import HeaderTwo from "@/src/layout/headers/header-2";
import FooterTwo from "@/src/layout/footers/footer-2";
import SeguradorasService from "./seguradoras";
import CtaArea from "../contact/cta-area";

const Artigos = () => {
  return (
    <>
      <HeaderTwo />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb title_top={"Artigos - Em breve"} title_bottom={""} />
            {/* <HeroBanner title="Seguradoras" subtitle="" bg_img="/atuarial/assets/img/salasuperior.jpg" />
            <SeguradorasService />
            <FaqArea style_service={true} />
            <CtaArea /> */}
          </main>
          <FooterTwo  />
        </div>
      </div>
    </>
  );
};

export default Artigos;
