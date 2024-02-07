import React from "react";
import Breadcrumb from "../../common/breadcrumbs/breadcrumb";
import HeroBanner from "../../common/hero-banner";
import HeaderTwo from "@/src/layout/headers/header-2";
import FooterTwo from "@/src/layout/footers/footer-2";
import FaqArea from "../homes/home-2/faq-area";

const FAQ = () => {
  return (
    <>
      <HeaderTwo />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb title_top="Perguntas" title_bottom="" />
            <HeroBanner title="Perguntas" subtitle="" bg_img="/atuarial/assets/img/salasuperior2.jpg" />
            <FaqArea />
          </main>
          <FooterTwo />
        </div>
      </div>
    </>
  );
};

export default FAQ;
