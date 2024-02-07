import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb";
import HeroBanner from "@/src/common/hero-banner";
import React from "react"; 
import FaqArea from "../homes/home-2/faq-area";
import HeaderTwo from "@/src/layout/headers/header-2";
import FooterTwo from "@/src/layout/footers/footer-2";
import EntidadeService from "./entidade";
import CtaArea from "../contact/cta-area";

const Service = () => {
  return (
    <>
      <HeaderTwo />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb title_top={"3º Setor"} title_bottom={""} />
            <HeroBanner title="3º Setor" subtitle="" bg_img="/atuarial/assets/img/salasuperior.jpg" />
            <EntidadeService />
            <FaqArea style_service={true} />
            <CtaArea />
          </main>
          <FooterTwo  />
        </div>
      </div>
    </>
  );
};

export default Service;
