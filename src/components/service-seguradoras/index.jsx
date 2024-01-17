import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb";
import HeroBanner from "@/src/common/hero-banner";
import React from "react"; 
import FaqArea from "../homes/home-2/faq-area";
import HeaderTwo from "@/src/layout/headers/header-2";
import FooterTwo from "@/src/layout/footers/footer-2";
import SeguradorasService from "./seguradoras";

const Service = () => {
  return (
    <>
      <HeaderTwo />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb title_top={"Seguradoras"} title_bottom={"Serviços para seguradoras"} />
            <HeroBanner title="Seguradoras" subtitle="Serviços para seguradoras" bg_img="/atuarial/assets/img/salasuperior.jpg" />
            <SeguradorasService />
            <FaqArea style_service={true} />
          </main>
          <FooterTwo  />
        </div>
      </div>
    </>
  );
};

export default Service;
