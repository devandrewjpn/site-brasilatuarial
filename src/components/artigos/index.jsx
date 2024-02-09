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
            <Breadcrumb title_top={"Artigos"} title_bottom={""} />
            <section className="py-5">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="doc_box">
                      <div className="doc_img">
                        <img src="/assets/img/ebook_img.png" alt="" />
                        <span>Artigo</span>
                      </div>
                      <p>O MERCADO DE SEGUROS E SEUS PROTAGONISTAS</p>
                      <a href="/ebook.pdf" target="_blank">Baixar</a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* <HeroBanner title="Seguradoras" subtitle="" bg_img="/assets/img/salasuperior.jpg" />
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
